const { Sequelize, Model, DataTypes } = require("sequelize");
//conexion db
const sequelize = new Sequelize("gestion_curriculums", "root", "", {
  //database,user de la db y pass
  host: "localhost",
  dialect: "mysql",
  port: 3306, //puerto de la db
});

class Product extends Model {}

Product.init({
  form_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  is_stock: {
    type: DataTypes.BOOLEAN,
  },
},{
  sequelize,
  modelName:"Product",
});

module.exports= Product;

//test de la db
async function testConection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConection();
