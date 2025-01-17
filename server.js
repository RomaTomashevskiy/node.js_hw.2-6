const app = require('./app');
const mongoose = require("mongoose");
const { DB_HOST, PORT } = process.env;


mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Server running. Use our API on port: 3000")
  })
  .catch(error => {
    console.log(error.message);
    console.log("We have problems with our BD !!!")
    process.exit(1);
  });