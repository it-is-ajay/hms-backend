import { User } from '../model/user.js';

export default {
    async getDoctorList() {
        try {
            const doctorList = await User.find({ role: 'doctor' });
            return doctorList;
        } catch (err) {
            throw Error(err);
        }
    },
}