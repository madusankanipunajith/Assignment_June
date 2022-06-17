const Admin = require("../../models/users");
const ErrorResponse = require("../../utils/errorResponse");
const crypto = require("crypto");

exports.register = async(req, res, next) => {
    const {name, password} = req.body;
    
    
    try {
        const admin = await Admin.insertUser({name, password});
        return res.status(200).json({
            success: true,
            admin
        })
    } catch (error) {
        next(error);
    }
}