const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname))); //serve css fule

app.use("/", routes);

app.use((req, res) => {
  //catch-all 404 error page
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
