FROM node:16

# Install libvips-dev for sharp compat
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /opt
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}


ADD yarn.lock /opt/
ADD package.json /opt/
ADD turbo.json /opt/
ADD apps/backend/package.json /opt/apps/backend/package.json

RUN yarn config set network-timeout 600000 -g && yarn install

ADD apps/backend /opt/apps/backend
RUN yarn build
EXPOSE 1337

CMD ["yarn", "dev"]