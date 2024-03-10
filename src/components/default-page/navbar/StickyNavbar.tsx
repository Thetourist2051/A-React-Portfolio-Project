import React, { useEffect, useState } from "react";
import styles from "./StickyNavbar.module.scss";
import { ImageUrl } from "../../../constants/ImageUrls";

const StickyNavbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const heightThreshold = 70 * window.innerHeight / 100;

      if (offset > heightThreshold) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      // Check which section is in view
      const sections = ["home-section", "resume-section", "service-section", "pricing-section", "portfolio-section", "blog-section"];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`w-full bg-slate-200 sticky top-0 z-10 ${isSticky ? "sticky-nav" : ""} ${styles["sticky-container"]}`} >
        <div className="container mx-auto h-full flex items-center justify-between py-4 px-2 relative">
          <div className="left-nav flex justify-start">
            <ul className="list-none">
              <li className={`${styles["nav-li"]} inline-block px-4 py-2 cursor-pointer text-black border text-md ${activeSection === 'home-section' ? styles['activeli'] : ''}`} onClick={() => scrollToSection('home-section')}>Home</li>
              <li className={`${styles["nav-li"]} inline-block px-4 py-2 cursor-pointer text-black border text-md ${activeSection === 'resume-section' ? styles['activeli'] : ''}`} onClick={() => scrollToSection('resume-section')}>Resume</li>
              <li className={`${styles["nav-li"]} inline-block px-4 py-2 cursor-pointer text-black border text-md ${activeSection === 'service-section' ? styles['activeli'] : ''}`} onClick={() => scrollToSection('service-section')}>Services</li>
            </ul>
          </div>

          <div className={`${isSticky ? styles['reveal-class'] : styles['close-class']} ${styles['middle-text']} h-20vh aspect-square rounded-full bg-white absolute mx-auto z-10 left-0 right-0 perfect-center flex-col`}>
            <h6>Afriduzaman</h6>
            <p className="text-xs">Web Developer</p>
          </div>

          <div className={`${isSticky ? styles['close-class'] : styles['reveal-class']} ${styles["middle-profile"]}" h-20vh aspect-square rounded-full bg-white absolute mx-auto z-10 left-0 right-0 perfect-center`}>
            <img className="h-90-percent w-90-percent rounded-full" src={ImageUrl.afridiProfile} alt="" />
          </div>

          <div className="right-nav">
            <div className="left-nav flex justify-end">
              <ul className="list-none">
                <li className={`${styles["nav-li"]} inline-block px-4 py-2 cursor-pointer text-black border text-md ${activeSection === 'pricing-section' ? styles['activeli'] : ''}`} onClick={() => scrollToSection('pricing-section')}>Pricing</li>
                <li className={`${styles["nav-li"]} inline-block px-4 py-2 cursor-pointer text-black border text-md ${activeSection === 'portfolio-section' ? styles['activeli'] : ''}`} onClick={() => scrollToSection('portfolio-section')}>Portfolio</li>
                <li className={`${styles["nav-li"]} inline-block px-4 py-2 cursor-pointer text-black border text-md ${activeSection === 'blog-section' ? styles['activeli'] : ''}`} onClick={() => scrollToSection('blog-section')}>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyNavbar;
