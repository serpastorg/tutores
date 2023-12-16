const express=require('express')
const router=express.Router()
router.get("/",(req,res)=>{
    res.render('index',{title:'Base de datos'})
})
module.exports = router