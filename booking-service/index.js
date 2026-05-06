require('dotenv').config();
const express = require("express");
const app = express();

app.use(express.json());

app.post("/bookings", (req, res) => {
  const booking = {
    id: Math.floor(Math.random() * 1000),
    ...req.body
  };
  res.json(booking);
});

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => console.log(`Booking Service running on port ${PORT}`));