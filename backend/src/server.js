import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("server is listening at port", 5001);
});
