const request = require('request')
const express = require('express')
const app = express()
const port = process.env.port || 3000
const path = require('path')
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs')
const hbs = require('hbs')

const url ='http://newsapi.org/v2/top-headlines?country=us&apiKey=affa5f04ce8448488345ae2dc47b6809'
app.get('/news', (req, res) => {
    request({ url, json: true }, (error, response) => {
        if (error) {
            console.log('unable to connect news service!')
        } else {
            res.render('news', { response })
            // console.log(response.body.articles)
        }
    })
})
app.listen(port, () => {
    console.log('listenting on port 3000')
})