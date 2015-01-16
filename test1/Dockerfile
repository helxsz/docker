FROM dockerfile/ubuntu

#RUN add-apt-repository -y ppa:chris-lea/node.js -y
#RUN apt-get -qq update 


# install nodejs and npm
RUN apt-get install -y nodejs npm git-core

# Set the working directory
WORKDIR   /src

EXPOSE  3000

CMD ["/bin/bash"]


# docker build -t helxsz/node-dev:0.1 .
# docker run -it --rm -p 8080:3000 -v `pwd`:/src helxsz/node-dev:0.1

# npm install
# node app.js
# http://localhost:8080