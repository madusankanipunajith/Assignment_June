const fs = require('fs');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { resolve } = require('path');

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
    mustBeInUsers
}