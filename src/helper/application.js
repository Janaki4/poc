const appSevice= require('../service/application')

exports.appHelper=async(req,res)=>{
    try {
        const data={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            apiKey:req.params.apiKey
        }
        const user= await appSevice.appService(data)
        res.status(201).send(user)
    } catch (error) {
        res.status(401).send(error)
    }
}

exports.allAppData=async(req,res)=>{
    try {
        const data=req.body.orgId
        console.log(data)
        const allData= await appSevice.getAllApp(data)
        res.status(201).send(allData)
    } catch (error) {
        res.status(401).send(error)
    }
}

exports.accessAllocating=async(req,res)=>{
    try {
        const data={
            email:req.body.email,
            roles:req.body.roles,
            id:req.body.id
        }
       const generatedApiKey= await appSevice.accessProviding(data)
       res.status(201).send(generatedApiKey)
    } catch (error) {
        res.status(401).send(error)
    }
}

exports.member=async(req,res)=>{
    try {
        const requestData={
            email:req.body.email,
            password:req.body.password,
            key:req.body.key
        }
        const data= await appSevice.memberRegistering(requestData)
        res.status(201).send(data)
    } catch (error) {
        res.status(401).send(error)
    }
}

exports.allMembers=async(req,res)=>{
    try {
        console.log(req.params.id)
        const data= await appSevice.allMembers(req.params.id)
        res.status(202).send(data)
    } catch (error) {
        res.status(401).send(error)
    }
}