const path = require("path");
const axios = require("axios");
const cfenv = require("cfenv");
const { config } = require("process");

//Setup appEnv
let appEnv;
try {
  appEnv = cfenv.getAppEnv({
    vcapFile: path.join(__dirname, "../vcap-local.json"),
  });
} catch (e) {
  console.log("Could not set App-Environment: ", e);
  process.exit();
}

//Variables
const baseURL =
  process.env.GATEWAY_API_URL || appEnv.services.clApiGateway.apiUrl;
const apikey =
  process.env.GATEWAY_API_KEY || appEnv.services.clApiGateway.apiKey;

//Setup axios
axios.defaults.headers.common["x-api-key"] = apikey;

//Exportss
module.exports = {
  axios,
  parseURL: (relativeURL) => `http:${baseURL}${relativeURL}`,
  get: (relativeURL, cb) => {
    axios
      .get(`http:${baseURL}${relativeURL}`)
      .then(({ data }) => {
        cb(false, data);
      })
      .catch((e) => {
        console.log(
          "Failed request (`/catalogue/categories/${req.params.id}/products`): ",
          e
        );
        cb(e);
      });
  },
};
