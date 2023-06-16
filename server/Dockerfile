FROM node:18-alpine
ENV NODE_ENV dev

WORKDIR /app

COPY package*.json ./
RUN npm ci --quiet

COPY ./src src
COPY ./tsconfig* ./

RUN npm run build

EXPOSE 3001
CMD ["node","./dist/app.js"]
