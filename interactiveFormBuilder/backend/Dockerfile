FROM mhart/alpine-node:8.12
LABEL Khomkrit Uparakham <azimuth3d@gmail.com>
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
ADD package.json package-lock.json ./
RUN npm install

ADD . /usr/local/app
RUN npm prune production
CMD ["npm","run","production"]
EXPOSE 5000
