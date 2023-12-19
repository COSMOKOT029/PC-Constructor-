import "../App.css";
import "../reset.css";
import Modal from "../Modal/Modal";
import React, { useEffect, useRef, useState } from "react";
import arrow from "../images/arrow.svg";
function Simple() {
  const [disabled, setDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalC, setOpenModalC] = useState(false);
  const [linkCorpus, setLinkCorpus] = useState("");
  const [linkMotherBoard, setLinkMotherBoard] = useState("");
  const [linkProcessor, setLinkProcessor] = useState("");
  const [linkRam, setLinkRam] = useState("");
  const [linkPower, setLinkPower] = useState("");
  const [linkVideoCard, setLinkVideoCard] = useState("");
  const [linkCooler, setLinkCooler] = useState("");
  const [linkHDD, setLinkHDD] = useState("");
  const [linkSSD, setLinkSSD] = useState("");

  const [linkCorpusC, setLinkCorpusC] = useState("");
  const [linkMotherBoardC, setLinkMotherBoardC] = useState("");
  const [linkProcessorC, setLinkProcessorC] = useState("");
  const [linkRamC, setLinkRamC] = useState("");
  const [linkPowerC, setLinkPowerC] = useState("");
  const [linkVideoCardC, setLinkVideoCardC] = useState("");
  const [linkCoolerC, setLinkCoolerC] = useState("");
  const [linkHDDC, setLinkHDDC] = useState("");
  const [linkSSDC, setLinkSSDC] = useState("");

  const [linkScreen, setLinkScreen] = useState("");
  const [linkMouse, setLinkMouse] = useState("");
  const [linkKeyboard, setLinkKeyboard] = useState("");

  const [settings, setSettings] = useState({
    power: "",
    socketCooler: "",
    videoCardType: "f=discount.any%2Crating.any%2C12803_26",
    videoCardMemory: "any",
    formFactor: "",
    formFactorMother: "",
    processorName: "f=discount.any%2Crating.any%2Cintel",
    socketProcessor: "",
    HDD: "",
    SSD: "",
    socketProcessor: "",
    socketMotherBoard: "",
    ddrMotherBoard: "",
    ddrRam: "",
  });
  const [settingsC, setSettingsC] = useState({
    //переменные для хранения выбранных параметров DNS
    power: "",
    socketCooler: "",
    videoCardType: "f[ykgj]=1ii1lk",
    videoCardMemory: "any",
    formFactor: "",
    formFactorMother: "",
    processorName: "brand=intel",
    socketProcessor: "",
    HDD: "",
    SSD: "",
    socketProcessor: "",
    socketMotherBoard: "",
    ddrMotherBoard: "",
    ddrRam: "",
  });
  const answers = {
    //варианты ответов для сити
    power: [
      "f=discount.any%2Crating.any%2C315_40%2C317_40",
      "f=discount.any%2Crating.any%2C2834_40%2C2835_40",
      "f=discount.any%2Crating.any%2C2836_40%2C2838_40",
    ], //400-590/600-690/800+
    socketCooler: [
      "f=discount.any%2Crating.any%2C8498_39%2C9227_39",
      "f=discount.any%2Crating.any%2C8498_39%2C19607_39",
      "f=discount.any%2Crating.any%2C8498_39%2C10827_39",
      "f=discount.any%2Crating.any%2C8498_39%2C22915_39",
    ], //1200/1700/am4/am5
    videoCardMemory: [
      "&r=24919_29%3A2-6",
      "&r=24919_29%3A6-8",
      "&r=24919_29%3A8-12",
      "&r=24919_29%3A12-24",
    ],
    videoCardType: [
      "f=discount.any%2Crating.any%2C12803_26",
      "f=discount.any%2Crating.any%2C15985_26",
    ], //discret//integr
    ddrRam: [
      "f=discount.any%2Crating.any%2C647_28ddr4",
      "f=discount.any%2Crating.any%2C647_28ddr5",
    ],
    ddrMotherBoard: [
      "f=discount.any%2Crating.any%2C24672_27ddr4",
      "f=discount.any%2Crating.any%2C24672_27ddr5",
    ], //ddr4/ddr5
    processorCors: [
      "f=discount.any%2Crating.any%2C8554_262",
      "f=discount.any%2Crating.any%2C8554_264",
      "f=discount.any%2Crating.any%2C8554_266",
      "f=discount.any%2Crating.any%2C8554_268",
    ],
    socketProcessor: [
      "f=discount.any%2Crating.any%2C157_26lgad11200",
      "f=discount.any%2Crating.any%2C157_26lgad11700",
      "f=discount.any%2Crating.any%2C157_26am4",
      "f=discount.any%2Crating.any%2C157_26am5",
    ], //1200/1700/am4
    socketMotherBoard: [
      "f=discount.any%2Crating.any%2C239_27lgad11200",
      "f=discount.any%2Crating.any%2C239_27lgad11700",
      "f=discount.any%2Crating.any%2C239_27socketam4",
      "f=discount.any%2Crating.any%2C239_27socketam5",
    ], //1200/1700/am4
    formFactor: [
      "f=discount.any%2Crating.any%2C185_41atx",
      "f=discount.any%2Crating.any%2C185_41matx",
      "f=discount.any%2Crating.any%2C185_41miniitx",
    ], //atx,matx,mini itx  форм фактор для корпуса
    formFactorMother: [
      "f=discount.any%2Crating.any%2C240_27atx",
      "f=discount.any%2Crating.any%2C240_27matx",
      "f=discount.any%2Crating.any%2C240_27minia5itx",
    ], //atx,matx,mini itx  форм фактор для материнки
    processorName: [
      "f=discount.any%2Crating.any%2Camd",
      "f=discount.any%2Crating.any%2Cintel",
    ], //amd,intel,любой

    HDD: [
      "r=11251_32%3A500-1024",
      "r=11251_32%3A2048-4096",
      "r=11251_32%3A4096-20048",
    ], //0.5-1,2-4,4+

    SSD: [
      "f=discount.any%2Crating.any%2C24505_580%2C24506_580", //128-256
      "f=discount.any%2Crating.any%2C24507_580%2C24508_580", //480-1
      "f=discount.any%2Crating.any%2C24510_580%2C24512_580%2C24511_580", //1.9+
    ],
  };
  const answersC = {
    //варианты ответов для сити
    power: [
      "category=17a89c2216404e77&fr[wts5]=400-590",
      "stock=now-today-tomorrow-later-out_of_stock&fr[wts5]=590-690",
      "stock=now-today-tomorrow-later-out_of_stock&fr[wts5]=800-2500",
    ], //400-590/600-690/800+
    socketCooler: [
      "f[zaj5]=1jvcsa",
      "f[zaj5]=1jvcsd",
      "f[zaj5]=1jvcry",
      "f[zaj5]=1k8n0q",
    ], //1200/1700/am4/am5
    videoCardMemory: [
      "f[mx]=2f8-2f6-fgik-2ff",
      "f[mx]=2ff-2fi",
      "f[mx]=2fi-udtfd-fell-2fh",
      "f[mx]=2fh-dbbc-1fmnh2-d8xw-myay2",
    ], //2-6/6-8/8-10/12+
    videoCardType: ["f[ykgj]=1ii1lk", "f[ykgj]=1ii1lj"], //discret//integr
    ddrRam: ["f[z0mm]=1jdava", "f[z0mm]=1jdavb"], //ddr4/ddr5
    ddrMotherBoard: ["f[rv35]=13j3sp", "f[rv35]=19m8s5"], //ddr4/ddr5
    processorCors: ["f[mo]=27h", "f[mo]=27j", "f[mo]=27k", "f[mo]=27m"], //2/4/6/8
    socketProcessor: [
      "f[ykgd]=1ii0zi",
      "f[ykgd]=1ii0zj",
      "f[ykgd]=1ii0zc",
      "f[ykgd]=1oufa9",
    ], //1200/1700/am4/am5
    socketMotherBoard: [
      "f[rv2z]=13j0y6",
      "f[rv2z]=19m8s3",
      "f[rv2z]=13iyb1",
      "f[rv2z]=1obzp7",
    ], //1200/1700/am4/am5
    formFactor: ["f[rk4l]=12s3y6", "f[rk4l]=12s3y0", "f[rk4l]=12s3y3"], //atx,matx,mini itx  форм фактор для корпуса
    formFactorMother: ["f[rv2y]=13iyav", "f[rv2y]=13iyal", "f[rv2y]=13iyas"], //atx,matx,mini itx  форм фактор для материнки
    processorName: ["brand=amd", "brand=intel"], //amd,intel,любой
    HDD: [
      "f[n1]=2fv-2fo",
      "f[n1]=2fx-2g6",
      "f[n1]=2g6-2gh-8yg2-bpj1-klos-bbwm8-mat5p-wkvph-1g2hyh-2180fq",
    ], //0.5-1,2-4,4+

    SSD: ["fr[c03]=120-256", "fr[c03]=480-1024", "fr[c03]=2048-8000", ,], //128-256
    //480-1
    //1.9+
  };
  useEffect(() => {
    //если не все поля заполнены, получить результаты нельзя
    console.log(settingsC);
  }, [settingsC]);
  useEffect(() => {
    //если не все поля заполнены, получить результаты нельзя
    if (Object.values(settings).indexOf("") > -1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [settings]);
  const handleSumbit = (event) => {
    //функция срабатывает при нажатии кнопки получить результаты
    event.preventDefault();
    event.stopPropagation();
    createlink(); //функция для генерации ссылок
    //открывает модалку
  };

  const createlink = () => {
    //функция для генерации ссылок
    let hrefCorpus =
      "https://www.citilink.ru/catalog/korpusa/?pf=discount.any%2Crating.any";
    let hrefProcessor =
      "https://www.citilink.ru/catalog/processory/?text=процессоры&pf=discount.any%2Crating.any";
    let hrefMotherBoard =
      "https://www.citilink.ru/catalog/materinskie-platy/?text=материнская%20&pf=discount.any%2Crating.any";
    let hrefVideoCard =
      "https://www.citilink.ru/search/?text=видеокарта&pf=discount.any%2Crating.any&f=discount.any%2Crating.any&menu_id=29";
    let hrefCooler =
      "https://www.citilink.ru/search/?text=кулер&pf=discount.any%2Crating.any&f=discount.any%2Crating.any%2C8498_39&menu_id=39";
    let hrefPower =
      "https://www.citilink.ru/search/?text=блок%20питания&pf=discount.any%2Crating.any%2C315_40&f=discount.any%2Crating.any&menu_id=40";
    let hrefHDD =
      "https://www.citilink.ru/search/?text=жесткий%20диск&menu_id=32";
    let hrefSSD =
      "https://www.citilink.ru/search/?text=ssd&pf=discount.any%2Crating.any%2C24510_580&f=discount.any%2Crating.any&menu_id=580";
    let hrefRam =
      "https://www.citilink.ru/catalog/moduli-pamyati/?text=оперативная+память";

    let hrefCorpusC =
      "https://www.dns-shop.ru/search/?q=корпус&category=17a89c5616404e77&stock=now-today-tomorrow-later";
    let hrefProcessorC =
      "https://www.dns-shop.ru/search/?q=процессор&category=17a899cd16404e77&stock=now-today-tomorrow-later";
    let hrefMotherBoardC =
      "https://www.dns-shop.ru/search/?q=материнская+плата&category=17a89a0416404e77&stock=now-today-tomorrow-later";
    let hrefVideoCardC =
      "https://www.dns-shop.ru/search/?q=видео+карта&category=17a89aab16404e77&stock=now-today-tomorrow-later";
    let hrefCoolerC =
      "https://www.dns-shop.ru/search/?q=кулер&category=17a9cc2d16404e77&stock=now-today-tomorrow-later";
    let hrefPowerC =
      "https://www.dns-shop.ru/search/?q=блок+питания&category=17a89c2216404e77&stock=now-today-tomorrow-later";
    let hrefHDDC =
      "https://www.dns-shop.ru/search/?q=hdd&category=17a8914916404e77&stock=now-today-tomorrow-later";
    let hrefSSDC =
      "https://www.dns-shop.ru/search/?q=ssd&category=8a9ddfba20724e77&stock=now-today-tomorrow-later";
    let hrefRamC =
      "https://www.dns-shop.ru/search/?q=оперативная+память&category=17a89a3916404e77&stock=now-today-tomorrow-later";
    for (var key of Object.keys(settings)) {
      if (settings[key] !== "none" && settings[key] !== "any") {
        if (key == "formFactor") {
          hrefCorpus += `&${settings[key]}`;
        } else if (
          key == "processorName" ||
          key == "socketProcessor" ||
          key == "processorCors" ||
          key == "videoCardType"
        ) {
          hrefProcessor += `&${settings[key]}`;
        } else if (key == "formFactorMother" || key == "socketMotherBoard") {
          hrefMotherBoard += `&${settings[key]}`;
        } else if (key == "videoCardMemory") {
          hrefVideoCard += `&${settings[key]}`;
        } else if (key == "socketCooler") {
          hrefCooler += `&${settings[key]}`;
        } else if (key == "HDD") {
          hrefCooler += `&${settings[key]}`;
        } else if (key == "power") {
          hrefPower += `&${settings[key]}`;
        } else if (key == "HDD") {
          hrefHDD += `&${settings[key]}`;
        } else if (key == "SSD") {
          hrefSSD += `&${settings[key]}`;
        } else if (key == "ddrRam") {
          hrefRam += `&${settings[key]}`;
        }
      }
    }

    for (var key of Object.keys(settingsC)) {
      if (settingsC[key] !== "none" && settingsC[key] !== "any") {
        if (key == "formFactor") {
          hrefCorpusC += `&${settingsC[key]}`;
        } else if (
          key == "processorName" ||
          key == "socketProcessor" ||
          key == "processorCors" ||
          key == "videoCardType"
        ) {
          hrefProcessorC += `&${settingsC[key]}`;
        } else if (key == "formFactorMother" || key == "socketMotherBoard") {
          hrefMotherBoardC += `&${settingsC[key]}`;
        } else if (key == "videoCardMemory") {
          hrefVideoCardC += `&${settingsC[key]}`;
        } else if (key == "socketCooler") {
          hrefCoolerC += `&${settingsC[key]}`;
        } else if (key == "HDD") {
          hrefCoolerC += `&${settingsC[key]}`;
        } else if (key == "power") {
          hrefPowerC += `&${settingsC[key]}`;
        } else if (key == "HDD") {
          hrefHDDC += `&${settingsC[key]}`;
        } else if (key == "SSD") {
          hrefSSDC += `&${settingsC[key]}`;
        } else if (key == "ddrRam") {
          hrefRamC += `&${settingsC[key]}`;
      
        }
      }
    }

    setLinkRam(hrefRam);
    setLinkSSD(hrefSSD);
    setLinkHDD(hrefHDD);
    setLinkPower(hrefPower);
    setLinkCooler(hrefCooler);
    setLinkCorpus(hrefCorpus);
    setLinkMotherBoard(hrefMotherBoard);
    setLinkProcessor(hrefProcessor);
    setLinkVideoCard(hrefVideoCard);

    setLinkRamC(hrefRamC);
    setLinkSSDC(hrefSSDC);
    setLinkHDDC(hrefHDDC);
    setLinkPowerC(hrefPowerC);
    setLinkCoolerC(hrefCoolerC);
    setLinkCorpusC(hrefCorpusC);
    setLinkMotherBoardC(hrefMotherBoardC);
    setLinkProcessorC(hrefProcessorC);
    setLinkVideoCardC(hrefVideoCardC);
  };
  return (
    <div className="content__inner">
      <Modal active={openModal} setActive={setOpenModal}>
        <h1 className="modal-title">Подходящая конфигурация в Ситилинк</h1>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkCorpus, "_blank");
            }}
          >
            Корпус<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkMotherBoard, "_blank");
            }}
          >
            Материнская плата<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkProcessor, "_blank");
            }}
          >
            Процессор<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkCooler, "_blank");
            }}
          >
            Кулер<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkPower, "_blank");
            }}
          >
            Блок питания<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkHDD, "_blank");
            }}
          >
            HDD
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkSSD, "_blank");
            }}
          >
            SSD
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkRam, "_blank");
            }}
          >
            Оперативная память
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
        {settings.videoCardType == "f=discount.any%2Crating.any%2C12803_26" ? (
          <div className="link-container">
            <div
              className="link"
              onClick={() => {
                window.open(linkVideoCard, "_blank");
              }}
            >
              Видеокарта<img className="arrow" src={arrow}></img>
            </div>
          </div>
        ) : (
          <></>
        )}
      </Modal>
      <Modal active={openModalC} setActive={setOpenModalC}>
        <h1 className="modal-title">Подходящая конфигурация в DNS</h1>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkCorpusC, "_blank");
            }}
          >
            Корпус<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkMotherBoardC, "_blank");
            }}
          >
            Материнская плата<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkProcessorC, "_blank");
            }}
          >
            Процессор<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkCoolerC, "_blank");
            }}
          >
            Кулер<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkPowerC, "_blank");
            }}
          >
            Блок питания<img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkHDD, "_blank");
            }}
          >
            HDD
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkSSDC, "_blank");
            }}
          >
            SSD
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="link-container">
          <div
            className="link"
            onClick={() => {
              window.open(linkRamC, "_blank");
            }}
          >
            Оперативная память
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
        {settings.videoCardType == "f[ykgj]=1ii1lk" ? (
          <div className="link-container">
            <div
              className="link"
              onClick={() => {
                window.open(linkVideoCardC, "_blank");
              }}
            >
              Видеокарта<img className="arrow" src={arrow}></img>
            </div>
          </div>
        ) : (
          <></>
        )}
      </Modal>
      {
        <form className="content__form">
          <ul className="list">
            <li className="list__item">
              <h3 className="list__item-title">
                {" "}
                Форм фактор материнской платы
              </h3>
              <div className="list__check">
                <label>
                  <input
                    className={
                      settings.formFactor == answers.formFactor[2]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.formFactor}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        formFactor: answers.formFactor[2],
                        formFactorMother: answers.formFactorMother[2],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        formFactor: answersC.formFactor[2],
                        formFactorMother: answersC.formFactorMother[2],
                      }));
                    }}
                  />
                  miniITX
                </label>
                <label>
                  <input
                    className={
                      settings.formFactor == answers.formFactor[0]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.formFactor}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        formFactor: answers.formFactor[0],
                        formFactorMother: answers.formFactorMother[0],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        formFactor: answersC.formFactor[0],
                        formFactorMother: answersC.formFactorMother[0],
                      }));
                    }}
                  />
                  ATX
                </label>
                <label>
                  <input
                    className={
                      settings.formFactor == answers.formFactor[1]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.formFactor}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        formFactor: answers.formFactor[1],
                        formFactorMother: answers.formFactorMother[1],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        formFactor: answersC.formFactor[1],
                        formFactorMother: answersC.formFactorMother[1],
                      }));
                    }}
                  />
                  mATX
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
              </div>
            </li>
            <li className="list__item">
              <h3 className="list__item-title"> Сокет процессора</h3>
              <div className="list__check">
                {settings.processorName ==
                "f=discount.any%2Crating.any%2Cintel" ? (
                  <>
                    <label>
                      <input
                        className={
                          settings.socketProcessor == answers.socketProcessor[1]
                            ? "list__input radio checked"
                            : "list__input radio"
                        }
                        type="checkbox"
                        value={settings.socketProcessor}
                        onChange={(event) => {
                          setSettings((prevState) => ({
                            ...prevState,
                            socketProcessor: answers.socketProcessor[1],
                            socketMotherBoard: answers.socketMotherBoard[1],
                            socketCooler: answers.socketCooler[1],
                          }));
                          setSettingsC((prevState) => ({
                            ...prevState,
                            socketProcessor: answersC.socketProcessor[1],
                            socketMotherBoard: answersC.socketMotherBoard[1],
                            socketCooler: answersC.socketCooler[1],
                          }));
                        }}
                      />
                      LGA 1700
                    </label>
                    <label>
                      <input
                        className={
                          settings.socketProcessor == answers.socketProcessor[0]
                            ? "list__input radio checked"
                            : "list__input radio"
                        }
                        type="checkbox"
                        value={settings.socketProcessor}
                        onChange={(event) => {
                          setSettings((prevState) => ({
                            ...prevState,
                            socketProcessor: answers.socketProcessor[0],
                            socketMotherBoard: answers.socketMotherBoard[0],
                            socketCooler: answers.socketCooler[0],
                          }));
                          setSettingsC((prevState) => ({
                            ...prevState,
                            socketProcessor: answersC.socketProcessor[0],
                            socketMotherBoard: answersC.socketMotherBoard[0],
                            socketCooler: answersC.socketCooler[0],
                          }));
                        }}
                      />
                      LGA 1200
                    </label>
                  </>
                ) : (
                  <>
                    <label>
                      <input
                        className={
                          settings.socketProcessor == answers.socketProcessor[2]
                            ? "list__input radio checked"
                            : "list__input radio"
                        }
                        type="checkbox"
                        value={settings.socketProcessor}
                        onChange={(event) => {
                          setSettings((prevState) => ({
                            ...prevState,
                            socketProcessor: answers.socketProcessor[2],
                            socketMotherBoard: answers.socketMotherBoard[2],
                            socketCooler: answers.socketCooler[2],
                          }));
                          setSettingsC((prevState) => ({
                            ...prevState,
                            socketProcessor: answersC.socketProcessor[2],
                            socketMotherBoard: answersC.socketMotherBoard[2],
                            socketCooler: answersC.socketCooler[2],
                          }));
                        }}
                      />
                      AM 4
                    </label>
                    <label>
                      <input
                        className={
                          settings.socketProcessor == answers.socketProcessor[3]
                            ? "list__input radio checked"
                            : "list__input radio"
                        }
                        type="checkbox"
                        value={settings.socketProcessor}
                        onChange={(event) => {
                          setSettings((prevState) => ({
                            ...prevState,
                            socketProcessor: answers.socketProcessor[3],
                            socketMotherBoard: answers.socketMotherBoard[3],
                            socketCooler: answers.socketCooler[3],
                          }));
                          setSettingsC((prevState) => ({
                            ...prevState,
                            socketProcessor: answersC.socketProcessor[3],
                            socketMotherBoard: answersC.socketMotherBoard[3],
                            socketCooler: answersC.socketCooler[3],
                          }));
                        }}
                      />
                      AM 5
                    </label>
                  </>
                )}
              </div>
            </li>

            <li className="list__item">
              <h3 className="list__item-title"> Количество ядер процессора</h3>
              <div className="list__check">
                <label>
                  <input
                    className={
                      settings.processorCors == answers.processorCors[0]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.processorCors}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        processorCors: answers.processorCors[0],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        processorCors: answersC.processorCors[0],
                      }));
                    }}
                  />
                  2
                </label>
                <label>
                  <input
                    className={
                      settings.processorCors == answers.processorCors[1]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.processorCors}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        processorCors: answers.processorCors[1],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        processorCors: answersC.processorCors[1],
                      }));
                    }}
                  />
                  4
                </label>
                <label>
                  <input
                    className={
                      settings.processorCors == answers.processorCors[2]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.processorCors}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        processorCors: answers.processorCors[2],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        processorCors: answersC.processorCors[2],
                      }));
                    }}
                  />
                  6
                </label>
                <label>
                  <input
                    className={
                      settings.processorCors == answers.processorCors[3]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.processorCors}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        processorCors: answers.processorCors[3],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        processorCors: answersC.processorCors[3],
                      }));
                    }}
                  />
                  8
                </label>
              </div>
            </li>
            <li className="list__item">
              <h3 className="list__item-title">Тип оперативной памяти</h3>
              <div className="list__check">
                <label>
                  <input
                    className={
                      settings.ddrRam == answers.ddrRam[0]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.ddrRam}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        ddrRam: answers.ddrRam[0],
                        ddrMotherBoard: answers.ddrMotherBoard[0],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        ddrRam: answersC.ddrRam[0],
                        ddrMotherBoard: answersC.ddrMotherBoard[0],
                      }));
                    }}
                  />
                  DDR4
                </label>
                <label>
                  <input
                    className={
                      settings.ddrRam == answers.ddrRam[1]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.ddrRam}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        ddrRam: answers.ddrRam[1],
                        ddrMotherBoard: answers.ddrMotherBoard[1],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        ddrRam: answersC.ddrRam[1],
                        ddrMotherBoard: answersC.ddrMotherBoard[1],
                      }));
                    }}
                  />
                  DDR5
                </label>
              </div>
            </li>
            <li className="list__item">
              <h3 className="list__item-title">Тип видеокарты</h3>
              <div className="list__check">
                <label>
                  <input
                    className={
                      settings.videoCardType == answers.videoCardType[0]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.videoCardType}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        videoCardType: answers.videoCardType[0],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        videoCardType: answersC.videoCardType[0],
                      }));
                    }}
                  />
                  Дискретная
                </label>
                <label>
                  <input
                    className={
                      settings.videoCardType == answers.videoCardType[1]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.videoCardType}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        videoCardType: answers.videoCardType[1],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        videoCardType: answersC.videoCardType[1],
                      }));
                    }}
                  />
                  Интегрированная
                </label>
              </div>
            </li>
            {settings.videoCardType ==
            "f=discount.any%2Crating.any%2C12803_26" ? (
              <li className="list__item">
                <h3 className="list__item-title">Объем видеопамяти</h3>
                <div className="list__check">
                  <label>
                    <input
                      className={
                        settings.videoCardMemory == answers.videoCardMemory[0]
                          ? "list__input radio checked"
                          : "list__input radio"
                      }
                      type="checkbox"
                      value={settings.videoCardMemory}
                      onChange={(event) => {
                        setSettings((prevState) => ({
                          ...prevState,
                          videoCardMemory: answers.videoCardMemory[0],
                        }));
                        setSettingsC((prevState) => ({
                          ...prevState,
                          videoCardMemory: answersC.videoCardMemory[0],
                        }));
                      }}
                    />
                    2-6
                  </label>
                  <label>
                    <input
                      className={
                        settings.videoCardMemory == answers.videoCardMemory[1]
                          ? "list__input radio checked"
                          : "list__input radio"
                      }
                      type="checkbox"
                      value={settings.videoCardMemory}
                      onChange={(event) => {
                        setSettings((prevState) => ({
                          ...prevState,
                          videoCardMemory: answers.videoCardMemory[1],
                        }));
                        setSettingsC((prevState) => ({
                          ...prevState,
                          videoCardMemory: answersC.videoCardMemory[1],
                        }));
                      }}
                    />
                    6-8
                  </label>
                  <label>
                    <input
                      className={
                        settings.videoCardMemory == answers.videoCardMemory[2]
                          ? "list__input radio checked"
                          : "list__input radio"
                      }
                      type="checkbox"
                      value={settings.videoCardMemory}
                      onChange={(event) => {
                        setSettings((prevState) => ({
                          ...prevState,
                          videoCardMemory: answers.videoCardMemory[2],
                        }));
                        setSettingsC((prevState) => ({
                          ...prevState,
                          videoCardMemory: answersC.videoCardMemory[2],
                        }));
                      }}
                    />
                    8-12
                  </label>
                  <label>
                    <input
                      className={
                        settings.videoCardMemory == answers.videoCardMemory[3]
                          ? "list__input radio checked"
                          : "list__input radio"
                      }
                      type="checkbox"
                      value={settings.videoCardMemory}
                      onChange={(event) => {
                        setSettings((prevState) => ({
                          ...prevState,
                          videoCardMemory: answers.videoCardMemory[3],
                        }));
                        setSettingsC((prevState) => ({
                          ...prevState,
                          videoCardMemory: answersC.videoCardMemory[3],
                        }));
                      }}
                    />
                    12-24
                  </label>
                </div>
              </li>
            ) : (
              <></>
            )}
            <li className="list__item">
              <h3 className="list__item-title">Мощность блока питания</h3>
              <div className="list__check">
                <label>
                  <input
                    className={
                      settings.power == answers.power[0]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.power}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        power: answers.power[0],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        power: answersC.power[0],
                      }));
                    }}
                  />
                  400-590 Вт
                </label>
                <label>
                  <input
                    className={
                      settings.power == answers.power[1]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.power}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        power: answers.power[1],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        power: answersC.power[1],
                      }));
                    }}
                  />
                  600-790 Вт
                </label>
                <label>
                  <input
                    className={
                      settings.power == answers.power[2]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.power}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        power: answers.power[2],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        power: answersC.power[2],
                      }));
                    }}
                  />
                  800+ Вт
                </label>
              </div>
            </li>
            <li className="list__item">
              <h3 className="list__item-title"> Объем HDD</h3>
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
              </div>
            </li>
            <li className="list__item">
              <h3 className="list__item-title"> Объем SSD</h3>
              <div className="list__check">
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
                  128-256 ГБ
                </label>
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
                  480-1024 ГБ
                </label>
                <label>
                  <input
                    className={
                      settings.SSD == answers.SSD[2]
                        ? "list__input radio checked"
                        : "list__input radio"
                    }
                    type="checkbox"
                    value={settings.SSD}
                    onChange={(event) => {
                      setSettings((prevState) => ({
                        ...prevState,
                        SSD: answers.SSD[2],
                      }));
                      setSettingsC((prevState) => ({
                        ...prevState,
                        SSD: answersC.SSD[2],
                      }));
                    }}
                  />
                  2048 ГБ+
                </label>
              </div>
            </li>
            <div className="button-container">
              <button
                className={
                  disabled
                    ? "content__form-button disabled"
                    : "content__form-button"
                }
                disabled={disabled}
                onClick={(event) => {
                  setOpenModal(true);
                  handleSumbit(event);
                }}
              >
                Результаты в Ситилинк
              </button>
              <button
                className={
                  disabled
                    ? "content__form-button disabled"
                    : "content__form-button"
                }
                disabled={disabled}
                onClick={(event) => {
                  setOpenModalC(true);
                  handleSumbit(event);
                }}
              >
                Результаты в DNS
              </button>
            </div>
          </ul>
        </form>
      }
    </div>
  );
}

export default Simple;
