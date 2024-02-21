/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from "react";
import styles from "./StickyNavbar.module.scss";
import { ImageUrl } from "../../../constants/ImageUrls";

const StickyNavbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const heightThreshold = 70 * window.innerHeight / 100; // Calculate 70vh dynamically

      if (offset > heightThreshold) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-full bg-slate-200 sticky top-0 ${isSticky ? "sticky-nav" : ""} ${styles["sticky-container"]}`} data-spy="affix" data-offset-top="410">
        <div className="container mx-auto h-full flex items-center justify-between py-4 px-2 relative">
          <div className="left-nav flex justify-start">
             <ul className="list-none">
              <li className={styles["nav-li"] +" inline-block px-4 py-2 cursor-pointer text-black border text-md hover:font-semibold"}>Home</li>
              <li className={styles["nav-li"] +" inline-block px-4 py-2 cursor-pointer text-black border text-md hover:font-semibold"}>About</li>
              <li className={styles["nav-li"] +" inline-block px-4 py-2 cursor-pointer text-black border text-md hover:font-semibold"}>Resume</li>
             </ul>
          </div>

          <div className={`${isSticky ? styles['reveal-class'] : styles['close-class']} ${styles['middle-text']} h-20vh aspect-square rounded-full bg-white absolute mx-auto z-10 left-0 right-0 perfect-center flex-col`}>
            <h6>Afriduzaman</h6>
            <p className="text-xs">Web Developer</p>
          </div>

          <div className={`${isSticky ? styles['close-class'] : styles['reveal-class']} ${styles["middle-profile"]}" h-20vh aspect-square rounded-full bg-white absolute mx-auto z-10 left-0 right-0 perfect-center`}>
            <img className="h-90-percent w-90-percent rounded-full" src={ImageUrl.userImg} alt="" />
          </div>

          <div className="right-nav">
        <div className="left-nav flex justify-end">
             <ul className="list-none">
              <li className={styles["nav-li"] +" inline-block px-4 py-2 cursor-pointer text-black border text-md hover:font-semibold"}>Portfolio</li>
              <li className={styles["nav-li"] +" inline-block px-4 py-2 cursor-pointer text-black border text-md hover:font-semibold"}>Blog</li>
              <li className={styles["nav-li"] +" inline-block px-4 py-2 cursor-pointer text-black border text-md hover:font-semibold"}>Content</li>
             </ul>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyNavbar;
