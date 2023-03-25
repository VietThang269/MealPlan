import React from "react";
import { useNavigate } from "react-router-dom";
import IconCart from "../../assets/icons/IconCart";
import IconHamburger from "../../assets/icons/IconHamburger";
import IconSearch from "../../assets/icons/IconSearch";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

import IconClose from "../../assets/icons/IconClose";
import "./MenuHeader.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: 400,
    border: "none",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const MenuHeader = ({ open, setOpen }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isResgister, setRegister] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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

      <button className="btn btn-primary" onClick={openModal}>
        Login
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterClose={() => setRegister(false)}
        style={customStyles}
        contentLabel="Modal Login/Resgister"
      >
        <div
          className="d-flex flex-column align-items-center"
          style={{
            gap: 10,
          }}
        >
          <div
            style={{
              alignSelf: "end",
              cursor: "pointer",
            }}
            onClick={closeModal}
          >
            <IconClose />
          </div>
          {isResgister ? (
            <SignUp setRegister={setRegister} />
          ) : (
            <SignIn setRegister={setRegister} />
          )}
        </div>
      </Modal>

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
