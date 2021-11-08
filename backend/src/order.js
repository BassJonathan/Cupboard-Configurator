const router = require("express").Router();
const { axios, parseURL } = require("./axios");

router.post("/", (request, response) => {
  axios
    .post(parseURL("/order"), request.body)
    .then(({ data }) => {
      response.json(data);
      response.end();
    })
    .catch((e) => {
      console.log("ERROR: ", e);
      res.end();
    });
});

module.exports = router;
