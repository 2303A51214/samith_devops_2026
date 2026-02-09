const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Dashboard API
app.get("/api/dashboard", (req, res) => {

  const totalIncome = 50000;
  const totalExpenses = 32000;

  res.json({
    totalIncome,
    totalExpenses
  });

});

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
