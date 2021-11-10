const cfenv = require("cfenv");
const path = require("path");
const axios = require("axios");

const { config } = require("process");

//Setup appEnv
let appEnv;
try {
  appEnv = cfenv.getAppEnv({
    vcapFile: path.join(__dirname, "../vcap-local.json"),
  });
} catch (e) {
  console.log("ERROR -> Could not set App-Environment! -> e: ", e);
  process.exit();
}

//Variables
const URLbase = appEnv.services.clApiGateway.apiUrl;

//Setup axios
axios.defaults.headers.common["x-api-key"] =
  appEnv.services.clApiGateway.apiKey;

//Exportss
module.exports = {
  axios,
  parseURL: (URL_relative) => `http:${URLbase}${URL_relative}`,
  get: (URL_relative, cb) => {
    axios
      .get(`http:${URLbase}${URL_relative}`)
      .then(({ data }) => {
        cb(false, data);
      })
      .catch((e) => {
        console.log(
          "ERROR -> `/catalogue/categories/${req.params.id}/products` failed to request! -> e: ",
          e
        );
        cb(e);
      });
  },
};
