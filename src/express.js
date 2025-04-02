
const express = require("express");

// --- Import Routes ---
const carValueRoutes = require("./routes/carValueRoutes");
const discountRoute = require("./routes/discountRoute"); 
const premiumQuoteRoutes = require("./routes/premiumQuoteRoutes");

const app = express();

// --- Core Middleware ---
app.use(express.json());

app.use("/api/v1", carValueRoutes);       
app.use("/api/v1", discountRoute);        
app.use("/api/v1/quote", premiumQuoteRoutes); 

app.use((req, res, next) => {
  if (!res.headersSent) {
    res.status(404).json({ error: "Not Found" });
  } else {
    next();
  }
});

// --- Global Error Handling Middleware ---
app.use((err, req, res, next) => {
  console.error("Unhandled application error:", err);

  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
});

// --- Server Initialization ---
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;