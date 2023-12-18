import logo from "./logo.svg";
import "./App.css";
import "./reset.css";
import Modal from "./Modal/Modal";
import React, { useEffect, useRef, useState } from "react";
import arrow from "./images/arrow.svg";
function App() {
  const [disabled, setDisabled] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openModalHelp, setOpenModalHelp] = useState(false);
  const [openModalSocial, setOpenModalSocial] = useState(false);
  const [link, setLink] = useState("");
  const [linkHDD, setLinkHDD] = useState("");
  const [linkScreen, setLinkScreen] = useState("");
  const [linkMouse, setLinkMouse] = useState("");
  const [linkKeyboard, setLinkKeyboard] = useState("");
  const [linkC, setLinkC] = useState("");
  const [linkHDDC, setLinkHDDC] = useState("");
  const [linkScreenC, setLinkScreenC] = useState("");
  const [linkMouseC, setLinkMouseC] = useState("");
  const [linkKeyboardC, setLinkKeyboardC] = useState("");
  const [settings, setSettings] = useState({
    //переменные для хранения выбранных параметров днс
    processorName: "",
    budget: "",
    purpose: "",
    sizes: "",
    SSD: "",
    HDD: "",
    priceHDD: "",
    screen: "",
    priceScreen: "",
    keyboard: "",
    priceKeyboard: "",
    mouse: "",
    priceMouse: "",
  });
  const [settingsC, setSettingsC] = useState({
    //переменные для хранения выбранных параметров ситилинк
    processorName: "",
    budget: "",
    purpose: "",
    sizes: "",
    SSD: "",
    HDD: "",
    priceHDD: "",
    screen: "",
    priceScreen: "",
    keyboard: "",
    priceKeyboard: "",
    mouse: "",
    priceMouse: "",
  });
  const answers = {
    //варианты ответов для днс
    budget: [
      "price=25000-55000",
      "price=55000-80000",
      "price=80000-120000",
      "price=120000-1000000",
    ],
    processorName: [
      "f[6cx]=11ggi2-exg5-gai9-2il6m-kp79t-298p-298q",
      "f[6cx]=298d-298c-1tr8hp-298h-298i-2gcgs-298e",
      "any",
    ], //amd,intel,любой
    purpose: [
      "f[lrp]=81r7",
      "f[lrp]=81r3&f[6bz]=28ys",
      "f[6cr]=dhwo-297w-297u",
    ], //игровой,не игровой & встроенная видеокарта, 16+ озу
    sizes: ["f[6dd]=19frjc", "f[6dd]=29iu", "f[6dd]=19oq0d-29iq-b8uz", "any"], //mid,mini,slim+sff+nettop
    SSD: [
      "f[6cl]=l6bsp-1aj5yf-2975-2974-297d-itfwj-skgc2",
      "f[6cl]=dhwd-2gch4-h6fq-m3piz-lwy9j-szj20-1nk26m-1swqpy",
    ], //до 256,480+
    HDD: [
      "f[n1]=2fo-2fv",
      "f[n1]=2fx-2fy-2g6",
      "f[n1]=2gh-8yg2-bpj1-klos-bbwm8-mat5p-wkvph-1g2hyh-2180fq",
      "none",
    ], //0.5-1,2-4,4+
    priceHDD: [
      "price=99-5000",
      "price=5001-7000",
      "price=5001-9000",
      "price=5001-1000000",
    ],
    screen: ["f[p47]=b3op", "f[p47]=b3p9"], //игровая,не игровая
    priceScreen: [
      "price=5300-20000",
      "price=20001-35000",
      "price=35001-50000",
      "price=50000-1000000",
    ],
    keyboard: ["f[l8p]=6y7p", "f[l8p]=6y7q"], //игровая,не игровая
    priceKeyboard: [
      "price=500-2000",
      "price=2000-4000",
      "price=4000-6000",
      "price=6001-1000000",
    ],
    mouse: ["f[579]=1q34", "f[579]=bha5"], //игровая,не игровая
    priceMouse: [
      "price=500-1500",
      "price=1500-3000",
      "price=3000-5000",
      "price=5001-1000000",
    ],
  };
  const answersC = {
    //варианты ответов для ситилинк
    budget: [
      "r=price_filter_group_id%3A25000-55000",
      "r=price_filter_group_id%3A55000-80000",
      "r=price_filter_group_id%3A80000-120000",
      "r=price_filter_group_id%3A120000-1000000",
    ],
    processorName: [
      "pf=discount.any%2Crating.any%2C791_2a10d1pro%2C791_2athlon%2C791_2athlond1silverd1pro%2C791_2ryzen%2C791_2ryzend13%2C791_2ryzend13d1pro%2C791_2ryzend15&f=discount.any%2Crating.any%2C791_2a10d1pro%2C791_2athlon%2C791_2athlond1silverd1pro%2C791_2ryzen%2C791_2ryzend13%2C791_2ryzend13d1pro%2C791_2ryzend15%2C791_2ryzend15d1pro%2C791_2ryzend17",
      "pf=discount.any%2Crating.any%2C791_2celeron%2C791_2cored1i3%2C791_2cored1i5%2C791_2cored1i7%2C791_2cored1i9&f=discount.any%2Crating.any%2C791_2celeron%2C791_2cored1i3%2C791_2cored1i5%2C791_2cored1i7%2C791_2cored1i9%2C791_2pentium%2C791_2pentiumd1gold",
      "any",
    ], //amd,intel,любой
    purpose: [
      "f=discount.any%2Crating.any%2C14459_2game",
      "pf=discount.any%2Crating.any%2C5348_2integrirovannyy&f=discount.any%2Crating.any%2C5348_2integrirovannyy%2C14459_2office%2C14459_2home",
      "pf=discount.any%2Crating.any&f=discount.any%2Crating.any&r=24775_2%3A16-32",
    ], //игровой,не игровой & встроенная видюха, 16+ озу
    sizes: [
      "f=discount.any%2Crating.any%2C790_2sistemnyyd1blok",
      "f=discount.any%2Crating.any%2C790_2nettop%2C790_2minid1pk",
      "f=discount.any%2Crating.any%2C790_2tonkiyd1klient%2C790_2minid1pk",
      "any",
    ], //Системный пк,неттоп+мини пк,мини пк +тонкий
    SSD: ["r=24792_2%3A64-256", "r=24792_2%3A256-1024"], //до 256,480+
    HDD: [
      "r=11251_32%3A500-1024",
      "r=11251_32%3A2048-4096",
      "r=11251_32%3A4096-20048",
      "none",
    ], //0.5-1,2-4,4+
    priceHDD: [
      "r=price_filter_group_id%3A5290-7000",
      "r=price_filter_group_id%3A5290-9000",
      "r=price_filter_group_id%3A5290-13000",
      "r=price_filter_group_id%3A5290-100000",
    ],
    screen: [
      "f=discount.any%2Crating.any%2C13737_162",
      "f=discount.any%2Crating.any%2C19947_162",
    ], //игровая,не игровая
    priceScreen: [
      "r=price_filter_group_id%3A5990-20000",
      "r=price_filter_group_id%3A20000-35000",
      "r=price_filter_group_id%3A35000-60000",
      "r=price_filter_group_id%3A60000-1000000",
    ],
    keyboard: ["f=discount.any%2Crating.any%2C12085_6", "f=discount.any%2Crating.any%2C12079_6"], //игровая,проводная
    priceKeyboard: [
      "r=price_filter_group_id%3A500-2000",
      "r=price_filter_group_id%3A2000-4000",
      "r=price_filter_group_id%3A4000-6000",
      "r=price_filter_group_id%3A6000-1000000",
    ],
    mouse: [
      "f=discount.any%2Crating.any%2C12072_7",
      "f=discount.any%2Crating.any%2C3899_7",
    ], //игровая,не игровая
    priceMouse: [
      "r=price_filter_group_id%3A500-1500",
      "r=price_filter_group_id%3A1500-3000",
      "r=price_filter_group_id%3A3000-5000",
      "r=price_filter_group_id%3A5001-1000000",
    ],
  };
  const handleSumbit = (event) => {
    //функция срабатывает при нажатии кнопки получить результаты
    event.preventDefault();
    event.stopPropagation();
    createlink(); //функция для генерации ссылок
    setOpenModal(true); //открывает модалку
  };
  useEffect(() => {
    //если не все поля заполнены, получить результаты нельзя
    if (Object.values(settings).indexOf("") > -1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [settings]);
  useEffect(() => {
    //если не все поля заполнены, получить результаты нельзя
    console.log(settingsC);
  }, [settingsC]);

  const createlink = () => {
    //функция для генерации ссылок
    let href =
      "https://www.dns-shop.ru/search/?category=17a8932c16404e77&q=компьютер&stock=now-today-tomorrow-later";
    let hrefHDD =
      "https://www.dns-shop.ru/search/?q=жесткий+диск&category=17a8914916404e77&stock=now-today-tomorrow-later";
    let hrefScreen =
      "https://www.dns-shop.ru/search/?q=монитор&category=17a8943716404e77&stock=now-today-tomorrow-later";
    let hrefMouse =
      "https://www.dns-shop.ru/search/?q=мышь&category=17a8a69116404e77&stock=now-today-tomorrow-later";
    let hrefKeyboard =
      "https://www.dns-shop.ru/search/?q=клавиатура&category=17a8950d16404e77&stock=now-today-tomorrow-later";
    let hrefC = "https://www.citilink.ru/catalog/kompyutery/?text=r";
    let hrefScreenC = "https://www.citilink.ru/search/?text=монитор&menu_id=162";
    let hrefHDDC = "https://www.citilink.ru/search/?text=жесткий%20диск&menu_id=32";
    let hrefMouseC = "https://www.citilink.ru/search/?text=мышь&menu_id=7";
    let hrefKeyboardC = "https://www.citilink.ru/search/?text=клавиатура&menu_id=6";
    for (var key of Object.keys(settings)) {
      if (settings[key] !== "none" && settings[key] !== "any") {
        if (key == "screen" || key == "priceScreen") {
          hrefScreen += `&${settings[key]}`;
        } else if (key == "HDD" || key == "priceHDD") {
          hrefHDD += `&${settings[key]}`;
        } else if (key == "mouse" || key == "priceMouse") {
          hrefMouse += `&${settings[key]}`;
        } else if (key == "keyboard" || key == "priceKeyboard") {
          hrefKeyboard += `&${settings[key]}`;
        } else {
          href += `&${settings[key]}`;
        }
      }
    }

    for (var key of Object.keys(settingsC)) {
      if (settingsC[key] !== "none" && settingsC[key] !== "any") {
        if (key == "screen" || key == "priceScreen") {
          hrefScreenC += `&${settingsC[key]}`;
        } else if (key == "HDD" || key == "priceHDD") {
          hrefHDDC += `&${settingsC[key]}`;
        } else if (key == "mouse" || key == "priceMouse") {
          hrefMouseC += `&${settingsC[key]}`;
        } else if (key == "keyboard" || key == "priceKeyboard") {
          hrefKeyboardC += `&${settingsC[key]}`;
          console.log(hrefKeyboardC)
        } else {
          console.log(settingsC[key]);
          hrefC += `&${settingsC[key]}`;
        }
      }
    }

    setLinkScreen(hrefScreen);
    setLinkKeyboard(hrefKeyboard);
    setLinkMouse(hrefMouse);
    setLinkHDD(hrefHDD);
    setLink(href);

    setLinkScreenC(hrefScreenC);
    setLinkKeyboardC(hrefKeyboardC);
    setLinkMouseC(hrefMouseC);
    setLinkHDDC(hrefHDDC);
    setLinkC(hrefC);
  };
  return (
    <div className="wrapper">
      <Modal //модальное окно
        active={openModalHelp}
        setActive={setOpenModalHelp}
      >
        <h1 className="modal-title">Обучающие материалы</h1>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open("https://www.youtube.com", "_blank");
            }}
          >
            Как собрать компьютер? <img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open(
                "https://disk.yandex.ru",
                "_blank"
              );
            }}
          >
            Как выбрать готовую конфигурацию ПК?<img className="arrow" src={arrow}></img>
          </div>
        </div>
      </Modal>
      <Modal 
        active={openModalSocial}
        setActive={setOpenModalSocial}
      >
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
              window.open(
                "https://t.me/COSMOKOT029",
                "_blank"
              );
            }}
          >
            ТГ<img className="arrow" src={arrow}></img> 
          </div>
        </div>
      </Modal>
      <Modal active={openModal} setActive={setOpenModal}>
        <h1 className="modal-title">Подходящая конфигурация в DNS</h1>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            Сборка ПК<img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open(linkScreen, "_blank");
            }}
          >
            Монитор<img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open(linkKeyboard, "_blank");
            }}
          >
            Клавиатура<img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open(linkMouse, "_blank");
            }}
          >
            Мышь<img className="arrow" src={arrow}></img>
          </div>
          {settings.HDD !== "none" ? (
            <div
              className="link"
              onClick={() => {
                window.open(linkHDD, "_blank");
              }}
            >
              Дополнительный жесткий диск
              <img className="arrow" src={arrow}></img>
            </div>
          ) : (
            <></>
          )}
        </div>
        <h1 className="modal-title">Подходящая конфигурация в Ситилинк</h1>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkC, "_blank");
            }}
          >
            Сборка ПК<img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open(linkScreenC, "_blank");
            }}
          >
            Монитор<img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open(linkKeyboardC, "_blank");
            }}
          >
            Клавиатура<img className="arrow" src={arrow}></img>
          </div>
          <div
            className="link"
            onClick={() => {
              window.open(linkMouseC, "_blank");
            }}
          >
            Мышь<img className="arrow" src={arrow}></img>
          </div>
          {settings.HDD !== "none" ? (
            <div
              className="link"
              onClick={() => {
                window.open(linkHDDC, "_blank");
              }}
            >
              Дополнительный жесткий диск
              <img className="arrow" src={arrow}></img>
            </div>
          ) : (
            <></>
          )}
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
        </div>
        <h3 className="small-title-2" onClick={() => setOpenModalHelp(true)}>
            Обучающие материалы
          </h3>
      </header>
      <main className="main">
        <div className="content">
          <div className="content__container">
            <div className="content__inner">
              <form className="content__form">
                <ul className="list">
                  <li className="list__item">
                    <h3 className="list__item-title">Бюджет</h3>
                    <div className="list__check">
                      <label>
                        <input // радио кнопка
                          className={
                            settings.budget == answers.budget[0]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.budget}
                          onChange={(event) => {
                            // раздел заполнения переменных для генерации поисковой строки
                            setSettings((prevState) => ({
                              ...prevState,
                              budget: answers.budget[0],
                              priceHDD: answers.priceHDD[0],
                              priceScreen: answers.priceScreen[0],
                              priceKeyboard: answers.priceKeyboard[0],
                              priceMouse: answers.priceMouse[0],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              budget: answersC.budget[0],
                              priceHDD: answersC.priceHDD[0],
                              priceScreen: answersC.priceScreen[0],
                              priceKeyboard: answersC.priceKeyboard[0],
                              priceMouse: answersC.priceMouse[0],
                            }));
                          }}
                        />
                        25-55 к рублей
                      </label>
                      <label>
                        <input
                          className={
                            settings.budget == answers.budget[1]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.budget}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              budget: answers.budget[1],
                              priceHDD: answers.priceHDD[1],
                              priceScreen: answers.priceScreen[1],
                              priceKeyboard: answers.priceKeyboard[1],
                              priceMouse: answers.priceMouse[1],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              budget: answersC.budget[1],
                              priceHDD: answersC.priceHDD[1],
                              priceScreen: answersC.priceScreen[1],
                              priceKeyboard: answersC.priceKeyboard[1],
                              priceMouse: answersC.priceMouse[1],
                            }));
                          }}
                        />
                        55-80к рублей
                      </label>
                      <label>
                        <input
                          className={
                            settings.budget == answers.budget[2]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.budget}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              budget: answers.budget[2],
                              priceHDD: answers.priceHDD[2],
                              priceScreen: answers.priceScreen[2],
                              priceKeyboard: answers.priceKeyboard[2],
                              priceMouse: answers.priceMouse[2],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              budget: answersC.budget[2],
                              priceHDD: answersC.priceHDD[2],
                              priceScreen: answersC.priceScreen[2],
                              priceKeyboard: answersC.priceKeyboard[2],
                              priceMouse: answersC.priceMouse[2],
                            }));
                          }}
                        />
                        80к-120к рублей
                      </label>
                      <label>
                        <input
                          className={
                            settings.budget == answers.budget[3]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.budget}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              budget: answers.budget[3],
                              priceHDD: answers.priceHDD[3],
                              priceScreen: answers.priceScreen[3],
                              priceKeyboard: answers.priceKeyboard[3],
                              priceMouse: answers.priceMouse[3],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              budget: answersC.budget[3],
                              priceHDD: answersC.priceHDD[3],
                              priceScreen: answersC.priceScreen[3],
                              priceKeyboard: answersC.priceKeyboard[3],
                              priceMouse: answersC.priceMouse[3],
                            }));
                          }}
                        />
                        120к + рублей
                      </label>
                    </div>
                  </li>
                  <li className="list__item">
                    <h3 className="list__item-title">
                      {" "}
                      Для чего вам компьютер?
                    </h3>
                    <div className="list__check">
                      <label>
                        <input
                          className={
                            settings.purpose == answers.purpose[2]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.purpose}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              purpose: answers.purpose[2],
                              screen: answers.screen[2],
                              keyboard: answers.keyboard[2],
                              mouse: answers.mouse[2],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              purpose: answersC.purpose[2],
                              screen: answers.screen[2],
                              keyboard: answers.keyboard[2],
                              mouse: answers.mouse[2],
                            }));
                          }}
                        />
                        Для работы с требовательными программами
                      </label>
                      <label>
                        <input
                          className={
                            settings.purpose == answers.purpose[0]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.purpose}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              purpose: answers.purpose[0],
                              screen: answers.screen[0],
                              keyboard: answers.keyboard[0],
                              mouse: answers.mouse[0],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              purpose: answersC.purpose[0],
                              screen: answersC.screen[0],
                              keyboard: answersC.keyboard[0],
                              mouse: answersC.mouse[0],
                            }));
                          }}
                        />
                        Для игр
                      </label>
                      <label>
                        <input
                          className={
                            settings.purpose == answers.purpose[1]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.purpose}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              purpose: answers.purpose[1],
                              screen: answers.screen[1],
                              keyboard: answers.keyboard[1],
                              mouse: answers.mouse[1],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              purpose: answersC.purpose[1],
                              screen: answersC.screen[1],
                              keyboard: answersC.keyboard[1],
                              mouse: answersC.mouse[1],
                            }));
                          }}
                        />
                        Для работы в офисе и дома
                      </label>
                    </div>
                  </li>
                  <li className="list__item">
                    <h3 className="list__item-title">
                      {" "}
                      Собираетесь ли вы обрабатывать большой объем данных на
                      высокой скорости?
                    </h3>
                    <div className="list__check">
                      <label>
                        <input
                          className={
                            settings.SSD == answers.SSD[1]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.SSD}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              SSD: answers.SSD[1],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              SSD: answersC.SSD[1],
                            }));
                          }}
                        />
                        Да
                      </label>
                      <label>
                        <input
                          className={
                            settings.SSD == answers.SSD[0]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.SSD}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              SSD: answers.SSD[0],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              SSD: answersC.SSD[0],
                            }));
                          }}
                        />
                        Нет
                      </label>
                    </div>
                  </li>
                  <li className="list__item">
                    <h3 className="list__item-title">Размеры компьютера</h3>
                    <div className="list__check">
                      <label>
                        <input
                          className={
                            settings.sizes == answers.sizes[0]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.sizes}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              sizes: answers.sizes[0],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              sizes: answersC.sizes[0],
                            }));
                          }}
                        />
                        Большой
                      </label>
                      <label>
                        <input
                          className={
                            settings.sizes == answers.sizes[1]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.sizes}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              sizes: answers.sizes[1],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              sizes: answersC.sizes[1],
                            }));
                          }}
                        />
                        Средний
                      </label>
                      <label>
                        <input
                          className={
                            settings.sizes == answers.sizes[2]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.sizes}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              sizes: answers.sizes[2],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              sizes: answersC.sizes[2],
                            }));
                          }}
                        />
                        Маленький
                      </label>
                      <label>
                        <input
                          className={
                            settings.sizes == answers.sizes[3]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.sizes}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              sizes: answers.sizes[3],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              sizes: answersC.sizes[3],
                            }));
                          }}
                        />
                        Любой
                      </label>
                    </div>
                  </li>
                  <li className="list__item">
                    <h3 className="list__item-title"> Процессор</h3>
                    <div className="list__check">
                      <label>
                        <input
                          className={
                            settings.processorName == answers.processorName[0]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.processorName}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              processorName: answers.processorName[0],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              processorName: answersC.processorName[0],
                            }));
                          }}
                        />
                        AMD
                      </label>
                      <label>
                        <input
                          className={
                            settings.processorName == answers.processorName[1]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.processorName}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              processorName: answers.processorName[1],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              processorName: answersC.processorName[1],
                            }));
                          }}
                        />
                        Intel
                      </label>
                      <label>
                        <input
                          className={
                            settings.processorName == answers.processorName[2]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.processorName}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              processorName: answers.processorName[2],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              processorName: answersC.processorName[2],
                            }));
                          }}
                        />
                        Любой
                      </label>
                    </div>
                  </li>
                  <li className="list__item">
                    <h3 className="list__item-title">
                      {" "}
                      Дополнительный жесткий диск какого объема вам необходим?
                    </h3>
                    <div className="list__check">
                      <label>
                        <input
                          className={
                            settings.HDD == answers.HDD[0]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.HDD}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              HDD: answers.HDD[0],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              HDD: answersC.HDD[0],
                            }));
                          }}
                        />
                        0.5ТБ-1ТБ
                      </label>
                      <label>
                        <input
                          className={
                            settings.HDD == answers.HDD[1]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.HDD}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              HDD: answers.HDD[1],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              HDD: answersC.HDD[1],
                            }));
                          }}
                        />
                        2ТБ-4ТБ
                      </label>
                      <label>
                        <input
                          className={
                            settings.HDD == answers.HDD[2]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.HDD}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              HDD: answers.HDD[2],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              HDD: answersC.HDD[2],
                            }));
                          }}
                        />
                        4ТБ +
                      </label>
                      <label>
                        <input
                          className={
                            settings.HDD == answers.HDD[3]
                              ? "list__input radio checked"
                              : "list__input radio"
                          }
                          type="checkbox"
                          value={settings.HDD}
                          onChange={(event) => {
                            setSettings((prevState) => ({
                              ...prevState,
                              HDD: answers.HDD[3],
                            }));
                            setSettingsC((prevState) => ({
                              ...prevState,
                              HDD: answersC.HDD[3],
                            }));
                          }}
                        />
                        Не нужен
                      </label>
                    </div>
                  </li>
                  <button
                    className={
                      disabled
                        ? "content__form-button disabled"
                        : "content__form-button"
                    }
                    disabled={disabled}
                    onClick={handleSumbit}
                  >
                    Получить результаты
                  </button>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
