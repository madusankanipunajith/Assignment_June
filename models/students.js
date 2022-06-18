let users = require('../data/users.json');
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

function findDuplicateStudent(name) {
    return new Promise((resolve, reject) =>{
        helper.hasUser(users, name).then(user => resolve(user)).catch(err => reject(err))
    })
}

module.exports = {
    insertBulkStudents,
    findDuplicateStudent
}