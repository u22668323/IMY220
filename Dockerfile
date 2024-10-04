FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npm install mongodb

CMD ["npm", "start"]

EXPOSE 3000
