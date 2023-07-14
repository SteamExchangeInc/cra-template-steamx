FROM node:20-alpine

# accept the port argument
ARG PORT=3000

# accept the HOMEDIR argument
ARG HOMEDIR="/dapp"

# create the app folder
RUN mkdir -p ${HOMEDIR}

# set the app folder to be the work directory
WORKDIR ${HOMEDIR}

# copy the package.json to the work dir
COPY package.json .

# install dependencies based on the environment
ARG NODE_ENV="development"
RUN if [ "$NODE_ENV" = "production" ]; \
  then yarn install --production; \
  else yarn install; \
  fi

# set the node env variable
ENV NODE_ENV ${NODE_ENV}

# add bash
RUN apk add bash
# add some basic aliases
RUN echo "alias ll='ls -al'" >> /etc/profile

# copy the rest of the files
COPY . ./

# expose the specified port
EXPOSE ${PORT}

# run the start command from package.json
# the command instructions in docker-compose file can override this 
CMD ["yarn", "start"]