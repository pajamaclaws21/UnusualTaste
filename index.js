"use strict";

const express = require("express");
const Unblocker = require("unblocker");
const app = express();
const unblocker = Unblocker({
  prefix: '/view/'
});

app.use(unblocker);

app.get("/", function routeHandler(req, res){
  res.send(`
           <h1>UnusualTaste</h1>
           <br>
           <p>A small CORS tool, because AllOrigins sometimes fails. You can use it to get by some basic annoyances and directly request other domains.</p>
           <br>
           <p>To go to a site, go to https://unusualtaste.onrender.com/view/YOUR_URL</p>
           <br>
           <p>Check out UnusualTaste's </p><a href="https://github.com/pajamaclaws21/UnusualTaste/">Github Repo</a><p>!</p>
  `);
});

// start the server and allow unblocker to proxy websockets:
const port = process.env.PORT || 8080;
app.listen(port).on("upgrade", unblocker.onUpgrade);
console.log(`unblocker app live at http://localhost:${port}/`);
