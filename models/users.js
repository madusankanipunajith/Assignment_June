let users = require('../data/users.json');
const filename = './data/users.json';
const helper = require('../helpers/helper');

function insertUser(newUser) {
    return new Promise((resolve, reject) => {

        const id = helper.getNewId(users)
        const date = { 
            createdAt: helper.newDate()
        } 

        const token = helper.getToken(id);

        newUser = {...newUser,
                    id: id,
                    date: date }

        users.push(newUser)
        helper.writeJSONFile(filename, users)
        resolve(newUser).catch(err => reject(err))
    })
}

function insertBulkUsers(userArray) {
    const promises = userArray.map(async (obj) => {
        return await insertUser(obj);
    });
    return Promise.all(promises);
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
        resolve(token).catch(err => reject(err));
    })
}


module.exports = {
    insertUser,
    findByID,
    findOne,
    insertBulkUsers,
    genarateToken
}