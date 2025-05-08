FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install -g wait-port


COPY . .

EXPOSE 5000
CMD ["node", "index.js"]
