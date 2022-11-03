var express = require('express')
var router = express.Router();

router.get('/', (req, res)=>{
    console.log("Requested home page")
    res.render('Home.ejs')
})

module.exports = router;