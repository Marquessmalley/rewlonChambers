const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/", (req, res) => {
  res.render("about", { contact: new Contact() });
});
router.post("/", async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const newContact = await contact.save();
    res.render("confirmation", { contact: newContact });
  } catch {
    res.render("about", {
      contact: contact,
      errorMessage: "Error sending info.",
    });
  }
});

module.exports = router;
