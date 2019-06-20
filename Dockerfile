FROM nginx:stable-alpine
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY web /usr/share/nginx/html/web/
ADD index.html /usr/share/nginx/html/
ADD manifest.json /usr/share/nginx/html/
ADD service-worker.js /usr/share/nginx/html/