const express = require('express')
const app = express()
const port = 3000
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

//serve public files 
app.use(express.static('public'))

// hook up template engine 
app.set('view engine', 'ejs')
app.set('views', './views')

// app.get("/", (req, res) => {
//     res.render("index.ejs");
//   });

app.get("/", (req, res) => {
    res.render("index");
  });

    app.get("/detail", (req, res) => {
        res.render("detail");
      });

      app.get("/agenda", (req, res) => {
        res.render("agenda");
      });



app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
 async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }