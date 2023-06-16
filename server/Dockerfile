FROM node:18-alpine

ARG NODE_ENV
ARG AAA

WORKDIR /app

COPY ./server/package*.json ./
RUN npm ci --quiet

COPY ./server/src src
COPY ./server/tsconfig* ./

RUN echo "NODE_ENV=$NODE_ENV" >> .env
RUN echo "AAA=$AAA" >> .env

RUN npm run build

EXPOSE 3000
CMD ["node","./dist/app.js"]
