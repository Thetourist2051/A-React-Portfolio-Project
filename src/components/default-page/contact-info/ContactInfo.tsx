import React from "react";
import styles from "./ContactInfo.module.scss";

const ContactInfo = () => {
  return (
    <>
      <div className={"w-full " + " " + styles["contact-info-container"]}>
        <div className="container w-full mx-auto h-full flex items-center justify-between py-4 px-2 relative">
            <div className="grid grid-cols-3 gap-4 w-full">
                <div className={styles["contact-card"]+" px-6 py-6"}>
                    <h3 className={styles["contact-card-title"] +" text-base text-black pb-2 mb-6 font-semibold"}>Who Am I?</h3>
                   
                </div>
                <div className={styles["contact-card"]+" px-6 py-6"}>
                    <h3 className={styles["contact-card-title"] +" text-base text-black pb-2 mb-6 font-semibold"}>Contact Info</h3>
                   
                </div>
                <div className={styles["contact-card"]+" px-6 py-6"}>
                    <h3 className={styles["contact-card-title"] +" text-base text-black pb-2 mb-6 font-semibold"}>Contact Info</h3>
                   
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
