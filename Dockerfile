FROM node:lts

ARG WORKDIR=/opt/apps/topcon/

RUN mkdir -p $WORKDIR

WORKDIR $WORKDIR


COPY package.json package-lock.json $WORKDIR

RUN npm install

COPY . $WORKDIR


CMD npm start
