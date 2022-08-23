const db= require('../models')
const orgModel= db.organisation
const databaseHandler= require('../database/repository')
const dbController= new databaseHandler.dataHandler()
var jwt = require('jsonwebtoken');
require('dotenv/config')

exports.orgregister=async(data)=>{

    try {
        const userObj= await dbController.orgRegister(data,orgModel)
        console.log(userObj.dataValues.rollNo)

        const user= await dbController.apiKeyGenerator(
            userObj.dataValues.rollNo,
            process.env.SECRET_KEY,jwt,
            orgModel)
            const extractedData=user[1][0]
        return extractedData
    } catch (error) {
        return error
    }

}