FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV SECRET_KEY="5f8b3497ee9820e5aaccb66d18e299b987c2e5f21cc1214ab529e871ab084aab8f9a0c677e2868ae873c537a96ad7e386dacea091c45973903689329c8e49a98"
ENV OPENAI_API_KEY="sk-iCyKWSi1PIY9D5iD1S5OrTJ2D7GXovG9zvu5xnqzC7T3BlbkFJTiOSYC9TvfsyeSjLCxiP0iIt4-vQf4BLzQloE3ejwA"

EXPOSE 3000

CMD ["sh", "-c", "node initdb.js && node server.js"]
