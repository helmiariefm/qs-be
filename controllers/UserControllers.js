const {User} = require('../models/index')
const {tokenGenerator} = require('../helper/jwt')
const {compareCrypt} = require('../helper/pwd-hasher')

class UserController{
    static async login(req, res){
        try {
            const {email, password} = req.body

            const loginUser = await User.findOne({where: {email}})

            if(loginUser){
                const comparePwd = compareCrypt(password, loginUser.password)
                if(comparePwd){
                    const payload = {id: loginUser.id, email}
                    const genearetedToken = tokenGenerator(payload)
                    res.status(200).json({access_token: genearetedToken, email})
                }else{
                    throw {errType: 'WrongEmailPwd'}
                }
            }else{
                throw {errType: 'WrongEmailPwd'}
            }
        } catch (err) {
            if(err.errType === 'WrongEmailPwd'){
                res.status(401).json({error: 'Wrong Email or Password'})
            }else{
                res.status(500).json({error: `Internal server ERROR \n ${err}`})
                console.log(err)
            }
        }
    }
}

module.exports = UserController