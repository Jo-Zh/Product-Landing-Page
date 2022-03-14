import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import { readFileSync } from "fs";
import App from "../client/App";
import path from "path";

const app = new express();
const port = 3100;

// app.use(express.static("public"));
app.use(express.static("dist"));
app.get("/", async (_req, res) => {
  const index = readFileSync(path.join("public", "/index.html"), "utf8");
  // const rendered = renderToString(<App />);
  // res.send(index.replace("{{indicator}}", rendered)); //server know render the component to wanted place in html
  res.send(index);
});

app.listen(port);
console.log("server is listening");
