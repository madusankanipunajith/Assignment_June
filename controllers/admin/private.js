const Instructor = require("../../models/users");

exports.insertInstructor = async(req, res, next) =>{
    try {
        const {name} = req.body;

        const duplicateUser = await Instructor.findDuplicateUser(name);

        if(duplicateUser){
            return next(new ErrorResponse("This username has used", 400));
        }else{
            const password = Math.floor((Math.random() * 1000000) + 10000);
            const instructor = await Instructor.insertUser({name, password, type: 2});
            
            return res.status(200).json({
                success: true,
                instructor
            })
        }

    } catch (error) {
        next(error);
    }
}