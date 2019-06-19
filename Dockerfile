FROM nginx:stable-alpine
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
ADD docs /usr/share/nginx/html