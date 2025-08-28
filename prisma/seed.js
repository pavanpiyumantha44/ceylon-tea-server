import {PrismaClient} from '@prisma/client'
import bcrypt from "bcrypt"
const prisma = new PrismaClient();

async function seed(){
    // const person = await prisma.person.create({
    //     data:{
    //         personCode:"ADM1",
    //         firstName:"Sys",
    //         lastName:"Admin",
    //         nicNumber:"99897787671",
    //         email:"sysadmin@ct.com",
    //         phone:"077678676",
    //         address:"Hatale, Kandy",
    //         gender:"M",
    //         roleId:"b0347df5-3641-4d07-bfe3-df8cb2dcafd6",
    //     }
    // })
    // const role = await prisma.role.createMany({
    //     data:[
    //         {
    //             userRole:"ADMIN",
    //             description:"Admin",
    //             isDeleted:'N'
    //         },
    //         {
    //             userRole:"MANAGER",
    //             description:"Manager",
    //             isDeleted:'N'
    //         },
    //         {
    //             userRole:"SUPERVISOR",
    //             description:"Supervisor",
    //             isDeleted:'N'
    //         },
    //         {
    //             userRole:"TEA-PLUCKER",
    //             description:"Tea Plucker",
    //             isDeleted:'N'
    //         }, 
    //         {
    //             userRole:"CLEANER",
    //             description:"Cleaner",
    //             isDeleted:'N'
    //         },
    //         {
    //             userRole:"SECURITY",
    //             description:"Security",
    //             isDeleted:'N'
    //         }
    //     ]
    // })
    // const hashPassword = await bcrypt.hash("admin@123",10);

    // const account = await prisma.account.create({
    //     data:{
    //         personId:"0589ae3e-fcc4-4a2c-bd13-80f5ba8fa89d",
    //         username:"sysadmin",
    //         password:hashPassword,
    //     }
    // })
    // const stockTransaction = await prisma.stockTransaction.create({
    //     data:{
    //         itemId:"f308ce7e-4568-4d4b-91e7-32a79458bab2",
    //         taskId:"1",
    //         date:new Date(),
    //         type:"TOOL",
    //         quantity:3,
    //         reference:"For cleaning"
    //     }
    // })
    // const team = await prisma.team.createMany({
    //     data:
    //     [
    //         {
    //         name:"SUPERVISORS",
    //         description:"Supervisors"
    //         },
    //         {
    //         name:"TEA-PLUCKING",
    //         description:"Tea Plucking"
    //         },
    //         {
    //         name:"CLEANERS",
    //         description:"Cleaners"
    //         },
    //         {
    //         name:"DRIVERS",
    //         description:"Drivers"
    //         },
    //         {
    //         name:"SECURITY",
    //         description:"Security"
    //         },
    //         {
    //         name:"PROCESSING",
    //         description:"Processing"
    //         },
    //         {
    //         name:"PACKAGING",
    //         description:"Packaging"
    //         },
    //         {
    //         name:"QUALITY-CONTROL",
    //         description:"Quality Control"
    //         },
    //         {
    //         name:"SALES",
    //         description:"Sales"
    //         }
    //     ]
    // })
    
}

seed().then(()=>prisma.$disconnect());