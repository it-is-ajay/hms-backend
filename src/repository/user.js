import { User } from '../model/user.js';
import { generateToken, hashPassword } from '../utility/index.js'
export default {
    async signUp(req) {
        try {
            const { name, userName, email, password, role } = req.body
            const bodyData = {
                name, userName, email, role
            }
            const hashedPassword = await hashPassword(password);
            bodyData.password = hashedPassword;
            const userData = await User.create(bodyData)
            const token = await generateToken(userData);
            const updatedUserData = await User.findByIdAndUpdate(userData._id, { token: token }, { new: true });
            return { ...updatedUserData.toObject(),  password: undefined };

        } catch (err) {
            throw Error(err);
        }
    },
    async login(req) {
        try {
            const { userName, password, } = req.body
            const userData = await User.findOne({ userName });
            const token = await generateToken({ ...userData.toObject(), token: undefined });
            const updatedUserData = await User.findByIdAndUpdate(userData._id, { token: token }, { new: true });
            return { ...updatedUserData.toObject(),  password: undefined };
        } catch (err) {
            throw Error(err);
        }
    },
    async getPatientList(req) {
        try {

        } catch (err) {
            throw Error(err);
        }
    },
    async getUserBy(where) {
        try {
            const user = await User.findOne(where);
            return user;
        } catch (err) {
            console.log(err, 'error')
            throw Error(err);
        }
    }
}