const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

//Route imports
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const blogRoute = require("./routes/blogRoute");
const prodCategoryRoute = require("./routes/prodCategoryRoute");
const blogCategoryRoute = require("./routes/blogCategoryRoute");
const brandRoute = require("./routes/brandRoute");
const couponRoute = require("./routes/couponRoute");
// const uploadRoute = require("./routes/uploadRoute");

dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api/user", authRoute);
app.use("/api/product", productRoute);
app.use("/api/blog", blogRoute);
app.use("/api/prodCategory", prodCategoryRoute);
app.use("/api/blogCategory", blogCategoryRoute);
app.use("/api/brand", brandRoute);
app.use("/api/coupon",couponRoute);
// app.use("/api/upload", uploadRoute);

//Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
