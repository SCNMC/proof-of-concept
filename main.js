const express = require('express')
const app = express()
const port = 3000
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

//serve public files 
app.use(express.static('public'))

// hook up template engine 
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))