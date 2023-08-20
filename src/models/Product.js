module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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