// const server = require('./server');
require('dotenv').config(); 
const server = require('./server.js');

const port = process.env.PORT || 5050;

server.listen(port, () => {
    console.log(`\n*** Building RESTful APIs with Express - Server Running on http://localhost:${port} ***\n`);
  });