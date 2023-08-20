module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    category: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
  })

  return Product
}