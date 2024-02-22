import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const homeBtn = document.getElementById("home-btn");
    const skillsBtn = document.getElementById("skills-btn");
    const workExperienceBtn = document.getElementById("work-experience-btn");
    const contactMeBtn = document.getElementById("contact-me-btn");

    if (homeBtn) {
      homeBtn.addEventListener("click", handleButtonClick("home"));
    }

    if (skillsBtn) {
      skillsBtn.addEventListener("click", handleButtonClick("skills"));
    }

    if (workExperienceBtn) {
      workExperienceBtn.addEventListener(
        "click",
        handleButtonClick("workExperience")
      );
    }

    if (contactMeBtn) {
      contactMeBtn.addEventListener("click", handleButtonClick("contactMe"));
    }

    return () => {
      if (homeBtn) {
        homeBtn.removeEventListener("click", handleButtonClick("home"));
      }

      if (skillsBtn) {
        skillsBtn.removeEventListener("click", handleButtonClick("skills"));
      }

      if (workExperienceBtn) {
        workExperienceBtn.removeEventListener(
          "click",
          handleButtonClick("workExperience")
        );
      }

      if (contactMeBtn) {
        contactMeBtn.removeEventListener(
          "click",
          handleButtonClick("contactMe")
        );
      }
    };
  }, []);

  const handleButtonClick = (section) => (event) => {
    event.preventDefault();

    switch (section) {
      case "home":
        window.scrollTo({
          behavior: "smooth",
          top: 0,
        });
        break;
      case "skills":
        window.scrollTo({
          behavior: "smooth",
          top: 500,
        });
        break;
      case "workExperience":
        window.scrollTo({
          behavior: "smooth",
          top: 1000,
        });
        break;
      case "contactMe":
        window.scrollTo({
          behavior: "smooth",
          top: 3000,
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/logo_miki.png" alt="" />

          <ul>
            <li>
              <a className="menu-item" id="home-btn" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" id="skills-btn" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" id="work-experience-btn" href="#">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" id="contact-me-btn" href="#">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={openMenu ? faClose : faBars}
              style={{ fontSize: "1.8rem" }}
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
