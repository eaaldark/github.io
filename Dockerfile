FROM node:16.16.0-alpine3.16

RUN npm i -g npm@latest && npm i -g react-scripts

WORKDIR /eaaldark.github.io
