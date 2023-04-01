const { getDb } = require("./database");

function getProductCollection() {
  return getDb().collection("product");
}

// Thêm sản phẩm
async function createNewProduct(data) {
  const reponse = await getProductCollection().insertOne(data);
  return reponse;
}

// Lấy tất cả sản phẩm
async function getAllProduct() {
  const response = await getProductCollection().find({}).toArray();
  return response;
}

module.exports = {
  createNewProduct,
  getAllProduct,
};
