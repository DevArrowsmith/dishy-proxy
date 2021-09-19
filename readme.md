# Dishy Proxy 🍜
## Introduction

This API is a proxy used to fetch data from the [Yelp! Fusion API](https://www.yelp.com/fusion).

---

## Aims

Trying to fetch data from Yelp! Fusion from a browser-based application results in a CORS error.

This API acts as a proxy to circumvent that issue. The process is as follows:
- A GET request is submitted to this API.
- This API takes the parameters from the GET request, and uses them to perform a second GET request, this one to the Yelp! Fusion API.
- This API receives the response from Yelp! Fusion and returns it to the frontend. The [CORS node package](https://www.npmjs.com/package/cors) is used to enable CORS in the response so that it can reach the frontend via the browser.

---

## Use

This API is currently configured to be hosted locally . Clone the repo, install the node packages and run ```npm start``` to host the API on port 5000. 

It will ultimately be hosted on Heroku.

---

## Node Packages
- express
- nodemon
- cors
- node-fetch v2.0.0
- dotenv

---

## Next Steps

[Write tests with mock Fetch requests](https://www.leighhalliday.com/mock-fetch-jest)