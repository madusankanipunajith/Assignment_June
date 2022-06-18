const Instructor = require("../../models/users");
const ErrorResponse = require("../../utils/errorResponse");

exports.insertInstructor = async(req, res, next) =>{
    try {
        const {name} = req.body;

        _ = await Admin.findDuplicateUser(name);

        const password = Math.floor((Math.random() * 1000000) + 10000);
        const instructor = await Instructor.insertUser({name, password, type: 2});
        
        return res.status(200).json({
            success: true,
            instructor
        })
        

    } catch (error) {
        next(error);
    }
}

exports.getModules= async(req,res, next) =>{
    try {

        const modules = await Instructor.getClassModules();

        return res.status(200).json({
            success: true,
            modules
        })
        
    } catch (error) {
        next(error);
    }
}

exports.getExecuteModules = async(req,res, next) =>{
    try {

        let className = req.params.className;

        const modules = await Instructor.executeModule(className);

        return res.status(200).json({
            success: true,
            message : 'Hello Module' + ' ' + modules[0].moduleEnum
        })
        
    } catch (error) {
        next(error);
    }
}