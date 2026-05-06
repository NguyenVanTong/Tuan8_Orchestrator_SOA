require('dotenv').config();
const express = require("express");
const app = express();

app.use(express.json());

app.post("/payments", (req, res) => {
  const success = Math.random() > 0.5; // Giả lập 50% thất bại, 50% thành công

  if (success) {
    res.json({ status: "paid" });
  } else {
    res.status(500).json({ status: "fail" });
  }
});

const PORT = process.env.PORT || 8084;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));