const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.get('/', () => {
    console.log('home');
  })
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

}