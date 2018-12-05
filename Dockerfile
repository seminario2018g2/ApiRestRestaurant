FROM node:latest

RUN mkdir /app
WORKDIR /app


CMD [ "node", "app.js" ]
