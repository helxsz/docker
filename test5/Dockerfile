FROM dockerfile/nodejs

EXPOSE  3000

ADD start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD /tmp/start.sh

# docker build -t test5 .
# docker run -it --rm -p 8080:3000  test5
# docker run -d --rm -p 8080:3000  test5   sudo docker ps  sudo docker logs <container id>
# http://localhost:8080
