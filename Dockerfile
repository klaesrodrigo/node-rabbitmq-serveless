FROM node:14

RUN mkdir -p /usr/s
WORKDIR /usr/
COPY package.json /usr/
RUN npm install
COPY . /usr/