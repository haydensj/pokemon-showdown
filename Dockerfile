FROM node:20 as base

WORKDIR /home/node/app

COPY . .

RUN npm install

RUN npm install -g typescript

FROM base as production

ENV NODE_PATH=./build

RUN npm run build

RUN npm run tsc

RUN ln -s "$(which node)" /usr/bin/node

RUN mkdir -p /tmp

RUN mkdir -p /workspace

RUN ln -s /tmp /workspace/dist

EXPOSE 80

CMD nodejs pokemon-showdown
