const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const fs = require('fs')

const cssFile = __dirname + '/../public/styles.css'
const minCssFile = __dirname + '/../public/styles.min.css'

const headerFile = __dirname + '/../public/detail.css'
const minHeaderFile = __dirname + '/../public/detail.min.css'

const detailFile = __dirname + '/../public/agenda.css'
const minDetailFile = __dirname + '/../public/agenda.min.css'

fs.readFile(cssFile, 'utf-8', (err, data) => { 
  // console.log('Before:')
  // console.log(data)

  postcss([cssnano, autoprefixer])
    .process(data)
    .then((data) => {
      // console.log('\r\nAfter:')
      // console.log(data.css)

      // Wegschrijven naar het bestand
      fs.writeFile(minCssFile, data.css, (err) => {
        if (err) console.log(err)
        console.log('Successfully written minified css to ' + minCssFile + '.')
      })
    })
})

// Header css //

// fs.readFile(headerFile,'utf-8', (err, data) => {

//     postcss([cssnano, autoprefixer])
//     .process(data)
//     .then((data) => {
//       // console.log('\r\nAfter:')
//       console.log(data.css)

//       // Wegschrijven naar het bestand
//       fs.writeFile(minHeaderFile, data.css, (err) => {
//         if (err) console.log(err)
//         console.log('Successfully written minified css to ' + minHeaderFile + '.')
//       })
//     })
// })

// // Detail CSS//

// fs.readFile(detailFile,'utf-8', (err, data) => {

//     postcss([cssnano, autoprefixer])
//     .process(data)
//     .then((data) => {
//       // console.log('\r\nAfter:')
//       console.log(data.css)

//       // Wegschrijven naar het bestand
//       fs.writeFile(minDetailFile, data.css, (err) => {
//         if (err) console.log(err)
//         console.log('Successfully written minified css to ' + minDetailFile + '.')
//       })
//     })
// })