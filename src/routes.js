const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuthenticationController = require('./controllers/AuthenticationController')
const ProductsController = require('./controllers/ProductsController')

module.exports = (app) => {
  app.get('/', () => {
    console.log('home');
  })
  app.post('/api/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  app.post('/api/login', AuthenticationController.login)

  app.get('/api/products', ProductsController.index)
  app.post('/api/products', ProductsController.store)
  app.get('/api/products/:productId', ProductsController.show)
  app.put('/api/products/:productId', ProductsController.put)
  app.delete('/api/products/productId', ProductsController.delete)
}