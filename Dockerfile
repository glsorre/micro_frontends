FROM alpine:latest
EXPOSE 4000
USER root

# RUN apk add --update openssl curl ca-certificates
# RUN printf "%s%s%s\n" "http://nginx.org/packages/alpine/v" `egrep -o '^[0-9]+\.[0-9]+' /etc/alpine-release` "/main" | tee -a /etc/apk/repositories
# RUN curl -o /tmp/nginx_signing.rsa.pub https://nginx.org/keys/nginx_signing.rsa.pub
# RUN openssl rsa -pubin -in /tmp/nginx_signing.rsa.pub -text -noout
# RUN mv /tmp/nginx_signing.rsa.pub /etc/apk/keys/
RUN apk add --update nginx

RUN mkdir /home/micro_frontends
COPY index.ssi.html /home/micro_frontends/index.html
COPY dist /home/micro_frontends/dist
COPY init.sh /home/micro_frontends/init.sh
COPY nginx.conf /home/micro_frontends/nginx.conf

RUN chmod 755 /home/micro_frontends/init.sh

ENTRYPOINT  ["/home/micro_frontends/init.sh", "/home/micro_frontends/nginx.conf"]
