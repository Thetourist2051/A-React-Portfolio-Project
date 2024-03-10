import React from "react";
import styles from "./ClientStastics.module.scss";

const ClientStastics = () => {
    return (
        <>
            <div className={"w-full my-12 py-16 " + styles["clientsec"]}>
                <div className="container w-full mx-auto h-full relative">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-x-4 lg:gap-y-0 md:gap-4 duration-500">
                        <div className={styles["client-box"]}>
                            <div className={styles["client-img"] + " w-20 h-20 perfect-center"}>
                                <span className="material-symbols-rounded text-white font-light text-7xl">alarm</span>
                            </div>
                            <div className={styles["client-details"] + " w-full pl-4 ms-4"}>
                                <h2 className="text-3xl font-bold main-text-color my-2">500</h2>
                                <p className="p-text-color2 font-light text-sm">Hours Spent</p>
                            </div>
                        </div>
                        <div className={styles["client-box"]}>
                            <div className={styles["client-img"] + " w-20 h-20 perfect-center"}>
                                <span className="material-symbols-rounded text-white font-light text-7xl">checklist</span>
                            </div>
                            <div className={styles["client-details"] + " w-full pl-4 ms-4"}>
                                <h2 className="text-3xl font-bold main-text-color my-2">11+</h2>
                                <p className="p-text-color2 font-light text-sm">Project Finished</p>
                            </div>
                        </div>
                        <div className={styles["client-box"]}>
                            <div className={styles["client-img"] + " w-20 h-20 perfect-center"}>
                                <span className="material-symbols-rounded text-white font-light text-7xl">sentiment_very_satisfied</span>
                            </div>
                            <div className={styles["client-details"] + " w-full pl-4 ms-4"}>
                                <h2 className="text-3xl font-bold main-text-color my-2">151+</h2>
                                <p className="p-text-color2 font-light text-sm">Happy Clinets</p>
                            </div>
                        </div>
                        <div className={styles["client-box"]}>
                            <div className={styles["client-img"] + " w-20 h-20 perfect-center"}>
                                <span className="material-symbols-rounded text-white font-light text-7xl">emoji_food_beverage</span>
                            </div>
                            <div className={styles["client-details"] + " w-full pl-4 ms-4"}>
                                <h2 className="text-3xl font-bold main-text-color my-2">121+</h2>
                                <p className="p-text-color2 font-light text-sm">Coffee Drinked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientStastics;
