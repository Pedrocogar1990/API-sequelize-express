const router = require("express").Router();
const { faker } = require("@faker-js/faker");

const Products = require("../model/product.model");
//**rutas de la app */
//todo llamara a todos nuestros productos
router.get("/products", async (req, res) => {
  const products = await Products.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: products,
  });
});
//todo llamara a un unico producto
router.get("/products/:product_id", async (req, res) => {
  const id = req.params.product_id;
  const product = await Products.findOne({
    where: { product_id: id },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: product,
  });
});
//todo creara todos nuestros productos
router.post("/products", async (req, res) => {
  const dataProducts = req.body; //cuerpo peticiones http
  await Products.sync();
  const createProduct = await Products.create({
    product_name: dataProducts.product_name,
    price: dataProducts.price,
    is_stock: dataProducts.is_stock,
    // product_name: faker.commerce.product(),
    // price: faker.commerce.price(),
    // is_stock: faker.datatype.boolean(),
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Producto creado con exito",
  }); //codigo hhtp como por ejemplo el 404 not found
});
//todo actualizara todos los campos de los productos
router.put("/products/:product_id", async (req, res) => {
  const id = req - this.params.product_id;
  const dataProducts = req.body;
  const updateProduct = await Products.update(
    {
      product_name: dataProducts.product_name,
      price: dataProducts.price,
      is_stock: dataProducts.is_stock,
    },
    {
      where: { product_id: id },
    }
  );
  res.status(200).json({
    ok: true,
    status: 200,
    body: updateProduct,
  });
});

//todo eliminara productos
router.delete("/products/:product_id", async (req, res) => {
  const id = req - this.params.product_id;
  const deleteProduct = await Products.destroy({
    where: { product_id: id },
  });
  res.status(204).json({
    ok: true,
    status: 204,
    body: deleteProduct,
  });
});

module.exports = router;

// https://www.youtube.com/watch?v=3wzMVj7nxtI
