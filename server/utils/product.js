const { getDb } = require("./database");

function getProductCollection() {
  return getDb().collection("product");
}

module.exports = {};
