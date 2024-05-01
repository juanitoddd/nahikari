FROM node:20-alpine
RUN apk add --update bash
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "preview" ]