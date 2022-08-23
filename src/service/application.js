const db= require('../models')
const appModel= db.application
const orgModel= db.organisation
const memModel= db.member
const databaseHandler= require('../database/repository')
const dbController= new databaseHandler.dataHandler()
var jwt = require('jsonwebtoken');
const mail= require('../mail/mail')


exports.appService=async(data)=>{
    try {
        console.log(data)
        const appUser= await dbController
        .appregister(data,appModel,jwt,process.env.SECRET_KEY)
        return appUser
    } catch (error) {
        return error
    }
}

exports.getAllApp=async(data)=>{
    try {
        const result= await dbController
        .getAllrelatedApp(data,appModel,orgModel)
        console.log(result)
        return result
    } catch (error) {
        return error
    }
}


exports.accessProviding=async(data)=>{
    try {
        const resultAPI= await dbController.apiKey(data,process.env.SECRET_KEY,jwt)
        return resultAPI
    } 
    catch (error) {
        return error
    }
}

exports.memberRegistering=async(data)=>{
try {
    const extractedData= await dbController.apiKeyDecrypt(data.key,process.env.SECRET_KEY,jwt) 
    console.log(extractedData)   
    const result=   dbController.memberVerification(extractedData,data)
    console.log(result)   
    // await dbController.
    const memberData= await dbController.memberRegister(result,memModel,data.key)
    // if(!result) throw new Error('WRONGG')

    return memberData
} 
catch (error) {
    return error
}
}

exports.allMembers=async(data)=>{
    try {
        console.log(data)
        const result= await dbController.getAllMembers(data,memModel,appModel)
        
        console.log(result)
        return result
    } catch (error) {
        return error
    }
}
