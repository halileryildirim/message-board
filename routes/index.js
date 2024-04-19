const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date(),
  },
  {
    text: "Hello Express",
    user: "Dante",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.get("/new", function (req, res) {
  res.render("form", { title: "Enter Your Message" });
});

router.post("/new", function (req, res) {
  const data = req.body;
  messages.push({
    text: data.messageText,
    user: data.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
