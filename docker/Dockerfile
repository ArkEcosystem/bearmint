FROM node:18-alpine

WORKDIR /home/node

ADD docker/entrypoint.sh /entrypoint.sh
ADD docker/supervisord.conf /etc/supervisord.conf

ENV USER "node"
ENV PATH "$PATH:/opt/bin"

RUN apk add --no-cache --virtual .build-deps make gcc g++ python3 git \
    && apk add --no-cache sudo bash curl unzip gnupg tar libc6-compat file libstdc++ supervisor autoconf make gcc g++ python3 git \
    && mkdir /opt/bin \
    && echo "server pool.ntp.org" > /etc/ntp.conf \
    && echo "server time.google.com" >> /etc/ntp.conf \
    && npm install -g npm@latest \
    && npm install -g pnpm \
    && apk del .build-deps \
    && echo 'node ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER node
ENTRYPOINT ["bash", "-c", "/entrypoint.sh \"$@\"", "--"]
