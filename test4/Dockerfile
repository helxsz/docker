FROM dockerfile/nodejs 

# Set the working directory
WORKDIR   /src

# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install


EXPOSE  3000

CMD ["node", "/src/app.js"]

# docker build -t test4 .
# docker run -it --rm -p 8080:3000  test4
# docker run -d --rm -p 8080:3000 --link redis:redis test4   sudo docker ps  sudo docker logs <container id>
# http://localhost:8080
