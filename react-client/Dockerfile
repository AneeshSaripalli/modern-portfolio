FROM node
SHELL ["/bin/bash", "-c"] 
WORKDIR /app

ADD javascript/package.json javascript/package.json 
ADD javascript/tsconfig.json javascript/tsconfig.json 

RUN cd javascript && npm update
RUN cd javascript && NODE_ENV=development npm install

ADD javascript javascript

RUN cd /app/javascript && npm run build

# NGINX web server setup
FROM fholzer/nginx-brotli

WORKDIR /nginx

COPY ./javascript/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/javascript/build /etc/nginx/html