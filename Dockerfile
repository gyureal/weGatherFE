FROM node:14 AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_API_URL http://wegather:8080
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html

