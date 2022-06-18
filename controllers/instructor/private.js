const ClassModule = require("../../models/class");
const enums = require("../../utils/enums");

exports.insertClassModule = async(req, res, next) =>{
    try {
        const {module_enum} = req.body;
        const student = req.body;
        const classModule = await ClassModule.insertClass({module_enum, student});
        
        return res.status(200).json({
            success: true,
            classModule
        })

    } catch (error) {
        next(error);
    }
}