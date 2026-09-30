'use client';

import { useEffect, useRef } from 'react';

interface Copy {
  label: string;
  title: string;
  forWho: string;
  rows: { k: string; v: string }[];
  panelTitle: string;
  nav: string[];
  orders: { id: string; mid: string; tag: string }[];
  weeks: string;
  deploy: string;
  ruleFrom: string;
  ruleTo: string;
  caption: string;
  example: string;
}

// Progresso 0 → 1 a partir da rolagem. No desktop a cena é "sticky" (o progresso vem da altura da cena);
// no mobile ela flui normalmente e o progresso vem da posição do artefato na viewport.
function useScrollProgress(scene: React.RefObject<HTMLElement>, artifact: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = scene.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const desktop = window.matchMedia('(min-width: 1024px)');
    let raf = 0;

    const update = () => {
      raf = 0;
      let p = 0;
      if (desktop.matches) {
        const r = el.getBoundingClientRect();
        const travel = r.height - window.innerHeight + 72;
        p = travel > 0 ? -r.top / travel : 1;
      } else if (artifact.current) {
        const r = artifact.current.getBoundingClientRect();
        const vh = window.innerHeight;
        p = (vh * 0.9 - r.top) / (vh * 0.62);
      }
      el.style.setProperty('--p', String(Math.min(1, Math.max(0, p))));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scene, artifact]);
}

export default function PaperToProduct({
  copy,
  children,
}: {
  copy: Copy;
  children: React.ReactNode;
}) {
  const scene = useRef<HTMLDivElement>(null);
  const artifact = useRef<HTMLDivElement>(null);
  useScrollProgress(scene, artifact);

  const rowVars = ['--r0', '--r1', '--r2', '--r3'];

  return (
    <div ref={scene} className="scene">
      <div className="stage mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:pb-0 lg:pt-0">
        {children}

        <div className="relative">
          <div ref={artifact} className="artifact" role="img" aria-label={copy.caption}>
            <div className="sheet" aria-hidden="true">
              <p className="sheet-title">{copy.title}</p>
              <p className="sheet-for">{copy.forWho}</p>
              <div className="sheet-rows">
                {copy.rows.map((row, i) => (
                  <div
                    key={row.k}
                    className="srow"
                    style={{ ['--r' as string]: `var(${rowVars[i]})` }}
                  >
                    <span className="srow-box">
                      [ <i>x</i>]
                    </span>
                    <span>
                      <span className="srow-k">{row.k}</span>
                      <span className="srow-v">
                        <span
                          className="type"
                          style={{
                            ['--n' as string]: row.v.length,
                            ['--d' as string]: `${0.5 + i * 0.75}s`,
                          }}
                        >
                          {row.v}
                        </span>
                        {i === copy.rows.length - 1 && <span className="cur cur-accent blink ml-1" />}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel" aria-hidden="true">
              <div className="panel-side">
                {copy.nav.map((item, i) => (
                  <span key={item} className={i === 0 ? 'on' : undefined}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="panel-main">
                <p className="panel-title">{copy.panelTitle}</p>
                <div className="ptable">
                  {copy.orders.map((o) => (
                    <div key={o.id} className="prow tnum">
                      <span>{o.id}</span>
                      <span className="prow-mid">{o.mid}</span>
                      <span className="prow-tag">{o.tag}</span>
                    </div>
                  ))}
                </div>
                <div className="pweeks">
                  {[1, 2, 3, 4].map((n, k) => (
                    <span key={n} className="pweek" style={{ ['--k' as string]: k }}>
                      {copy.weeks}
                      {n}
                    </span>
                  ))}
                </div>
                <p className="pdeploy">
                  {copy.deploy}
                  <span className="cur blink" style={{ fontSize: '0.75rem' }} />
                </p>
              </div>
            </div>

            <div className="ruler" aria-hidden="true">
              <div className="ruler-track">
                <span className="cur" />
              </div>
              <span>{copy.ruleFrom}</span>
              <span className="max-sm:hidden">{copy.example}</span>
              <span>{copy.ruleTo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
