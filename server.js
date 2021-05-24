if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//LIBRARIES
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//SET VIEWS & LAYOUTS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

//USE STATIC FILES
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
//GET ROUTES LOCATIONS
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const mixtapeRouter = require("./routes/mixtape");
const genArtRouter = require("./routes/art");

//MONGOOSE CONNECTION
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to mongoose"));

// USE ROUTER
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/mixtape", mixtapeRouter);
app.use("/art", genArtRouter);

//LISTEN TO APP
app.listen(process.envPORT || 3000, () => console.log("server started"));
