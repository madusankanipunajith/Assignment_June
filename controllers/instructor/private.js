const ClassModule = require("../../models/class");
const ModuleEnums = require("../../utils/enums");
const Student = require("../../models/users");

exports.insertClassModule = async(req, res, next) =>{
    try {
        const {className, student} = req.body;
        const moduleEnum = ModuleEnums[req.body.enum];
        const classModule = await ClassModule.insertClass({className, moduleEnum, student});

        _ = await Student.insertBulkUsers(student);
       
        return res.status(200).json({
            success: true,
            classModule
        })

    } catch (error) {
        next(error);
    }
}