FROM nginx:stable-alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
ADD web /usr/share/nginx/html