FROM node:18-alpine as build

## Set the working directory
#WORKDIR /app
#
## Copy package.json and package-lock.json to the working directory
#COPY package*.json ./
#
#RUN npm ci
#
## Copy the rest of the application files
#COPY . .
#
#RUN npm run build

WORKDIR /usr/app
COPY . /usr/app
RUN npm ci
RUN npm run build

