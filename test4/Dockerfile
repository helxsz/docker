FROM dockerfile/nodejs 

# Set the working directory
WORKDIR   /src

# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install


EXPOSE  3000

CMD ["node", "/src/app.js"]

# docker build -t helxsz/test4 .
# docker run -it --rm -p 8080:3000 --link redis:redis --mongodb:mongodb helxsz/test4  
