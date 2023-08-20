const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      name: Joi.string(),
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    })

    const { error, value } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Anda harus memberikan alamat email yang valid'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Anda harus memberikan password yang valid'
          })
          break
        default:
          res.status(400).send({
            error: 'Informasi pendaftaran tidak valid'
          })
      }
    } else {
      next()
    }
  }
}