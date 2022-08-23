
function dataHandler() {
    this.orgRegister = (collectionObj, collectionName) => {
        try {
            const user = collectionName.create(collectionObj)
            return user
        } catch (error) {
            return error
        }
    }
    this.appregister = (collectionObj, collectionName, package, secretKey) => {
        try {
            if (collectionObj.apiKey === '' || null) {
                throw new Error('Please have your API key for proceed further')
            }
            const secret = package.verify(collectionObj.apiKey, secretKey)
            // if(secret.role!=='admin') throw new Error('Wrong api key')
            console.log(secret.rollNo)
            const obj = {
                username: collectionObj.username,
                email: collectionObj.email,
                password: collectionObj.password,
                apiKey: collectionObj.apiKey,
                organisationOrganisationId: secret.rollNo
            }
            const user = collectionName.create(obj)
            // console.log(user)
            return user
        }
        catch (error) {
            return error
        }

    }
    this.apiKeyGenerator = (data, secretKey, package, collectionName) => {
        try {
            const key = package.sign({ rollNo: data, role: 'admin' }, secretKey)
            const user = collectionName.update({ apiKey: key }, {
                where: { rollNo: data },
                returning: true,
                raw: true
            })
            return user
        } catch (error) {
            return error
        }
    }
    this.apiKey=(data,secretKey,package)=>{
        try {
            console.log(data)
            const api=package.sign({
                email:data.email,
                roles:data.roles,
                id:data.id
            } , secretKey)
            return api
            
        } catch (error) {
            return error
        }
    }
    this.apiKeyDecrypt=(data,secretKey,package)=>{
        try {
            const decryptedData=package.verify(data,secretKey)
            console.log(decryptedData)
            if(decryptedData.error) throw new Error ('Given values is incorrect')
            return decryptedData
        } catch (error) {
            return error
        }

    }
    this.memberVerification=(extractedData,collectionObj)=>{
        try {
            if(extractedData.email !== collectionObj.email) throw new Error('Your email id is not valid')
            // if(extractedData.roles !== 'developer' && 'tester') throw new Error('Your apikey is not valid')
            const obj={
                email:collectionObj.email,
                password:collectionObj.password,
                id:extractedData.id
            }
             return obj
        } catch (error) {
            return error
        }
    }
    this.memberRegister=(collectionObj,collectionName,api)=>{
        try {
            const resObj={
                email:collectionObj.email,
                password:collectionObj.password,
                applicationApplicationId:collectionObj.id,
                apiKey:api
            }
            const result=collectionName.create(resObj)
            return result
        } catch (error) {
            return error
        }
    }
    this.getAllrelatedApp = (organisationId, collectionName,referenceModel) => {

        try {
            const data = collectionName.findAll({
                where: { organisationOrganisationId: organisationId },
                include:referenceModel
            })
            if(!data) throw new Error('No data found')
            return data
            
        } catch (error) {
            return error
        }
        
    }
    this.getAllMembers=(id,collectionName,referenceModel)=>{
        try {
            const data= collectionName.findAll({
                where:{applicationApplicationId:id},
                include:referenceModel
            })
            if(!data) throw new Error('No data found')
            return data
        } catch (error) {
            return error
        }
    }
}


module.exports = { dataHandler }
