FROM node:14-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4000

RUN npm build

CMD ["npm", "start"]