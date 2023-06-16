FROM node:18-alpine

WORKDIR /app

RUN cd server
COPY package*.json ./
RUN npm ci --quiet

COPY ./src src
COPY ./tsconfig* ./

RUN npm run build

EXPOSE 3001
CMD ["node","./dist/app.js"]
