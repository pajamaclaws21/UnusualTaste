"use strict";

const express = require("express");
const Unblocker = require("unblocker");
const app = express();
const unblocker = Unblocker({
  prefix: '/view/'
});

app.use(unblocker);

app.get("/", (req, res) =>
  res.send("<h1>UnusualTaste</h1>");
  res.send("<p>A small CORS tool, because AllOrigins sometimes fails.</p>")
  res.send("<p>You can use it to get by some basic annoyances and directly request other domains.</p>")
  res.send("<p>To go to a site, go to https://unusualtaste.onrender.com/view/YOUR_URL</p>")
);

// start the server and allow unblocker to proxy websockets:
const port = process.env.PORT || 8080;
app.listen(port).on("upgrade", unblocker.onUpgrade);
console.log(`unblocker app live at http://localhost:${port}/`);