import React from "react";
import { ImageUrl } from "../../constants/ImageUrls";
import styles from "./UserCard.module.scss";

const UserCard = () => {
  return (
    <>
      <div className={ styles.usercard+ " card rounded-md border border-solid p-3"}>
        <div className="flex items-center">
          <div className={ "media w-12 h-12 rounded-full flex content-center items-center"}>
            <img
              src={ImageUrl.userImg}
              alt=""
              className="max-w-full max-h-full overflow-hidden"
            />
          </div>
          <div className={styles.mediaDetails + ' pl-3 pr-2'}>
            <h5>Afriduzzaman</h5>
            <p>afridi@gmail.com</p>
          </div>
          <div className="action flex items-center justify-center w-8 h-8 border rounded-full border-cyan-500 cursor-pointer duration-500 text-black hover:bg-slate-600 text-white">
            <div className="pi pi-trash"></div>
          </div>
        </div>
        <div className="item my-2">
          <h6 className="font-medium text-xs">College Name:</h6>
          <p className="m-0 font-normal">Jadavpur</p>
        </div>
        <div className="item my-2">
          <h6 className="font-medium text-xs">Address</h6>
          <p className="m-0 font-normal">Jadavpur</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
