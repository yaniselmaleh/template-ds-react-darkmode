FROM node:14-alpine

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install
CMD ["npm", "start"]