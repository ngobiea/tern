FROM node:lts

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8485

CMD ["npm", "start"]