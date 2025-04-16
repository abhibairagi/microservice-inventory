FROM --platform=linux/amd64 node:21.7.1

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]