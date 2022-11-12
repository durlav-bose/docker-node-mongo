FROM node:13-alpine
ENV MONGO_DB_USERNAME=user \
    MONGO_DB_PASSWORD=password \
    MONGO_DB_HOST=mongo \
    MONGO_DB_PORT=27017 \
    MONGO_DB_DATABASE=testdata \
    PORT=3005 
RUN mkdir /home/app
COPY ./app /home/app
EXPOSE 3005
CMD ["node", "/home/app/index.js"]