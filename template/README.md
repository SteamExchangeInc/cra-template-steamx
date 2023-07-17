# Build

Build the docker image

```bash
# build the client docker image
docker build -t steamx/create-dapp-client -f Dockerfile.client .
```

# Scaffold

Use the `create-dapp-client` image to scaffold the client (react) file/folder structure

```bash
# git bash requires the leading / in the local volume path
docker run --rm --volume=/${PWD}/client:/app:rw steamx/create-dapp-client
```

# Run Client

To run the (react) client app, add a `client` service to `docker-compose.yml`, for example

```yaml
version: "3.8"

services:
  client:
    image: [image name]
    container_name: [container name]
    build:
      context: ./client
      args:
        HOMEDIR: ${HOMEDIR_CLIENT}
        PORT: ${CLIENT_PORT}
        NODE_ENV: "development"
    environment:
      - WATCHPACK_POLLING=${WATCHPACK_POLLING-true}
    ports:
      - "${CLIENT_PORT}:${CLIENT_PORT}"
    volumes:
      - ./client/src:${HOMEDIR_CLIENT}/src:rw
      - ./client/:${HOMEDIR_CLIENT}/
      - frontend_node_modules:${HOMEDIR_CLIENT}/node_modules

volumes:
  frontend_node_modules:
```

and don't forget to create a `.env` file in the `docker-compose.yml` folder

```bash
CLIENT_PORT=3000
RPC_PORT=8545

# home directory (no / at the end!)
HOMEDIR_CLIENT="/dapp"
HOMEDIR_HARDHAT="/hardhat"

# enable hot reload
WATCHPACK_POLLING=true
```

Then build the image with `docker-compose build` and run it with `docker-compose up`. 

Finally, navigate to `http://localhost:${CLIENT_PORT}`