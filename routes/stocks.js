const finnhub = require('finnhub');
const router = require('express').Router();

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bv4mnbf48v6qpate9n30";
const finnhubClient = new finnhub.DefaultApi()

router.post('/get-stock', function (req, res, next) {
  const { symbol } = req.body
  finnhubClient.quote(symbol, (error, data, response) => {
    res.send(data);
  });
})

module.exports = router
