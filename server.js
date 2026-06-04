require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const pairRoute = require("./routes/pair");
const authRoute = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(
  path.join(__dirname, "public")
));

app.use("/api/pair", pairRoute);
app.use("/api/auth", authRoute);

app.get("/api/status", (req, res) => {

  res.json({
    success: true,
    bot: process.env.BOT_NAME,
    owner: process.env.OWNER_NAME,
    status: "online"
  });

});

const PORT =
process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`
=================================
MRK.ER BOT STARTED
PORT: ${PORT}
=================================
`);

});
