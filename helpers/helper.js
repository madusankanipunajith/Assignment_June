const fs = require('fs');
const bcrypt = require("bcryptjs");
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
                statusCode: 404
            })
        }
        resolve(row)
    })
}

function hasUser(array, name) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => (r.name === name))
        if (!row) {
            reject({
                message: 'ID is not found',
                statusCode: 404
            })
        }
        else{
            resolve(row);
        }
    })
}

function mustNotBeInUsers(array, name) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => (r.name === name))
        if (!row) {
            resolve('resolved');
        }
        else{
            reject({
                statusCode: 404,
                message: 'Duplicate User is found'
            })
        }
    })
}

function mustBeInUsers(array, name, password) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => (r.name === name && r.password === password))
        if (!row) {
            reject({
                message: 'ID is not found',
                statusCode: 404
            })
        }
        resolve(row)
    })
}

function getToken(id) {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
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
    mustNotBeInUsers
}