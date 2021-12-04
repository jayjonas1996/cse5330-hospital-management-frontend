FROM node:16-buster AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY entrypoint.sh entrypoint.sh

RUN npm install
EXPOSE 4000
COPY public/ public
COPY src/ src
RUN npm run build

RUN ["chmod", "+x", "./entrypoint.sh"]
