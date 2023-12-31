import React from "react";
import "./modal.css";
import close from "../images/close.svg";

const Modal = ({ active, setActive, children,classes}) => {
  return (
    <div className={active ? "modal active " : "modal"}>
      <div
        className={active ?classes? "modal__content active " + classes:"modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <img
          onClick={() => setActive(false)}
          src={close}
          className="modal__close"
        ></img>
      </div>
      
    </div>
  );
};
export default Modal;
