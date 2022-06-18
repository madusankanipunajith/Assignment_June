let users = require('../data/users.json');
let classModules = require('../data/class.json');
const filename = './data/users.json';
const helper = require('../helpers/helper');

function insertUser(newUser) {
    return new Promise((resolve, reject) => {

        const id = helper.getNewId(users)
        const date = { 
            createdAt: helper.newDate()
        } 

        newUser = {...newUser,
                    id: id,
                    date: date }

        users.push(newUser)
        helper.writeJSONFile(filename, users)
        resolve(newUser).catch(err => reject(err))
    })
}

function findByID(id) {
    return new Promise((resolve, reject) =>{
        helper.mustBeInArray(users, id).then(user => resolve(user)).catch(err => reject(err))
    })
}

function findOne(name, password) {
    return new Promise((resolve, reject) =>{
        helper.mustBeInUsers(users, name, password).then(user => resolve(user)).catch(err => reject(err))
    })
}

function findDuplicateUser(name) {
    return new Promise((resolve, reject) =>{
        helper.hasUser(users, name).then(user => resolve(user)).catch(err => reject(err))
    })
}

function genarateToken(id) {
    return new Promise((resolve,reject)=>{
        const token = helper.getToken(id);
        resolve(token).catch(err => reject(err));
    })
}

function getClassModules(){
    return new Promise((resolve, reject) =>{
        helper.hasModules(classModules).then(classModule => resolve(classModule)).catch(err => reject(err))
    })
}

function executeModule(className){
    return new Promise((resolve, reject) =>{
        helper.getExecuteModule(classModules, className).then(classModule => resolve(classModule)).catch(err => reject(err))
    })
}

module.exports = {
    insertUser,
    findByID,
    findOne,
    genarateToken,
    findDuplicateUser,
    getClassModules,
    executeModule
}