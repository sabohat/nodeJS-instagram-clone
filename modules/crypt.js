const bcrypt = require('bcrypt')

function genereteCrypt(data){
    let salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(data, salt)
}


function confirmHash(data, hash) {
    try {
        return bcrypt.compare(data, hash)
    }
    catch (e){
        return false
    }
    
}

module.exports = {
    genereteCrypt,
    confirmHash
}