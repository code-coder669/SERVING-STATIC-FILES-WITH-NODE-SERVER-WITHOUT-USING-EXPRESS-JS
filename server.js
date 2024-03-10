const fs = require("fs");
const http = require("http");
const path = require("path");

// PORT AND HOSTNAME ESTABLISHED
let port = 4000;
let host = "localhost";

//SERVER CREATED CREATED
const server = http.createServer((req, res) => {
  // ---------------- HTML ---------------------
  if (req.url === "/" || req.url === "/index.html") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./FrontEnd/index.html", "UTF-8", (err, home) => {
      if (err) {
        throw err;
      } else {
        res.statusCode = 200;
        res.end(home);
      }
    });
  } else if (req.url === "/about" || req.url === "/about.html") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./FrontEnd/about.html", "UTF-8", (err, about) => {
      if (err) throw err;
      else {
        res.statusCode = 200;
        res.end(about);
      }
    });
  } else if (req.url === "/contact" || req.url === "/contact.html") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./FrontEnd/contact.html", "UTF-8", (err, contact) => {
      if (err) throw err;
      else {
        res.statusCode = 200;
        res.end(contact);
      }
    });
  } else if (req.url === "/services" || req.url === "/services.html") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./FrontEnd/services.html", "UTF-8", (err, services) => {
      if (err) throw err;
      else {
        res.statusCode = 200;
        res.end(services);
      }
    });
  } else if (req.url === "/projects" || req.url === "/projects.html") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./FrontEnd/projects.html", "UTF-8", (err, projects) => {
      if (err) throw err;
      else {
        res.statusCode = 200;
        res.end(projects);
      }
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./FrontEnd/errorPage.html", "UTF-8", (err, errorPage) => {
      res.statusCode = 200;
      res.end(errorPage);
    });
  }

  // -------------------CSS-------------------------
  if (req.url.match(/.css$/)) {
    // if file ends with .css

    // define the path of the css we want to render
    let cssPath = path.join(__dirname, "FrontEnd", req.url);

    // read the css file as a stream
    let cssReadStream = fs.createReadStream(cssPath, "UTF-8");

    // SETTING HEADERS FOR THE CSS FILE
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");

    // PIPPING STREAM OF DATA TO THE MAIN RESPONSE
    cssReadStream.pipe(res);
  }

  // ------------------- IMAGES -------------------------

  if (req.url.match(/.jpg$/)) {
    let imagePath = path.join(__dirname, "FrontEnd", req.url);
    let imageReadStream = fs.createReadStream(imagePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpg");

    imageReadStream.pipe(res);

  }else if (req.url.match(/.jpeg$/)){
    let imagePath = path.join(__dirname, "FrontEnd", req.url);
    let imageReadStream = fs.createReadStream(imagePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpg");
    imageReadStream.pipe(res);
  }else if (req.url.match(/.png$/)){
    let imagePath = path.join(__dirname, "FrontEnd", req.url);
    let imageReadStream = fs.createReadStream(imagePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");
    imageReadStream.pipe(res);
  }
  
  else if (req.url.match(/.svg$/)){
    let imagePath = path.join(__dirname, "FrontEnd", req.url);
    let imageReadStream = fs.createReadStream(imagePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/svg+xml");
    imageReadStream.pipe(res);
  }else if (req.url.match(/.gif$/)){
    let imagePath = path.join(__dirname, "FrontEnd", req.url);
    let imageReadStream = fs.createReadStream(imagePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/gif");
    imageReadStream.pipe(res);
  }else{
    // res.end()
  }





  // ------------------- JAVASCRIPT -------------------------
  if (req.url.match(/.js$/)) {
    // define the path of the css we want to render
    let ScriptPath = path.join(__dirname, "FrontEnd", req.url);

    // read the css file as a stream
    let ScriptReadStream = fs.createReadStream(ScriptPath, "UTF-8");

    // SETTING HEADERS FOR THE CSS FILE
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/javascript");

    // PIPPING STREAM OF DATA TO THE MAIN RESPONSE
    ScriptReadStream.pipe(res);
  }
});

server.listen(port, host, () => {
  console.log(`Node server running @ port: http://${host}:${port}`);
});
