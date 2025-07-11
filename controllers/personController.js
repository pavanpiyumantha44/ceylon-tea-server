import prisma from "../lib/prisma.js";

const addPerson = async(req,res)=>{
    const {firstName,lastName,nicNumber,email,phone,address,gender,roleId} = req.body;
    return res.status(201).json({success:true,message:"Person created successfully!"});
    
}

export {addPerson}