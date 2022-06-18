const ClassModule = require("../../models/class");
const ModuleEnums = require("../../utils/enums");
const Student = require("../../models/students");
const Instructor = require("../../models/users");

exports.insertClassModule = async(req, res, next) =>{
    try {
        const {className, studentArray} = req.body;
        const moduleEnum = ModuleEnums[req.body.enum];

        _ = await Student.insertBulkStudents(studentArray);

        const students = studentArray.map(function(stu) { 
            delete stu.password; 
            return stu; 
        });

        const classModule = await ClassModule.insertClass({className, moduleEnum, students});

        return res.status(200).json({
            success: true,
            classModule
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