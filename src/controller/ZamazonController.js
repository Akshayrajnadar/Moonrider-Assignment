const ZamazonModel = require('../model/ZamazonModel');

const identify = async (req, res) =>{
    try{
        const {phoneNumber, email} = req.body
        const user = await ZamazonModel.findOne({
            phoneNumber,
            email,
        })
        if(user){
            const adduser = await ZamazonModel.create({
                phoneNumber,
                email,
            })
    }catch(err){

    }
}