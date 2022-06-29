const express = require('express')
const { json } = require('express/lib/response')
const app = express()
const port = 3000
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

//serve public files 
app.use(express.static('public'))

// hook up template engine 
app.set('view engine', 'ejs')
app.set('views', './views',)




  
  app.get("/", (req, res) => {
    fetchJson("https://weloveweb.api.fdnd.nl/v1/session").then(function (jsonData) {
    res.render('index', {
      title: 'Dit is de we love web api',
      sessions: jsonData.data
    })
  })
})

    app.get("/detail/:id", (req, res) => {
      res.render('detail', {
      })
      })


      app.get("/agenda", (req, res) => {
        fetchJson("https://weloveweb.api.fdnd.nl/v1/session").then(function (jsonData) {
        res.render('agenda', {
          title: 'Dit is de we love web api',
          sessions: jsonData.data
        })
      })
    })


      app.get('/pages/crud', (req, res) => {
        fetchJson("https://weloveweb.api.fdnd.nl/v1/session").then(function (jsonData) {
        res.render('./pages/crud', {
          title: 'Dit is de we love web',
          sessions: jsonData.data,
        })
      })
    })

    app.get("/pages/crud/edit", (req, res) => {
      res.render("./pages/edit");
    });

    app.get("/pages/crud/add", (req, res) => {
      res.render("./pages/add");
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