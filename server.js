const app = require("./app"); // Assuming app.js is in the same directory

const port = 3001;

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server;
