import React from "react";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import Regbutton from "../Buttons/Reg_button/Regbutton";

const Navbar = () => {
  const [ bars, setbars] = useState(false);
  const onShow = () =>{
    setbars(!bars);
  }
  return (
    <div className="nav">
      <img src="../../img/logo 1.png" alt="Img not fount" />
      <ul>
        <li className="active">Kurs xaqida</li>
        <li>Kurs dasturi</li>
        <li>Sertifikatlash</li>
        <li>Mutaxassislar reestri</li>
      </ul>
      <div>
        <h3>+998 94 622 39 99</h3>
        <span>Kursga yozilish uchun</span>
      </div>
      <FaBars onClick={() => onShow()} className="bars" />
      <div className={bars ? 'bars_back show': 'bars_back'}>
        <div className="bars_panel">
          <FaTimesCircle onClick={() => onShow()} className="exit"/>
          <ul>
            <li className="active">Kurs xaqida</li>
            <li>Kurs dasturi</li>
            <li>Sertifikatlash</li>
            <li>Mutaxassislar reestri</li>
          </ul>
          <Regbutton/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
