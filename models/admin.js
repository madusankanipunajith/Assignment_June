let users = require('../data/users.json');
const filename = './data/users.json';
const helper = require('../helpers/helper');

function insertAdmin(newAdmin) {
    return new Promise((resolve, reject) => {

        const id = { id: helper.getNewId(users) }

        const date = { 
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        } 

        newAdmin = { ...id, ...date, ...newAdmin }
        users.push(newAdmin)
        helper.writeJSONFile(filename, users)
        resolve(newAdmin)
    })
}


module.exports = {
    insertAdmin
}