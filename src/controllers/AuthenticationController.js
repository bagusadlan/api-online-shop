const { User } = require('../models')
const jwt = require('jsonwebtoken')
const { Op } = require("sequelize")
const config = require('../config/config')

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn : ONE_WEEK
  })
}

module.exports = {
  async register(req, res) {
    try {
      const { name, username, email, password } = req.body
      
      const userExist = await User.findOne({
        where: {
          [Op.or]: [
            { username: username },
            { email: email }
          ]
        }
      })
    
      if (userExist) {
        return res.status(403).send({
          message: 'Pengguna sudah terdaftar'
        })
      }

      const user = await User.create(req.body)
      const userJson = user.toJSON()

      res.send({
        message: `Halo ${req.body.username}! Akun anda berhasil didaftarkan!`,
        user: userJson,
        form: req.body,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      res.status(400).send({
        message: error.message
      })
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          message: "Pengguna tidak ditemukan"
        })
      }

      const isPasswordValid = user.comparePassword(password)

      if (!isPasswordValid) {
        return res.status(403).send({
          message: "Password salah"
        })
      }

      const userJson = user.toJSON()
      res.send({
        message: `Halo ${user.name}! Selamat datang`,
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      
    }
  }
}