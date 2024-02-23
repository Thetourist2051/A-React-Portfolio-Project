/* eslint-disable no-useless-concat */
import React from "react";
import styles from "./ContactInfo.module.scss";
import { ImageUrl } from "../../../constants/ImageUrls";

const ContactInfo = () => {
  return (
    <>
      <div className={"w-full mb-8" + " " + styles["contact-info-container"]}>
        <div className="container w-full mx-auto h-full flex items-center justify-between py-4 relative">
            <div className="grid grid-cols-3 gap-0 w-full border-collapse">
                <div className={styles["contact-card"]+" p-8 border-r-0"}>
                    <h3 className={styles["contact-card-title"] +" text-base text-black pb-2 mb-6 font-semibold"}>Who Am I?</h3>
                    <h2 className={styles["contact-card-subtitle"]+ " text-md font-base mt-6 "}>I am Web Developer/UI Developer expert in frontend Developement</h2>
                    <p className={styles["contact-card-text"]+ " text-xs py-4 font-light text-color"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur veniam deserunt quos corporis suscipit dolorem, eum nihil autem enim! </p>
                    <div className="button mt-2 border border-rose-500 rounded-md text-rose-700 bg-white px-4 py-2 text-xs cursor-pointer duration-500 w-fit hover:text-white hover:bg-rose-700">DownLoad My CV</div>
                   
                </div>
                <div className={styles["contact-card"]+" p-8 border-r-0"}>
                    <h3 className={styles["contact-card-title"] +" text-base text-black pb-2 mb-6 font-semibold"}>Personal Info</h3>
                    <h6 className="text-xs text-color font-medium mt-6 mb-3"> BirtDate : <span className="font-normal p-text-color">15-02-1999</span></h6>
                    <h6 className="text-xs text-color font-medium my-3"> Email : <span className="font-normal p-text-color">thetourist2051@gmail.com</span></h6>
                    <h6 className="text-xs text-color font-medium my-3"> Contact Number : <span className="font-normal p-text-color">+91 6290281829</span></h6>
                    <h6 className="text-xs text-color font-medium my-3"> Address : <span className="font-normal p-text-color">New Town, Kolkata, 700135, WB, India</span></h6>
                   
                </div>
                <div className={styles["contact-card"]+" p-8"}>
                    <h3 className={styles["contact-card-title"] +" text-base text-black pb-2 mb-6 font-semibold"}>My Expertise</h3>
                    <div className={styles["expert-card"]+ " flex items-center justify-start pb-4"}>
                      <div className="icon w-10">
                        <img src={ImageUrl.webdesign} alt="" />
                      </div>
                      <div className={styles["details"]+ " details ps-3"}>
                        <h6 className="text-color text-medium text-sm mb-2 leading-none">Ui Design</h6>
                        <p className="p-text-color text-xs font-normal">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className={styles["expert-card"]+ " flex items-center justify-start py-4"}>
                      <div className="icon w-10">
                        <img src={ImageUrl.frontenddevelopment} alt="" />
                      </div>
                      <div className={styles["details"]+ " details ps-3"}>
                        <h6 className="text-color text-medium text-sm mb-2 leading-none">Web Development</h6>
                        <p className="p-text-color text-xs font-normal">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className={styles["expert-card"]+ " flex items-center justify-start py-4 border-b-0"}>
                      <div className="icon w-10">
                        <img src={ImageUrl.mobiledevelopment} alt="" />
                      </div>
                      <div className={styles["details"]+ " details ps-3"}>
                        <h6 className="text-color text-medium text-sm mb-2 leading-none">Mobile Development</h6>
                        <p className="p-text-color text-xs font-normal">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                   
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
