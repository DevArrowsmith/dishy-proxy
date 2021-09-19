const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const TOKEN = process.env.TOKEN;

const app = express();

app.use(cors());

app.get('/restaurants/:location', async (req, res) => {
  const location = req.params.location;
  try{
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?radius=500&location=${location}&term=restaurants`, {
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

app.get('/restaurant/:restaurantId', async (req, res) => {
  const restaurantId = req.params.restaurantId;
  try{
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/${restaurantId}`, {
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