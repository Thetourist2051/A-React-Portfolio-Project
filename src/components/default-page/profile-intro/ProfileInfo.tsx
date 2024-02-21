/* eslint-disable no-useless-concat */
import React from 'react'
import styles from './ProfileInfo.module.scss'

const ProfileInfo = () => {
  return (
    <>
      <div className={"h-80vh w-full" + " " + styles["profile-container"]}>
         <div className="container mx-auto h-full flex items-center">
           <div className={styles["header-content"]+ " "+ "ps-4"}>
            <h6 className='text-xl'>Hello, I am</h6>
            <h3 className='text-5xl font-extrabold my-4'>Afriduzzaman</h3>
            <h5 className='text-2xl'>Frontend Developer, Web Designer</h5>
           </div>
         </div>
      </div>
    </>
  )
}

export default ProfileInfo
