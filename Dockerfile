FROM nginx:alpine

COPY ./dist/FEIMS2.0/. /app

EXPOSE 80



