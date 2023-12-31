import React, { useEffect, useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [openMenu, setOpenMenu] = useState(false);

  const handleWindowResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const scrollToView = (value) => {
    switch (value) {
      case "HOME":
        document
          .getElementById("nav-section")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "ABOUT ME":
        document
          .getElementById("about-section")
          .scrollIntoView({ behavior: "smooth" });
        break;

      case "SKILLS":
        document
          .getElementById("skills-section")
          .scrollIntoView({ behavior: "smooth" });
        break;

      case "EXPERIENCE":
        document
          .getElementById("experience-section")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "CONTACT":
        document
          .getElementById("contact-section")
          .scrollIntoView({ behavior: "smooth" });
        break;
      default:
        return;
    }
  };
  const getMenuItemsList = () => {
    const itemsList = document.querySelectorAll(".menu-items");
    itemsList.forEach((item) => {
      item.addEventListener("click", (e) => {
        itemsList.forEach((ele) => {
          ele.classList.remove("active");
        });
        e.target.classList.add("active");
        scrollToView(e.target.innerText);
      });
    });
  };

  return (
    <>
      {isMobileView ? (
        <div id="nav-section">
          <div className={openMenu ? "close" : "menu"} onClick={toggleMenu}>
            {openMenu ? (
              <CloseIcon color="primary" />
            ) : (
              <MenuIcon color="primary" />
            )}
          </div>

          <ul
            className="nav-bar-items-mobileView"
            style={{ visibility: openMenu ? "visible" : "hidden" }}
          >
            <li>HOME</li>
            <li>ABOUT ME</li>
            {/* <li>PROJECT</li> */}
            <li>SKILLS</li>
            <li>EXPERIENCE</li>
            <li>CONTACT</li>
          </ul>
        </div>
      ) : (
        <div className="nav-bar-container" id="nav-section">
          <div className="nav-bar-logo">
            <p>R</p>
          </div>
          <ul className="nav-bar-items" onClick={getMenuItemsList}>
            <li className="menu-items active">HOME</li>
            <li className="menu-items">ABOUT ME</li>
            {/* <li className="menu-items">PROJECT</li> */}
            <li className="menu-items">SKILLS</li>
            <li className="menu-items">EXPERIENCE</li>
            <li className="menu-items">CONTACT</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
