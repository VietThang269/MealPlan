const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartsSchema = new Schema(
  {
    list: [
      {
        products_id: { type: String, required: true },
        quanity: { type: Double, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Carts = mongoose.model("Carts", cartsSchema);
module.exports = Carts;
