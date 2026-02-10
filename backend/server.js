const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(productRoutes);
app.use("/api", productRoutes);


// mongoose.connect("mongodb://127.0.0.1:27017/productdb")
mongoose.connect("mongodb+srv://angelinmehitha_db_user:wWbgEl7CQKy88SZj@cluster.ww02o7n.mongodb.net/productdb")

  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Product API running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



