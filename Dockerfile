# Imagem final: nginx servindo o export estático do Next.js.
# O `out/` deve existir antes do build da imagem (CI roda `npm run build` e empacota out + este arquivo).
FROM nginx:1.27-alpine

COPY out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
