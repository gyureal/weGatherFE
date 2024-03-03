# 빌드
FROM node:14 AS build
WORKDIR /app
COPY .env.development .env

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# 배포
FROM nginx
COPY --from=build /app/build /usr/share/nginx/html

# nginx 설정 이동
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/wegather.conf /etc/nginx/conf.d

# 백그라운드로 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]