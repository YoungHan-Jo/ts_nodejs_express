FROM node:18-alpine

WORKDIR /app

COPY ./server/package*.json ./
RUN npm ci --quiet

COPY ./server/src src
COPY ./server/tsconfig* ./

RUN npm run build

EXPOSE 3001
CMD ["node","./dist/app.js"]
