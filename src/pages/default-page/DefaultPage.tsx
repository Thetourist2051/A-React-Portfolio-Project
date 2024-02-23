import React from "react";
import styles from "./DefaultPage.module.scss";
import ProfileInfo from "../../components/default-page/profile-intro/ProfileInfo";
import StickyNavbar from "../../components/default-page/navbar/StickyNavbar";
import ContactInfo from "../../components/default-page/contact-info/ContactInfo";
import ResumeInfo from "../../components/default-page/resume-info/ResumeInfo";

const DefaultPage = () => {
  return (
    <>
      <div className={styles["deafult-page-container"]}>
        <ProfileInfo />
        <StickyNavbar />
        <ContactInfo />
        <ResumeInfo />
      </div>
    </>
  );
};

export default DefaultPage;
