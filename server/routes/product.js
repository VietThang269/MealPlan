const { createNewProduct, getAllProduct } = require("../utils/product");

const router = require("express").Router();
/*
    products
- name: string
- price: double
- category: array
- image: string
- description: string
- component: array
- rate: double
- discount: double

200 -> GET OK, UPDATED OK, DELETE OK
201 -> CREATED OK
500 -> Server lỗi
*/

// Thêm sản phẩm
router.post("/", async (req, res, next) => {
  try {
    const {
      name,
      price,
      category,
      image,
      description,
      component,
      rate,
      discount,
    } = req.body;

    const response = await createNewProduct({
      name,
      price,
      category,
      image,
      description,
      component,
      rate,
      discount,
    });

    res.status(201).send({
      message: "created success",
      error: 0,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "system error",
      error: -1,
    });
  }
});

// Lấy tất cả sản phẩm
router.get("/", async (req, res, next) => {
  try {
    const data = await getAllProduct();
    res.send(data);
  } catch (error) {}
});

// Sửa sản phẩm
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params;
  } catch (error) {}
});

// Xóa sản phẩm
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params;
  } catch (error) {}
});

module.exports = router;
