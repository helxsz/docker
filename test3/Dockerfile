FROM dockerfile/ubuntu

#RUN add-apt-repository -y ppa:chris-lea/node.js -y
#RUN apt-get -qq update 

# install nodejs and npm
RUN apt-get install -y nodejs npm git-core python redis-server

# Set the working directory
WORKDIR   /src

# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install

# start redis-server
RUN service redis-server start

EXPOSE  3000

CMD ["node", "/src/app.js"]

# docker build -t helxsz/node-dev:0.3 .
# docker run -it --rm -p 8080:3000  helxsz/node-dev:0.3
# docker run -d --rm -p 8080:3000  helxsz/node-dev:0.3   sudo docker ps  sudo docker logs <container id>
# http://localhost:8080
