import repository from '../repository/index.js';
import { comparePassword } from '../utility/index.js';

const { userRepository } = repository;

export default {
    async checkEmailAlreadyExist(req, res, next) {
        try {
            const { email } = req.body;
            const userDetails = await userRepository.getUserBy({ email });
            if (!userDetails) {
                next();
            } else {
                return res.status(400).json({ success: false, message: "Email already exist" });
            }
        } catch (error) {
            return res.status(400).json({ success: false, message: "Something went wrong" });
        }
    },
    async checkUserNameAlreadyExist(req, res, next) {
        try {
            const { userName } = req.body;
            const userDetails = await userRepository.getUserBy({ userName });
            if (!userDetails) {
                next();
            } else {
                return res.status(400).json({ success: false, message: "User name already exist" });
            }
        } catch (error) {
            return res.status(400).json({ success: false, message: "Something went wrong" });
        }
    },
    async checkEmailPassword(req, res, next) {
        try {
            const { userName } = req.body;
            const userDetails = await userRepository.getUserBy({ userName });
            if (!userDetails) {
                return res.status(400).json({ success: false, message: "Invalid email and password" });
            } else {
                const { password } = req.body;
                const isPasswordMatch = await comparePassword(password, userDetails.password);
                if (!isPasswordMatch) {
                    return res.status(400).json({ success: false, message: "Invalid email and password" });
                }
                next();
            }
        } catch (error) {
            return res.status(400).json({ success: false, message: "Something went wrong" });
        }
    },
}