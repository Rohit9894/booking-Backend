require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./src/config/db");
const bookingRoute = require("./src/routes/booking.route");
const vehicleRoute = require("./src/routes/vehicle.route");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/booking", bookingRoute);
app.use("/vehicle", vehicleRoute);
app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(3000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }
  console.log("Server is running");
});
