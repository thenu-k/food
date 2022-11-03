const express = require('express')
const session = require('express-session')
const CONFIG = require('./server.config')

//Routes 
const Route_HomePage = require('./routes/Route_HomePage')

let app = express()
app.listen(80, () => {console.log(`Restaurant Server Running On Port ${80}`)})
app.use(express.static(__dirname + `\\views\\Pages`))
app.set('view engine', 'ejs')

//Paths
app.get('/', Route_HomePage)

//Images
app.get('/landingImage', (req, res)=> {
    console.log('Requested Image')
    res.sendFile('C:\\Users\\Thenu\\code\\portfolioWebsites\\food\\views\\Assets\\steak01.jpg')
})
app.get('/burgerImage', (req, res)=> {
    console.log("Requested Food Image")
    res.sendFile('C:\\Users\\Thenu\\code\\portfolioWebsites\\food\\views\\Assets\\food01.jpg')
})
app.get('/burger00', (req, res)=> {
    console.log("Requested Burger Image")
    res.sendFile('C:\\Users\\Thenu\\code\\portfolioWebsites\\food\\views\\Assets\\burger00.jpg')
})