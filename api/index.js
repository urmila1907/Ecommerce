const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {errorHandler,notFound} = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/api/user", authRouter);

//Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
