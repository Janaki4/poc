const organisation= require('../helper/organisation')
const express= require('express')
const router= new express.Router()
const app= express()
app.use(express.json())


router.post('/organisation',organisation.orgHelper)



module.exports=router
