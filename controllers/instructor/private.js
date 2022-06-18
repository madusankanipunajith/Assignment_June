const ClassModule = require("../../models/class");
const ModuleEnums = require("../../utils/enums");

exports.insertClassModule = async(req, res, next) =>{
    try {
        const {className} = ModuleEnums.req.body.className;
        const moduleEnum = ModuleEnums.req.body.enum;
        const {student} = req.body.student;
        const classModule = await ClassModule.insertClass({className, moduleEnum, student});
        
        return res.status(200).json({
            success: true,
            classModule
        })

    } catch (error) {
        next(error);
    }
}