const Student = require("../../models/students");

exports.getModules = async(req,res, next) =>{
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

exports.getExecuteModules = async(req,res,next) =>{
    try {

        let {className, stuName} = req.params;

        const modules = await Student.executeModuleForStudents(className,stuName);

        return res.status(200).json({
            success: true,
            message : 'Hello Module' + ' ' + modules[0]
        })
        
    } catch (error) {
        next(error);
    }
}