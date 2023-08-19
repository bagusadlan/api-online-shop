const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

async function checkUser(field, type) {
  const userExist = await User.findOne({
    where: {
      field: field
    }
  })

  if (userExist) {
    return res.status(403).send({
      message: `${type} sudah terdaftar`
    })
  }
}

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

      checkUser(email, 'Email')
      checkUser(username, 'User')

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
  }
}