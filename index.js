const axios = require('axios');

axios.post('http://2f9b5af70e17.ngrok.io/test', 
    "hello"
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
