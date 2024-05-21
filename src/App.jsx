import "./App.scss";
import { Footer, Navbar, Reg, Regbutton, Slider } from "./components";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";


function App() {
  return (
    <>
      <Navbar />
      <Reg/>
      <div className="conteiner">
        <div className="header">
          <div className="header_text">
            <h3>Yuliya Erz kurslari</h3>
            <h1>
              Amaliy xulq-atvor tahlili <span>ABA</span> asoslari kursi
            </h1>
            <p>
              Kurs Autistik Spektr Buzilishi bo'lgan bolalar bilan ishlashga
              ixtisoslashgan xulq-atvor va kurs ABA-terapiyasi uslublarini
              qo‘llashni o‘rganmoqchi bo‘lgan Autistik Spektr Buzilishi bo‘lgan
              bolalarning ota-onalari va mutaxassislar uchun ham.
            </p>
            <Regbutton />
          </div>
          <div className="header_img">
            <img src="../../img/Remove-bg 1.png" alt="" />
          </div>
        </div>
        <main>
          <div className="main_header">
            <div className="main_header_text">
              <h1>Kurs dasturidagi modullar qanday?</h1>
            </div>
            <div className="main_header_slider">
              <Slider />
            </div>
          </div>
          <div className="main_13">
            <div className="main_13_text">
              <h1>13 Yillik ish tajribasi</h1>
              <h3>
                Xalqaro darajadagi xulq-atvor mutaxassislarini kasbiy tayyorlash
              </h3>
              <p>
                Bizning loyihamiz Rossiya va uning atrofidagi mamlakatlarda
                bitiruvchilari xalqaro miqyosda o'z vakolatlarini tasdiqlovchi
                sertifikatlarga ega bo'lgan kam sonli kishilardan biridir.
                <br />
                <br />
                Autizm loyihasi: xulq-atvorni tahlil qilish asosida tuzatish
                ishlari s(ava). Nazariya va amaliyot " 2011 yilda "bizning
                quyoshli dunyomiz "bolalik nogironlarini reabilitatsiya qilish
                markazi (Moskva) asosida yaratilgan.
              </p>
              <Regbutton />
            </div>
            <div className="main_13_img">
              <img src="../../img/Rectangle 49.png" alt="" />
            </div>
          </div>
          <div className="main_why">
            <div className="main_why_text">
              <h1>Nega biz?</h1>
              <h2></h2>
            </div>
            <div className="main_why_boxes">
              <div className="main_why_box">
                <div className="main_why_box_top">
                  <img
                    src="../../img/Frame 22.png"
                    alt=""
                    className="top_img"
                  />
                  <h4>Amalda qo’llanilishi mumkin bo’lgan bilimlar</h4>
                </div>
                <div className="main_why_box_botton">
                  <p>
                    Xulq-atvor funktsiyasini aniqlash va maqsadli aralashuv
                    rejasini ishlab chiqish uchun funktsional xatti-harakatlarni
                    baholash bo'yicha bosqichma-bosqich ko'rsatma.
                  </p>
                </div>
              </div>
              <div className="main_why_box">
                <div className="main_why_box_top">
                  <img
                    src="../../img/Frame 22.png"
                    alt=""
                    className="top_img"
                  />
                  <h4>
                    Turli darajalarda o’rganish va rivojlanish bosqichlari
                  </h4>
                </div>
                <div className="main_why_box_botton">
                  <p>
                    Rivojlanish bosqichlari: rivojlanishning asosiy bosqichlari
                    va ularning hayotning turli bosqichlarida o'rganish va
                    xulq-atvorga qanday ta'sir qilishi haqida umumiy ma'lumot.
                  </p>
                </div>
              </div>
              <div className="main_why_box">
                <div className="main_why_box_top">
                  <img
                    src="../../img/Frame 22.png"
                    alt=""
                    className="top_img"
                  />
                  <h4>Tajribali va sertifikatlangan o’qituvchilar jamoasi</h4>
                </div>
                <div className="main_why_box_botton">
                  <p>
                    Uzluksiz ta'lim va sertifikatlash: kasbiy ma'lumot va
                    tajribani yanada oshirish uchun ilg'or sertifikatlar,
                    tasdiqlashlar yoki maxsus treninglarni o'tkazish bo'yicha
                    ko'rsatmalar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_presentation">
            <div className="main_presentation_text">
              <h1>Taqdimot videosi</h1>
              <h2></h2>
            </div>
            <div className="main_presentation_main">
              <div className="main_presentation_main_text">
                <div className="main_presentation_main_text_content">
                  <div>
                    <FaRegPauseCircle className="swg" />
                  </div>
                  <h4>Masofaviy kursda o’qitish qanday amalga oshiriladi</h4>
                </div>
                <div className="main_presentation_main_text_content">
                  <div>
                    <FaRegPlayCircle className="swg" />
                  </div>
                  <h4>
                    Ava mutaxassisining ixtisoslashtirilgan ta'limi-kerakmi?
                  </h4>
                </div>
                <div className="main_presentation_main_text_content">
                  <div>
                    <FaRegPlayCircle className="swg" />
                  </div>
                  <h4>"Xulq-atvor tahlilchilarini sertifikatlash" nima?</h4>
                </div>
                <div className="main_presentation_main_text_content">
                  <div>
                    <FaRegPlayCircle className="swg" />
                  </div>
                  <h4>"Xulq-atvor tahlilchisi" kasbi</h4>
                </div>
                <div className="main_presentation_main_text_content">
                  <div>
                    <FaRegPlayCircle className="swg" />
                  </div>
                  <h4>Kasb "xulq-atvor dasturlari kuratori"</h4>
                </div>
                <div className="main_presentation_main_text_content">
                  <div>
                    <FaRegPlayCircle className="swg" />
                  </div>
                  <h4>Ava o'qituvchisi kasbi</h4>
                </div>
              </div>
              <div className="main_presentation_img">
                <img src="../../img/Rectangle 42.png" alt="" />
              </div>
            </div>
          </div>
          <div className="main_certificatelashning">
            <h1>Sertifikatlashning 5 darajasi</h1>
            <div className="main_certificatelashning_main">
              <div className="main_certificatelashning_main_accordion">
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ fontWeight: "600" }}
                  >
                    01-IBP xulq-atvor dasturlarini amalga oshiruvchi
                    (ABA-o’qituvchi)
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="h1"
                      fontSize={"18px"}
                      color={"#141414"}
                      fontWeight={"500"}
                    >
                      Malakani saqlash:
                    </Typography>
                    <Typography
                      variant="h1"
                      fontSize={"18px"}
                      color={"#141414"}
                      fontWeight={"300"}
                      ml={5}
                      mt={2}
                    >
                      Malakani muddati-12 oy
                    </Typography>
                    <Typography
                      variant="h1"
                      fontSize={"18px"}
                      color={"#141414"}
                      fontWeight={"300"}
                      ml={5}
                      mt={2}
                    >
                      Bir yildan keyin malakani saqlab qolish uchun quyidagilar
                      zarur:
                    </Typography>
                    <Typography
                      variant="h1"
                      fontSize={"18px"}
                      color={"#141414"}
                      fontWeight={"300"}
                      ml={5}
                      mt={2}
                    >
                      Nazoratchi yoki kurator tomonidan imzolangan amaliyot
                      soatlarini hisobga olish shakllarini oxirgi 12 oy ichida
                      kamida 10 soat hajmda taqdim etish
                    </Typography>
                    <Typography
                      variant="h1"
                      fontSize={"18px"}
                      color={"#141414"}
                      fontWeight={"300"}
                      ml={5}
                      mt={2}
                    >
                      Yoki
                    </Typography>
                    <Typography
                      variant="h1"
                      fontSize={"18px"}
                      color={"#141414"}
                      fontWeight={"300"}
                      ml={5}
                      mt={2}
                    >
                      "Yillik sertifikatlash" jarayonidan muvaffaqiyatli o'ting
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ fontWeight: "600" }}
                  >
                    02-IBP xulq-atvor dasturlarini amalga oshiruvchi (Katta
                    ABA-o’qituvchisi)
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ fontWeight: "600" }}
                  >
                    03-IBP xulq-atvor dasturlarini amalga oshiruvchi
                    (ABA-dasturlari)
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ fontWeight: "600" }}
                  >
                    04-MBP xulq-atvor dasturlarini amalga oshiruvchi (Xulq-atvor
                    dasturlari kuratori)
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ fontWeight: "600" }}
                  >
                    05-CBA-S Sertifikatlangan xulq-atvor tahlilchisi va
                    maslahatchisi (S-x-a-t-v-n)
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
              </div>
              <div className="main_certificatelashning_main_img">
                <div className="main_img">
                  <div className="main_img_top">
                    <h4>Kurs o’quv dasturining PDF</h4>
                  </div>
                  <div className="main_img_botton">
                    <p>
                      1-modulni muvaffaqiyatli tugatish "Amaliy xulq-atvorni
                      tahlil qilishning asosiy printsiplari va usullari
                      (ava)" mutaxassislar uchun dasturlar <br />
                      <br />
                      2. 1-amaliy treningdan o'ting "Asd bilan kasallangan
                      bolalar bilan ishlashda asosiy ava ta'lim strategiyalarini
                      qo'llash"
                    </p>
                    <h2></h2>
                  </div>
                </div>
                <div className="main_img">
                  <div className="main_img_top">
                    <h4>Malakani tasdiqlovchi hujjat</h4>
                  </div>
                  <div className="main_img_botton_img">
                    <p>1-darajali sertifikat (Aba-o'qituvchi/terapevt) </p>
                    <img src="../../img/IBP1 1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main_end">
              <h1>Bizning hamkorlar</h1>
              <div className="main_end_images">
                <FaChevronLeft className="icon"/>
                <img
                  src="../../img/f453928a982551c97b3a8a62905d703e 1.png"
                  alt=""
                  className="svg"
                />
                <img
                  src="../../img/LOGO - водный знак (1) 1.png"
                  alt=""
                  className="svg"
                />
                <img
                  src="../../img/LOGO - водный знак (1) 1 (1).png"
                  alt=""
                  className="svg"
                />
                <img
                  src="../../img/image 15.png"
                  alt=""
                  className="svg"
                />
                <img
                  src="../../img/image 16.png"
                  alt=""
                  className="svg"
                />
                <img
                  src="../../img/image 21.png"
                  alt=""
                  className="svg"
                />
                <FaChevronRight className="icon"/>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        
      </div>
    </>
  );
}

export default App;
