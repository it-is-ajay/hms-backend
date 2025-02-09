import repository from "../repository/index.js";

const { doctorRepository } = repository;

export default {
    async getDoctorList(req, res) {
        try {
            const doctorList = await doctorRepository.getDoctorList(req.body);
            res.status(200).json({
                success: true,
                message: "Doctor list",
                data: doctorList,
            });
        } catch (error) {
            console.log(error, 'error')
            res.status(400).json({
                success: false,
                message: "Something went wrong!",
            });
        }
    }
}