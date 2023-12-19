import logo from "./logo.svg";
import "./App.css";
import "./reset.css";
import Modal from "./Modal/Modal";
import React, { useEffect, useRef, useState } from "react";
import arrow from "./images/arrow.svg";
import Simple from "./pages/Simple";
import Difficult from "./pages/Difficult";
function App() {
  const [openModalHelp, setOpenModalHelp] = useState(false);
  const [openModalSocial, setOpenModalSocial] = useState(false);
  const [activeButton,setActiveButton]=useState({
    first:false,
    second:true
  })

   
  
  return (
    <div className="wrapper">
        <Modal //модальное окно
        active={openModalHelp}
        setActive={setOpenModalHelp}
      >
      
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(
                "",
                "_blank"
              );
            }}
          >
            Как собрать компьютер? <img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open("", "_blank");
            }}
          >
            Пример документа
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
      </Modal>
      <Modal active={openModalSocial} setActive={setOpenModalSocial}>
        <h1 className="modal-title">Социальные сети</h1>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open("https://vk.com/cosmokotik", "_blank");
            }}
          >
            ВК <img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open("https://t.me/COSMOKOT029", "_blank");
            }}
          >
            ТГ<img className="arrow" src={arrow}></img>
          </div>
        </div>
      </Modal>
      <header className="header">
        {" "}
        {/* шапка сайта */}
        <div className="header__container">
          <h3 className="small-title" onClick={() => setOpenModalSocial(true)}>
            Социальные сети
          </h3>
          <h1 className="title">Конструктор ПК</h1>
          <h3 className="small-title" onClick={() => setOpenModalHelp(true)}>
            Обучающие материалы
          </h3>
        </div>
      </header>
      
      <main className="main">
        <div className="content">
          <div className="content__container">
            <div className="navbar">
              <div className="navbar__content">
              
                <button
                  className={activeButton.first?"content__form-button active":"content__form-button"}
                  onClick={() =>
                    setActiveButton((prevState) => ({
                      ...prevState,
                      first: true,
                      second: false,
                    }))
                  }
                >
                  Упрощенная версия
                </button>
                <button
                   className={activeButton.second?"content__form-button active":"content__form-button"}
                  onClick={() =>
                    setActiveButton((prevState) => ({
                      ...prevState,
                      first: false,
                      second: true,
                    }))
                  }
                >
                  Продвинутая версия
                </button>
              </div>
            </div>
            
            {activeButton.first?<Simple></Simple>:<Difficult></Difficult>}
              
           
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
