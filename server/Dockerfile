FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY .env .env
COPY server.js ./server.js
COPY ./routes/ ./routes
COPY ./models/ ./models
COPY ./certificates/ ./certificates
EXPOSE 443
CMD [ "node", "server.js" ]