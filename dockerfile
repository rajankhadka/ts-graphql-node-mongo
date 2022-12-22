FROM node:16

WORKDIR /app

COPY . .

RUN npm i && \
    npm run build

# COPY . .

ENTRYPOINT [ "npm", "run", "prod:test" ];