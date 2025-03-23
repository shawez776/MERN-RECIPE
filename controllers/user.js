import { User } from '../Models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'//for saved login like insta and gmail,store in local storage 
export const register = async (req, res) => {
    const { name, gmail, password } = req.body;

    try {
        // Step 1: Log received password
        console.log("Received password:", password);

        let user = await User.findOne({ gmail });
        if (user) return res.json({ message: "User Already Exists" });

        // Step 2: Hash the password
        const hashPass = await bcrypt.hash(password, 12);
        console.log("Hashed password before saving:", hashPass);

        // Step 3: Ensure hashed password is being passed
        user = new User({ name, gmail, password: hashPass });
        await user.save();

        // Step 4: Fetch user from database again to check if it's saved correctly
        const savedUser = await User.findOne({ gmail });
        console.log("Saved user in DB:", savedUser);

        res.json({ message: "User Registered Successfully!", user: savedUser });

    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

//loging karne par token generate hota hai.
//id ko token me store karte hai
export const login = async (req,res) => {
    const {gmail,password} = req.body
    try {
        let user = await User.findOne({gmail});

        console.log("User is coming from login",user)
        if(!user) return res.json({message: "user not exist"})

        const validPass = await bcrypt.compare(password,user.password);

        if(!validPass) return res.json({message:"Invalid password"});

        const token = jwt.sign({userId:user._id},"!@#!@!!#$@",{
            expiresIn: '1d' 
        })
        res.json({message:`Wlecome ${user.name}`,token})
    } catch (error) {
        res.json({message:error.message})
    }
}
export const profile = async (req,res) =>{
    res.json({user : req.user})
}