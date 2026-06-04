const express = require("express");
const router = express.Router();

const isAdmin = require("../middleware/auth");

router.get("/dashboard", isAdmin, (req, res) => {

  res.json({
    success: true,
    bot: "MRK.ER BOT",
    status: "ONLINE",
    users: 0,
    uptime: process.uptime()
  });

});

module.exports = router;
