const ClassModule = require("../../models/class");
const ModuleEnums = require("../../utils/enums");
const Student = require("../../models/users");

exports.insertClassModule = async (req, res, next) => {

    try {
        const { className, studentArray } = req.body;
        const moduleEnum = ModuleEnums[req.body.enum];

        _ = await Student.findDuplicateUserFromArray(studentArray);

        _ = await Student.insertBulkUsers(studentArray);

        const students = studentArray.map(function (stu) {
            delete stu.password;
            return stu;
        });

        const classModule = await ClassModule.insertClass({ className, moduleEnum, students });

        return res.status(200).json({
            success: true,
            classModule
        })

    } catch (error) {
        next(error);
    }
}