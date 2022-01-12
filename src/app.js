const request = require('request')
const express = require('express')
const app = express()
const port = process.env.port || 3000
const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs')
const hbs = require('hbs')

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=affa5f04ce8448488345ae2dc47b6809'
app.get('/news',(req,res)=>{
request({url,json:true},(error,response)=>{
    if (error) {
        console.log('unable to connect news service!')
    }else{
        res.render('news',{
            news:[
                {
            title: response.body.articles[0].title,
            description: response.body.articles[0].description,
            image: response.body.articles[0].urlToImage
                },
                {
                    title: response.body.articles[1].title,
                    description: response.body.articles[1].description,
                    image: response.body.articles[1].urlToImage
                },
                {
                    title: response.body.articles[2].title,
                    description: response.body.articles[2].description,
                    image: response.body.articles[2].urlToImage
                },
                {
                    title: response.body.articles[3].title,
                    description: response.body.articles[3].description,
                    image: response.body.articles[3].urlToImage
                },
                {
                    title: response.body.articles[4].title,
                    description: response.body.articles[4].description,
                    image: response.body.articles[4].urlToImage
                },
                {
                    title: response.body.articles[5].title,
                    description: response.body.articles[5].description,
                    image: response.body.articles[5].urlToImage
                },
                {
                    title: response.body.articles[6].title,
                    description: response.body.articles[6].description,
                    image: response.body.articles[6].urlToImage
                },
                {
                    title: response.body.articles[7].title,
                    description: response.body.articles[7].description,
                    image: response.body.articles[7].urlToImage
                },
                {
                    title: response.body.articles[8].title,
                    description: response.body.articles[8].description,
                    image: response.body.articles[8].urlToImage
                },
                {
                    title: response.body.articles[9].title,
                    description: response.body.articles[9].description,
                    image: response.body.articles[9].urlToImage
                },
                {
                    title: response.body.articles[10].title,
                    description: response.body.articles[10].description,
                    image: response.body.articles[10].urlToImage
                },
                {
                    title: response.body.articles[11].title,
                    description: response.body.articles[11].description,
                    image: response.body.articles[11].urlToImage
                },
                {
                    title: response.body.articles[12].title,
                    description: response.body.articles[12].description,
                    image: response.body.articles[12].urlToImage
                },
                {
                    title: response.body.articles[13].title,
                    description: response.body.articles[13].description,
                    image: response.body.articles[13].urlToImage
                },
                {
                    title: response.body.articles[14].title,
                    description: response.body.articles[14].description,
                    image: response.body.articles[14].urlToImage
                },
                {
                    title: response.body.articles[15].title,
                    description: response.body.articles[15].description,
                    image: response.body.articles[15].urlToImage
                },
                {
                    title: response.body.articles[16].title,
                    description: response.body.articles[16].description,
                    image: response.body.articles[16].urlToImage
                },
                {
                    title: response.body.articles[17].title,
                    description: response.body.articles[17].description,
                    image: response.body.articles[17].urlToImage
                },
                {
                    title: response.body.articles[18].title,
                    description: response.body.articles[18].description,
                    image: response.body.articles[18].urlToImage
                },
                {
                    title: response.body.articles[19].title,
                    description: response.body.articles[19].description,
                    image: response.body.articles[19].urlToImage
                }
            ]
        })
    }
})
})
app.listen(port, () => {
    console.log('listenting on port 3000')
})