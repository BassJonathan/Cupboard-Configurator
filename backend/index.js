const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/catalogue", require("./src/catalogue"));
app.use("/order", require("./src/order"));

app.get("*", (request, response) => {
  response.end(
    "The backend for the Cupboard Ltd. Webapplication is running. To get data request via the declared get-requests."
  );
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
