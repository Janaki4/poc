const orgService= require('../service/organisation')

exports.orgHelper=async(req,res)=>{
    try {
        const data={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            rollNo:req.body.rollNo
        }
        const orgObj= await orgService.orgregister(data)
        res.status(201).send(orgObj)
    } catch (error) {
        res.status(401).send(error)
    }
}