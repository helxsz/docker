cd /tmp

# try to remove the repo if it already exists
rm -rf node-js-sample; true

git clone https://github.com/heroku/node-js-sample/

cd node-js-sample

npm install

node index.js