FROM node:14 AS build
WORKDIR /app
COPY .env.development .env

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html