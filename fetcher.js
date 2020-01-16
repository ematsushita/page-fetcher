const request = require('request');
const args = process.argv.splice(2);
const fs = require('fs');

request(args[0], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(args[1], body, ()=> {
    if(error) { 
      return console.log(error)
    } 

    const stats = fs.statSync(args[1]);
    let fileSizeInBytes = stats["size"]

    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`)

    if(error.code === 'ENOENT') {
      //this means the file exists//
      console.log("No such file or directory.");
  } 
  })
});