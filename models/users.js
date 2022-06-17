let users = require('../data/users.json');
const filename = './data/users.json';
const helper = require('../helpers/helper');

function insertUser(newAdmin) {
    return new Promise((resolve, reject) => {

        const id = helper.getNewId(users)
        const date = { 
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        } 

        const token = helper.getToken(id);

        newAdmin = {...newAdmin,
                    id: id,
                    date: date,
                    webtoken: token  }

        users.push(newAdmin)
        helper.writeJSONFile(filename, users)
        resolve(newAdmin)
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

function genarateToken(id) {
    return new Promise((resolve,reject)=>{
        const token = helper.getToken(id);
        resolve(token);
    })
}


module.exports = {
    insertUser,
    findByID,
    findOne,
    genarateToken
}