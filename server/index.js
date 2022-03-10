import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import { readFile, readFileSync } from "fs";
import App from "../client/App";

const app = new express();
const port = 3100;

app.use(express.static("dist"));
app.get("/", async (_req, res) => {
  const style = readFile("public/index.css");
  const index = readFileSync("public/index.html", "utf8");
  const rendered = renderToString(<App />);
  res.send(style);
  res.send(index.replace("{{indicator}}", rendered)); //server know render the component to wanted place in html

  // res.send("<h1>Product Landing Page</h1>");
});

app.listen(port);
console.log("server is listening");
