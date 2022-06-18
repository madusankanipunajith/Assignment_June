let classModule = require('../data/class.json');
const filename = './data/class.json';
const helper = require('../helpers/helper');

function insertClass(newClassModule) {
    return new Promise((resolve, reject) => {

        const id = helper.getNewId(classModule)
        const date = { 
            createdAt: helper.newDate()
        }

        newClassModule = {...newClassModule,
                    id: id,
                    date: date }

        classModule.push(newClassModule)
        helper.writeJSONFile(filename, classModule)
        resolve(newClassModule).catch(err => reject(err))
    })
}

module.exports = {
    insertClass
}