FROM node:alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "syncdb"]
CMD ["npm", "run", "start"]

#FROM nginx:alpine as production-stage
#RUN mkdir /app
#COPY --from=build-stage /app/dist /app
#COPY nginx.conf /etc/nginx/nginx.confinx.conf