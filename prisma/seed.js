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
    //             description:"Description",
    //             isDeleted:'N'
    //         },
    //         {
    //             userRole:"SUPERVISOR",
    //             description:"Supervisor",
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
}

seed().then(()=>prisma.$disconnect());