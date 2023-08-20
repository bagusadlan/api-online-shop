let { Product } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index(req, res) {
    try {
      const search = req.query.search

      if (search) {
        const products = await Product.findAll({
          where: {
            [Op.or]: {
              name: {
                [Op.like]: `%${search}%`
              },
              category: {
                [Op.like]: `%${search}%`
              }
            }
          },
          limit: 10
        })
      } else {
        const products = await Products.findAll({
          limit: 10
        })
      }

      res.send({
        code: 200,
        status: success,
        data: products
      })
    } catch (error) {
      res.status(500).send({
        statusCode: 500,
        status: failed,
        message: error.message
      })
    }
  }
}