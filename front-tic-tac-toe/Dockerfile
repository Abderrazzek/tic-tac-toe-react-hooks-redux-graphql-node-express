FROM node:16-alpine AS development
ENV NODE_ENV development
WORKDIR /front-tic-tac-toe
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]