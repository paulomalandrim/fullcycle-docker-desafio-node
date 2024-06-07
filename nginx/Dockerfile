FROM nginx:latest

COPY default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "/docker-entrypoint.sh" ]

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]
