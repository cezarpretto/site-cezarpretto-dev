import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabelledby?: string;
}

export default function Section({ id, children, className, ariaLabelledby }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn('mx-auto max-w-6xl px-6 py-24 md:py-32', className)}
    >
      {children}
    </section>
  );
}
