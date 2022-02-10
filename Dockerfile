FROM node:latest

WORKDIR /app

RUN npm install -g serverless

USER node
