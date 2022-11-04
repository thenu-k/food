const express = require('express')
const session = require('express-session')
const CONFIG = require('./server.config')
require('dotenv').config();
const PORT = process.env.PORT || 80

//Routes 
const Route_HomePage = require('./routes/Route_HomePage')

let app = express()
app.listen(PORT, () => {console.log(`Server Running On Port ${PORT}`)})
app.use(express.static(__dirname + `\\views\\Pages`))
app.set('view engine', 'ejs')

//Paths
app.get('/', Route_HomePage)

//Images
app.get('/landingImage', (req, res)=> {
    console.log('Requested Image')
    res.sendFile(__dirname+'\\views\\Assets\\steak01.jpg')
})
app.get('/burgerImage', (req, res)=> {
    console.log("Requested Food Image")
    res.sendFile(__dirname+'\\views\\Assets\\food01.jpg')
})
app.get('/burger00', (req, res)=> {
    console.log("Requested Burger Image")
    res.sendFile(__dirname+'\\views\\Assets\\burger00.jpg')
})

//Github test