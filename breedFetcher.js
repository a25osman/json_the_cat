const breed = process.argv[2];
const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  
  if (error) {
    console.log("Print this error message ", error);
    return;
  }
  const data = JSON.parse(body);

  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log("The requested breed is not found"); 
  }
});