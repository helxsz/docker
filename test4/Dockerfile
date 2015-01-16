FROM dockerfile/ubuntu

#RUN add-apt-repository -y ppa:chris-lea/node.js -y
#RUN apt-get -qq update 

# install nodejs and npm
RUN apt-get install -y nodejs npm git-core python 

EXPOSE  3000

ADD start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD ./tmp/start.sh

# docker build -t helxsz/node-dev:0.4 .
# docker run -it --rm -p 8080:3000  helxsz/node-dev:0.4
# docker run -d --rm -p 8080:3000  helxsz/node-dev:0.4   sudo docker ps  sudo docker logs <container id>
# http://localhost:8080
