import React from "react";
import "./Products.css";

import Image from "../../assets/imgs/Home_Slider_1.png";
import IconAddProduct from "../../assets/icons/IconAddProduct";
import IconStarFill from "../../assets/icons/IconStarFill";
import IconStar from "../../assets/icons/IconStar";
import IconNextNav from "../../assets/icons/IconNextNav";

const Products = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container py-5 d-flex align-items-center flex-column">
      <div className="product_sorting d-flex justify-content-between align-items-center w-100 gap-3">
        <p>Showing 1-12 of 16 results</p>

        <select name="sort" id="shop-sort">
          <option value="">Default sorting</option>
          <option value="">Sort by popularity</option>
          <option value="">Sort by average rating</option>
          <option value="">Sort by latest</option>
          <option value="">Sort by price: low to high</option>
          <option value="">Sort by price: high to low</option>
        </select>
      </div>

      <div className="d-flex product_list flex-wrap justify-content-evenly gap-5">
        {products.map((item, index) => (
          <div
            key={index}
            className="product_item d-flex flex-column gap-3 align-items-center"
          >
            <img src={Image} alt="" className="w-100" />
            <div className="product_item_star">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStar />
            </div>
            <p className="product_item_title fw-bold m-0">
              Chef’s Signature Meal Plan
            </p>
            <p className="product_item_price fw-bold m-0 d-flex align-items-center gap-2">
              $18 <span className="product_item_sale">$12</span>
            </p>

            <div className="product_item_add d-flex align-items-center justify-content-center">
              <IconAddProduct />
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-primary">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">
          <IconNextNav />
        </button>
      </div>
    </div>
  );
};

export default Products;
