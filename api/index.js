const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api/user", authRoute);
app.use("/api/product", productRoute);

//Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
