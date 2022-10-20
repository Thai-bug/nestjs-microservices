FROM node:16.17-alpine3.15

WORKDIR /home/app

COPY ./apps/api-gateway ./

COPY package.json ./

RUN npm install pm2 -g

RUN npm i

RUN npm run build

CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
