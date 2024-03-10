import React from 'react'
import style from './HireMe.module.scss'

const HireMe = () => {
    return (
        <>
            <div className={"w-full my-12 py-16 " + style["hiremesec"]}>
                <div className="container w-full mx-auto h-full relative">
                    <div className="grid grid-cols-1">
                        <h2 className='text-3xl mb-6 leading-none text-white text-center'>I Am Available For FreeLance</h2>
                        <button className={style.hiremebtn + " w-fit mx-auto btn rounded-md main-bg-75 text-color text-sm cursor-pointer duration-500 font-normal leading-none px-8 py-3 mt-4 hover:text-white"}>Hire Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HireMe
