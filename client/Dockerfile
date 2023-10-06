#FROM node:18-alpine
#
## Set the working directory
#WORKDIR /app
#
## Copy package.json and package-lock.json to the working directory
#COPY package*.json ./
#
#RUN npm install
#
## Copy the rest of the application files
#COPY . .
#
#RUN npm run build

# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app
RUN npm ci

# Copying all the files in our project
COPY . .

# Starting our application
# CMD npm start

RUN npm run build


