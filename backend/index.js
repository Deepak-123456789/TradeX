require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { Signup, Login, Logout } = require("./controller/AuthController");
const { HoldingsModel } = require("./model/HoldingsModel");
const jwt = require("jsonwebtoken");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { authenticate } = require("./util/authenticate");
const UserModel = require("./model/userModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

const allowedOrigins = [process.env.SERVER1, process.env.SERVER2];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.get("/allHoldings", authenticate, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", authenticate, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", authenticate, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  let savedOrder = await newOrder.save();
  const email = req.headers["email"];

  await UserModel.updateOne(
    { email: email },
    { $push: { orders: savedOrder._id } }
  );
  res.send("Order saved!");
});
app.get("/allorders", authenticate, async (req, res) => {
  const email = req.headers["email"];

  let user = await UserModel.findOne({ email: email }).populate("orders");
  res.json(user.orders);
});
app.post("/signup", Signup);
app.post("/login", Login);
app.post("/logout", Logout);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});
