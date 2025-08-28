import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if(!username||!password){
      return res.status(400).json({success:false,message:"All fields are required!!"});
    }

    const account = await prisma.account.findUnique({
      where: { username: username },
      include: {
        user: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!account) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid account!" });
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password!" });
    }

    const token = jwt.sign(
      { id: account.user.personId, role: account.user.role.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    // console.log(account);
    return res
      .status(200)
      .json({
        success: true,
        token,
        message: "Login Successfully",
        person: {
          personId:account.personId,
          username: account.username,
          personCode: account.user.personCode,
          firstName: account.user.firstName,
          lastName: account.user.lastName,
          role: account.user.role.userRole,
        },
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error " + error.message,
      });
  }
};

const register = async (req, res) => {
  const { personId, username, password } = req.body;

  if(!personId || !username || !password){
    return res.status(400).json({success:false,message:"All fields are required!!"});
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const existingAccount = await prisma.account.findUnique({
    where: { personId },
  });

  const existingUsername = await prisma.account.findUnique({
    where: { username },
  });

  if (existingAccount) {
    res
      .status(401)
      .json({ success: false, message: "This person already has an account!" });
  }

  if (existingUsername) {
    res
      .status(401)
      .json({ success: false, message: "This username is already exists!" });
  }

  const newAccount = await prisma.account.create({
    data: {
      personId: personId,
      username: username,
      password: hashPassword,
    },
  });

  return res
    .status(201)
    .json({
      success: true,
      message: "Account Created Successfully!",
      account: newAccount,
    });
};

export { login, register };
