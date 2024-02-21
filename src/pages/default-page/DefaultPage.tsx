import React from "react";
import styles from "./DefaultPage.module.scss";
import ProfileInfo from "../../components/default-page/profile-intro/ProfileInfo";
import StickyNavbar from "../../components/default-page/navbar/StickyNavbar";
import ContactInfo from "../../components/default-page/contact-info/ContactInfo";

const DefaultPage = () => {
  return (
    <>
      <div className={styles["deafult-page-container"]}>
        <ProfileInfo />
        <StickyNavbar />
        <ContactInfo />
      </div>
    </>
  );
};

export default DefaultPage;
