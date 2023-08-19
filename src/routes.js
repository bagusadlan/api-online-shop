const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.get('/', () => {
    console.log('home');
  })
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

}