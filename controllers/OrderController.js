const {Product, Order} = require('../models')

class OrderController{
    static async orderList(req, res){
        try {
            const data = await Order.findAll()            
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
        }
    }

    static async order(req, res){
        const {prodid} = req.params    

        try {
            let product = await Product.findByPk(prodid)            
            if(!product){
                throw {name: 'WrongId'}
            }        
            const [ord, created] = await Order.findOrCreate({
                where: {ProdId: prodid},
                default: {     
                    total_price: product.dataValues.price,
                    amount: 0
                },
            })
            if(created){
                ord.ProdId = product.dataValues.id
                ord.total_price =  ord.total_price + product.dataValues.price
            }

            ord.name = product.dataValues.name
            ord.img = product.dataValues.img
            ord.amount += 1
            ord.total_price = product.dataValues.price * ord.amount
            ord.price = product.dataValues.price
            await ord.save()
            res.status(201).json(ord)
        } catch (err) {
            if(err.name === "WrongId"){
                res.status(401).json({error: 'Product Not Found'})
            }else{
                res.status(500).json(`Internal server ERROR \n ${err}`)
            }
        }
    }
}

module.exports = OrderController