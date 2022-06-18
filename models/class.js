let class_module = require('../data/class.json');
const filename = './data/class.json';
const helper = require('../helpers/helper');

function insertClass(newClassModule) {
    return new Promise((resolve, reject) => {

        const id = helper.getNewId(class_module)
        const date = { 
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        } 

        newClassModule = {...newClassModule,
                    id: id,
                    date: date }

        class_module.push(newClassModule)
        helper.writeJSONFile(filename, class_module)
        resolve(newClassModule).catch(err => reject(err))
    })
}

module.exports = {
    insertClass
}