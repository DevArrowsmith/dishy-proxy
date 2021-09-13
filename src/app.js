const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const TOKEN = process.env.TOKEN;

const app = express();

app.use(cors());

app.get('/restaurants/:location', async (req, res) => {
  const location = req.params.location;
  console.log(location);
  try{
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?radius=2000&location=${location}&term=restaurants`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const yelpData = await response.json();
    res.status(200).json(yelpData);

  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
});

module.exports = app;