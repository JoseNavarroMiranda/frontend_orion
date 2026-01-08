import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbarmenu from "./components/navbar/Navbarmenu.jsx";
import MainInfo from "./components/information/mainpage/MainInfo.jsx";
import MiddleInfo from "./components/information/mainpage/MiddleInfo.jsx";
import Footer from "./components/footer/Footer.jsx";
import AboutUs from "./components/information/aboutus/AboutUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbarmenu />
    <MainInfo />
    <MiddleInfo />
    <AboutUs />
    <Footer />
  </StrictMode>
);
