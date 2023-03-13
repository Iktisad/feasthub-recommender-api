FROM node:16.13.0

WORKDIR /api

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]