const bcryptjs = require('bcryptjs')

function passwordCrypt(password){
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(password, salt);
    return hash
}

function compareCrypt(password, hashResult){
    return bcryptjs.compareSync(password, hashResult);
}

module.exports = {passwordCrypt, compareCrypt}