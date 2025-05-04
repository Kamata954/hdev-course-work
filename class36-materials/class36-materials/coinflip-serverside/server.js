const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {

  const readWrite = (file, contentType) => {
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    readWrite('index.html', 'text/html')
  }
  else if (page == '/api') {
    const flipCoin = _ => {
        let random = Math.floor(Math.random() * 10)
        return random < 5 ? "Heads" : "Tails"
    }

    let result = flipCoin()
    let image = ""

    if(result == 'Heads'){
        image = "https://i.ebayimg.com/images/g/Q-4AAOxyXtFRIZOV/s-l1200.jpg"
    }
    if(result == "Tails"){
        image = "https://sterlingmagiccoins.com/wp-content/uploads/2023/02/us-half-dollar-coin-tails.jpg"
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
        decision: result,
        img: image
        }
        res.end(JSON.stringify(objToJson));
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    readWrite('js/main.js','text/javascript')
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
