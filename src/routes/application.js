const express= require('express')
const router= new express.Router()
const app= express()
app.use(express.json())
const appHelper= require('../helper/application')



router.post('/application/:apiKey' , appHelper.appHelper)
router.post('/app/allData',appHelper.allAppData)
router.post('/app/accessProvider' , appHelper.accessAllocating)
router.post('/app/member',appHelper.member)
router.post('/app/mmbersList/:id', appHelper.allMembers)

module.exports=router