# develop stage
FROM node:13.14-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g @quasar/cli
COPY . .
# build stage
FROM develop-stage as build-stage
RUN npm build   
RUN quasar build
# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
# CMD ["nginx", "-g", "/app/src/App.vue"]
CMD ["nginx", "-g", "daemon off;"]