const Admin = require("../../models/users");
const ErrorResponse = require("../../utils/errorResponse");

exports.register = async(req, res, next) => {
    const {name, password} = req.body;
    
    try {
        _ = await Admin.findDuplicateUser(name);

        const admin = await Admin.insertUser({name, password, type: 1});
        return res.status(200).json({
            success: true,
            admin
        })
        
    } catch (error) {
        next(error);
    }
}

exports.login = async(req, res, next) => {
    const {name, password} = req.body;

    if(!name || !password){
        return next(new ErrorResponse("Please provide valid email and password", 400));
    }

    try {
        const admin = await Admin.findOne(name, password);
        if (!admin) {
            return next(new ErrorResponse("Invalid credintials", 401)); 
        }
        const token = await Admin.genarateToken(admin.id);
        return res.status(200).json({
            success: true,
            admin,
            jwtToken: token
        })
    } catch (error) {
        next(error);
    }
}