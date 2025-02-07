import repository from '../repository/index.js';

const { userRepository } = repository;

export default {
    async signUp(req, res) {
        try {
            const userDetails = await userRepository.signUp(req);
            if (userDetails) {
                res.status(200).json({
                    success: true,
                    message: "Signup successfully",
                    data: userDetails,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Sign up failed!",
                });
            }
        } catch (error) {
            console.log(error, 'error')
            res.status(400).json({
                success: false,
                message: "Something went wrong!",
            });
        }
    },
    async login(req, res) {
        try {
            const userDetails = await userRepository.login(req);
            if (userDetails) {
                res.status(200).json({
                    success: true,
                    message: "Login successfully",
                    data: userDetails,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Login failed!",
                });
            }
        } catch (error) {
            console.log(error, 'error')
            res.status(400).json({
                success: false,
                message: "Something went wrong!",
            });
        }
    },
}