/* eslint-disable no-useless-concat */
import React from "react";
import styles from "./ResumeInfo.module.scss";

const ResumeInfo = () => {
  return (
    <>
      <div className={"w-full my-8" + " " + styles["contact-info-container"]}>
        <div className="container w-full mx-auto h-full relative">
          <div className={styles.contenttitle+ " text-xl font-medium pb-6 text-color"}> <span className="main-text-color">My</span> Resume </div>
           <div className="grid grid-cols-3 gap-4">
              <div className={styles.resumecard+ " p-6 "}>
                 <h3 className={styles.sectiontitle+ " text-medium text-color text-md mb-4 pb-2"}>My Experience</h3>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default ResumeInfo;
