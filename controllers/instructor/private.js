const ClassModule = require("../../models/class");
const enums = require("../../utils/enums");

exports.insertClassModule = async(req, res, next) =>{
    try {
        const {name} = req.body;
        const password = Math.floor((Math.random() * 1000000) + 10000);
        const classModule = await ClassModule.insertClass({name, password, type: 2});
        
        return res.status(200).json({
            success: true,
            classModule
        })

    } catch (error) {
        next(error);
    }
}