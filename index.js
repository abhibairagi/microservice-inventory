const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
const port = 5000;

app.post("/", (req, res) => {
  const { strOne, strTwo } = req.body;

  if (typeof strOne !== "string" || typeof strTwo !== "string") {
    return res.json({
      message: "Input Value are not string",
    });
  }

  if (strOne && strTwo) {
    return res.json({
      data: strOne + " " + strTwo,
    });
  }

  return res.json({ message: "Please send Two strings Value" });
});

app.get("/", (req, res) => {
  res.json("healthy");
});

app.get("/testing", (req, res) => {
  res.json("Test Succssfully");
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
