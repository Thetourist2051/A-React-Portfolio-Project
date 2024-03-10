import React from "react";
import styles from "./DefaultPage.module.scss";
import ProfileInfo from "../../components/default-page/profile-intro/ProfileInfo";
import StickyNavbar from "../../components/default-page/navbar/StickyNavbar";
import ContactInfo from "../../components/default-page/contact-info/ContactInfo";
import ResumeInfo from "../../components/default-page/resume-info/ResumeInfo";
import ClientStastics from "../../components/default-page/client-statistics/ClientStastics";
import MyService from "../../components/default-page/my-service/MyService";
import PricingInfo from "../../components/default-page/pricing-info/PricingInfo";
import HireMe from "../../components/default-page/hire-me/HireMe";
import PortfolioInfo from "../../components/default-page/portfolio-info/PortfolioInfo";
import BlogInfo from "../../components/default-page/blog-info/BlogInfo";

const DefaultPage = () => {
  return (
    <>
      <div className={styles["deafult-page-container"]}>
        <ProfileInfo />
        <StickyNavbar />
        <ContactInfo />
        <ResumeInfo />
        <ClientStastics />
        <MyService />
        <PricingInfo />
        <HireMe />
        <PortfolioInfo />
        <BlogInfo />
      </div>
    </>
  );
};

export default DefaultPage;
