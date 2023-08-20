let { Product } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index(req, res) {
    try {
      const search = req.query.search
      let products

      if (search) {
        products = await Product.findAll({
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
        products = await Product.findAll({
          limit: 10
        })
      }

      res.send({
        code: 200,
        status: "success",
        data: products
      })
    } catch (error) {
      res.status(500).send({
        statusCode: 500,
        status: "failed",
        message: error.message
      })
    }
  },

  async store(req, res) {
    try {
      const { name, category, price, descripttion } = req.body
      console.log(req.body);

      const product = await Product.create(req.body)

      res.send({
        status: "success",
        code: 200,
        data: product
      })
    } catch (error) {
      res.status(500).send({
        status: false,
        code: 500,
        message: error.message
      })
    }
  },

  async store(req, res) {
    try {
      
    } catch (error) {
      
    }
  },

  async put(req, res) {
    try {
      const { productId } = req.params

      const product = await Product.findOne({
        where: {
          id: productId
        }
      })

      if (!product) {
        return res.status(404).send({
          status: false,
          code: 404,
          message: "Produk tidak ditemukan"
        })
      }

      const newProduct = await Product.update(req.body, {
        where: {
          id: productId
        }
      })

      res.send({
        status: true,
        code: 200,
        message: "Berhasil mengubah data",
        data: req.body
      })
    } catch (error) {
      res.status(500).send({
        status: false,
        code: 500,
        message: error.message
      })
    }
  }
}