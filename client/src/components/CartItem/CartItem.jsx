import React from "react";
import Image from "../../assets/imgs/Home_Slider_1.png";
import IconTrash from "../../assets/icons/IconTrash";

const CartItem = () => {
  const [number, setNumber] = React.useState(0);

  return (
    <div className="cart_item d-flex align-items-center justify-content-between py-5 px-2 gap-2">
      <div className="cart_item_content">
        <div className="cart_header_mobile">
          <p>Product</p>
        </div>
        <div
          style={{
            width: "40%",
          }}
        >
          <img src={Image} alt="" className="w-100 h-100" />
        </div>
      </div>

      <div className="cart_item_content">
        <div className="cart_header_mobile">
          <p>Name</p>
        </div>

        <div>
          <p className="m-0">Chef’s Signature Meal Plan</p>
        </div>
      </div>
      <div className="cart_item_content">
        <div className="cart_header_mobile">
          <p>Price</p>
        </div>
        <div>
          <p className="m-0">$18</p>
        </div>
      </div>
      <div className="cart_item_content d-flex justify-content-center align-items-center">
        <div className="cart_header_mobile">
          <p>Quanity</p>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn_minus"
            onClick={() => setNumber(number - 1)}
          >
            -
          </button>
          <input
            className="input_cart"
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
          <button className="btn btn_add" onClick={() => setNumber(number + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="cart_item_content">
        <div className="cart_header_mobile">
          <p>Total</p>
        </div>
        <div>
          <p className="m-0">$18</p>
        </div>
      </div>
      <div className="cart_item_content">
        <div className="cart_header_mobile">
          <p>Remove</p>
        </div>
        <div>
          <IconTrash />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
