import user from "../model/userModel.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body

        const findUser = await user.findOne({ email })

        if (findUser) {
            return res.status(400).json({
                message: "email is already registor"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const CreateUser = await user.create({
            fullname, email,
            password: hashPassword
        })

        // await CreateUser.save()

        res.status(201).json({ message: "User Created Successfully", CreateUser })
    } catch (error) {
        console.log("err", error);
        res.status(500).json({
            message: "internal server error"
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const ExistUser = await user.findOne({ email });

        // Check if user exists
        if (!ExistUser) {
            return res.status(400).json({ message: "Invalid Login Details" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, ExistUser.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Login Details" });
        }

        // If login is successful
        res.status(200).json({
            message: "User Login successful",
            ExistUser
        });

    } catch (error) {
        console.log("err", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
