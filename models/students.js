let users = require('../data/users.json');
let classModules = require('../data/class.json');
const filename = './data/users.json';
const helper = require('../helpers/helper');

function insertStudent(newUser) {
    return new Promise((resolve, reject) => {

        const id = helper.getNewId(users)
        const date = { 
            createdAt: helper.newDate()
        } 

        newUser = {...newUser,
                    id: id,
                    type: 3,
                    date: date }

        users.push(newUser)
        helper.writeJSONFile(filename, users)
        resolve(newUser).catch(err => reject(err))
    })
}

function insertBulkStudents(userArray) {
    const promises = userArray.map(async (obj) => {
        return await insertStudent(obj);
    });
    return Promise.all(promises);
}

function getStudentClassModules(stuName){
    return new Promise((resolve, reject) =>{
        helper.getStudentModules(classModules, stuName).then(classModule => resolve(classModule)).catch(err => reject(err))
    })
}

function executeModuleForStudents(className, stuName){
    return new Promise((resolve, reject) =>{
        helper.getExecuteModuleForStudents(classModules, className, stuName).then(classModule => resolve(classModule)).catch(err => reject(err))
    })
}

module.exports = {
    insertBulkStudents,
    getStudentClassModules,
    executeModuleForStudents
}