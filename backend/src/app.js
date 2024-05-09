const express = require("express");
const signupRoute = require("./routes/signup.route");
const loginRoute = require("./routes/login.route");

const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const createAdminAccount = require("./scripts/admin.js");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/user", signupRoute);
app.use('/auth',loginRoute);


//fake routes 
app.get("/", (req, res) => {
  res.send(`
    <style>
      /* CSS styles */
      html, body {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
      }
      .container {
        text-align: center; /* Align content center */
      }
      h1, p {
        color: purple; /* Text color purple */
      }
    </style>
    <div class="container">
      <h1>The Backend is Running</h1>
      <p>The frontend is Running On Port <a href="http://localhost:3000">http://localhost:3000</a></p>
    </div>
  `);
});




createAdminAccount();
app.listen(PORT, () => {
  console.log(`the server is running on : http://localhost:${PORT}/`);
});
