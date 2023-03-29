const { getDb } = require("./database");

function getProductCollection() {
  return getDb().collection("user");
}

module.exports = {};
