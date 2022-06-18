const Student = require("../../models/users");
const ErrorResponse = require("../../utils/errorResponse");

exports.login = async(req, res, next) => {
    const {name, password} = req.body;

    if(!name || !password){
        return next(new ErrorResponse("Please provide valid email and password", 400));
    }

    try {
        const student = await Student.findOne(name, password);
        if (!student) {
            return next(new ErrorResponse("Invalid credintials", 401)); 
        }
        const token = await Student.genarateToken(student.id);
        return res.status(200).json({
            success: true,
            student,
            jwtToken: token
        })
    } catch (error) {
        next(error);
    }
}