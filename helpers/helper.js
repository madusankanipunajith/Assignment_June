const fs = require('fs');
const jwt = require("jsonwebtoken");

const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

const newDate = () => new Date().toString()

function mustBeInArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID is not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function mustBeInUsers(array, name, password) {
    return new Promise((resolve, reject) =>{
        const row = array.find(r => (r.name === name && r.password === password))
        if (!row) {
            reject({
                message: 'ID is not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function hasUser(array, name) {
    return new Promise((resolve, reject) =>{
        const row = array.find(r => (r.name === name))

        resolve(row)
    })
}

function hasModules(array) {
    return new Promise((resolve, reject) =>{
        const row = array.map(r => r.moduleEnum)
        if (!row) {
            reject({
                message: 'Modules not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function getStudentModules(array, stuName) {
    return new Promise((resolve, reject) =>{
        const row = array.filter((item) => {
            return (item.students.some(stu=>stu.name == stuName));
        }).map(r => r.moduleEnum);
        if (!row) {
            reject({
                message: 'Modules not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function getExecuteModule(array, classname) {
    return new Promise((resolve, reject) =>{
        const row = array.filter(r => r.className == classname)
        if (!row) {
            reject({
                message: 'Modules not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function getToken(id) {
    return jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    getNewId,
    newDate,
    mustBeInArray,
    writeJSONFile,
    getToken,
    mustBeInUsers,
    hasUser,
    hasModules,
    getStudentModules,
    getExecuteModule
}