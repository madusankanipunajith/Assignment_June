const Student = require("../../models/students");

exports.getModules= async(req,res, next) =>{
    try {

        let stuName = req.params.stuName;

        const modules = await Student.getStudentClassModules(stuName);

        return res.status(200).json({
            success: true,
            modules
        })
        
    } catch (error) {
        next(error);
    }
}