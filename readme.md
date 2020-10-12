npm i -g express-generator
express --view=none
npm i
npm start
npm i supertest chai
mocha test/integration

npm i --save-dev mocha-junit-reporter
mocha --reporter mocha-junit-reporter test/integration

docker build -t fake-app .
docker run --rm -p "3000:3000" fake-app