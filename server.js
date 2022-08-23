const express= require('express')
const app=express()
const sequelize= require('sequelize')
const organisation= require('./src/routes/organisation')
const application= require('./src/routes/application')
const port=process.env.PORT || 3000
app.use(express.json())

const db= require('./src/models')
db
.sequelize
.sync()
// .sync({force:true})
.then(()=>{
    console.log('Connected to database')
})
.catch(()=>{console.log('Rejected')})


app.use(organisation)
app.use(application)


app.listen(port,()=>{
    console.log('Server is runnin',port)
})