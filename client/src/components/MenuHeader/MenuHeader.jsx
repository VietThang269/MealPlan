import React from "react";
import { useNavigate } from "react-router-dom";
import IconCart from "../../assets/icons/IconCart";
import IconHamburger from "../../assets/icons/IconHamburger";
import IconSearch from "../../assets/icons/IconSearch";
import "./MenuHeader.css";

const MenuHeader = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex menu_header gap-4 align-items-center">
      <button type="button" class="btn btn-primary btn_menu_header">
        Order Your Meal
      </button>
      <IconSearch />

      <div onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
        <IconCart />
      </div>

      <div
        className="header_hambuger"
        onClick={() => {
          setOpen(true);
        }}
      >
        <IconHamburger />
      </div>
    </div>
  );
};

export default MenuHeader;
