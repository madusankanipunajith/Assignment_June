const ClassModule = require("../../models/class");
const ModuleEnums = require("../../utils/enums");
const Student = require("../../models/students");

exports.insertClassModule = async (req, res, next) => {

    try {
<<<<<<< HEAD
        const { className, studentArray } = req.body;
        const moduleEnum = ModuleEnums[req.body.enum];

        _ = await Student.findDuplicateUserFromArray(studentArray);

        _ = await Student.insertBulkUsers(studentArray);

        const students = studentArray.map(function (stu) {
            delete stu.password;
            return stu;
        });

        const classModule = await ClassModule.insertClass({ className, moduleEnum, students });
=======
        const {className, studentArray} = req.body;
        const moduleEnum = ModuleEnums[req.body.enum];

        _ = await Student.insertBulkStudents(studentArray);

        const students = studentArray.map(function(stu) { 
            delete stu.password; 
            return stu; 
        });

        const classModule = await ClassModule.insertClass({className, moduleEnum, students});
>>>>>>> 0ef004b499673c15ecf2afab0dd8f096aaa10745

        return res.status(200).json({
            success: true,
            classModule
        })

    } catch (error) {
        next(error);
    }
}