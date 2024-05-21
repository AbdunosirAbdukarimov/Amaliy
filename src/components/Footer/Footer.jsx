import "./Footer.scss";
import { IoLogoVk } from "react-icons/io5";
import { FaSquareBehance } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <img src="../../img/logo 1.png" alt="" />
      <h1>5 ta o’quv dasturi</h1>
      <div className="footer_text">
        <div className="text_one">
          <ul>
            <li>1.Mutaxassislar uchun kurslar</li>
            <li>2.Ota-onalar uchun kurslar</li>
            <li>3.Malaka oshirish</li>
            <li>4.Amaliy mashg’ulotlar</li>
            <li>5.Nazorat</li>
          </ul>
        </div>
        <div className="text_two">
          <ul>
            <li>Sertikifatlash</li>
            <li>Mutaxassislar reestri</li>
            <li>Kurs xaqida </li>
            <li>Kurs dasturi</li>
            <li>Resurslar</li>
          </ul>
        </div>
        <div className="text_three">
          <ul>
            <li>Ish vaqti: 10: 00 dan 17:00 gacha</li>
            <li>Info@Aba-kurs.com</li>
          </ul>
          <div className="icon">
            <IoLogoVk />
            <FaSquareBehance />
            <BsInstagram />
          </div>
        </div>
      </div>
      <h2>© 2024 barcha huquqlar himoyalangan.</h2>
    </div>
  );
};

export default Footer;
