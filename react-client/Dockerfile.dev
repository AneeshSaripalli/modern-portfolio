FROM wasm-base
SHELL ["/bin/bash", "-c"] 
WORKDIR /app

ADD javascript/package.json javascript/package.json 
ADD javascript/tsconfig.json javascript/tsconfig.json 
ADD javascript/.npmrc javascript/.npmrc

ADD wasm wasm

RUN cd /app/wasm && source ~/.cargo/env && wasm-pack build --debug --out-dir /app/wasm-build

ARG GITHUB_AUTH_TOKEN
ENV GITHUB_AUTH_TOKEN $GITHUB_AUTH_TOKEN

RUN cd javascript && npm update
RUN cd javascript && NODE_ENV=development npm install

ADD javascript javascript

ADD javascript/docker_scripts/start.sh .
RUN chmod +x start.sh


ENTRYPOINT [ "./start.sh" ]