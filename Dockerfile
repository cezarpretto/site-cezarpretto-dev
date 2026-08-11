# Imagem final: só node + artefatos pré-buildados do Next.js standalone.
# O `npm run build` roda na CI e produz .next/standalone (com server.js e node_modules
# mínimo) + .next/static. Aqui só copiamos.
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
