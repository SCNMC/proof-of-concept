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

app.get('/', (req, res) => {
    fetchJson("https://chipr.api.fdnd.nl/v1/project").then(function (jsonData) {
        res.render('index', {
          title: 'Dit is de chippr api',
          projects: jsonData.data,
        })
      })
    })



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