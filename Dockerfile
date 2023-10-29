#`FROM node:18.18.2-alpine` is a Docker instruction that specifies the base image for the Dockerfile. 
#In this case, it is using the `node:18.18.2-alpine` image, which is a lightweight version of the Node.js runtime environment based on Alpine Linux.
FROM node:18.18.2-alpine

#The line `ARG USERNAME=node` is defining a build-time argument named `USERNAME` with a default value of `node`. 
#This argument can be overridden during the build process using the `--build-arg` flag when running the `docker build` command.
ARG USERNAME=node

#The lines `ARG USER_UID=1000` and `ARG USER_GID=$USER_UID` are defining build-time arguments for the Docker image.
ARG USER_UID=1000
ARG USER_GID=$USER_UID

#This command is installing the `shadow` and `bash` packages using the package manager `apk` in the Docker image.
RUN apk --no-cache add shadow bash

#This command is installing the latest version of the `create-vite` package globally in the Docker image.
RUN npm install -g create-vite@latest

#This command is performing a series of actions related to user and group management in the Docker image.
RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME

# This is installing the latest version of the `create-vite` package globally in the Docker image.
RUN npm install -g create-vite@latest 

# This argument is setting the working directory for any subsequent instructions in the Dockerfile to `/app`. 
#This means that any commands or actions that are executed after this line will be performed in the context of the `/app` directory within the Docker image.
WORKDIR /app

USER $USERNAME