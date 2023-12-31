FROM node:17-alpine
RUN mkdir -p /opt
WORKDIR /opt
COPY . .
RUN npm install

RUN apk --no-cache add curl
RUN npx prisma generate dev
RUN npm uninstall bcrypt
RUN npm install bcrypt

EXPOSE 3000
CMD ["npm", "run", "migrate:dev"]