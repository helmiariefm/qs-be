const {Product} = require('../models')

class ProductController{
    static async getProducts(req, res){
        try {
            const data = await Product.findAll()
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = ProductController