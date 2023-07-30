const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Load routes from the routes directory
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
  require(path.join(routesPath, file))(app);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
