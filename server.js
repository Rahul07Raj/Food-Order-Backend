// import app from "./app.js";

const app = require("./app");
const connectDB = require("./config/database.js");
connectDB();

app.get("/", (req, res, next) => {
  res.send("hiii rahul");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT: ${process.env.PORT}`);
});
