FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm ci
RUN npm install -g react-scripts@4.0.2

COPY . ./
EXPOSE 3005

# only for testing during dev
RUN ls -d $PWD/*
RUN echo $PWD
