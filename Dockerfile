FROM arhea/yarn:6

# set the working directory to our source root
WORKDIR /usr/src/app

# copy the package.json and yarn.lock file
COPY package.json /usr/src/app

# install the dependencies
RUN npm install

EXPOSE 5000

CMD ["npm" , "start"]
