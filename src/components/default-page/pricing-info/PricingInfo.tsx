import React from 'react'
import style from './PricingInfo.module.scss'

const PricingInfo = () => {

    const pricingPacks = [
        {
            title: "Free",
            price: "0",
            perMonth: "/mo",
            features: [
                "5 ",
                "1GB",
                "No",
                "1"
            ],
            buttonLabel: "Subscribe"
        },
        {
            title: "Basic",
            price: "10",
            perMonth: "/mo",
            features: [
                "50 ",
                "10GB",
                "1",
                "5"
            ],
            buttonLabel: "Subscribe"
        },
        {
            title: "Exclusive",
            price: "25",
            perMonth: "/mo",
            features: [
                '150 ',
                '15GB',
                '5',
                '15'
            ],
            buttonLabel: 'Subscribe'
        },
        { title: 'Pro', price: '99', perMonth: '/mo', features: ['500 ', '1000GB', '10', 'Unlimited'], buttonLabel: 'Subscribe' }
    ]

    const destrutureFeatures = ({ features }: any) => {
        const [no_projects, storage_gb, no_domains, no_users] = features
        return { no_projects, storage_gb, no_domains, no_users }
    }

    const destructuredArray = pricingPacks.map((pack) => {
        const { features, ...rest } = pack;
        return {
            ...rest,
            ...destrutureFeatures(pack),
        };
    })


    return (
        <>
            <div className={"w-full my-8 py-8 " + style.pricingsec} id='pricing-section'>
                <div className="container w-full mx-auto h-full relative">
                    <div className={"text-2xl font-medium pb-6 text-color mb-4"}> <span className="main-text-color">Pricing</span> Packs </div>
                    <div className="grid grid-cols-4 gap-x-6 gap-y-4">
                        {destructuredArray.map((pricing: any, index: number) =>
                            <div key={index+pricing.title} className={style.pricecard + " p-6 relative text-center overflow-hidden "}>
                                {pricing?.title === 'Exclusive' &&
                                    <div className={style.cardchip + " h-8 main-bg text-white text-sm font-medium absolute perfect-center"}>New</div>
                                }
                                <h4 className="text-lg text-color font-medium mb-4">{pricing?.title}</h4>
                                <sup className={style.topsup + " p-text-color"}>$</sup>
                                <h1 className="inline-block text-3xl font-extrabold text-color px-1">{pricing.price}</h1>
                                <sub className='p-text-color'>/Month</sub>
                                <h6 className="text-color text-xs font-medium mt-6 mb-2"> {pricing.no_projects} <span className='pl-2 pr-0 font-normal p-text-color'>Projects</span> </h6>
                                <h6 className="text-color text-xs font-medium my-3"> {pricing.storage_gb} <span className='pl-2 pr-0 font-normal p-text-color'>Storage</span> </h6>
                                <h6 className="text-color text-xs font-medium my-3"> {pricing.no_domains} <span className='pl-2 pr-0 font-normal p-text-color'>Domains</span> </h6>
                                <h6 className="text-color text-xs font-medium my-3"> {pricing.no_users} <span className='pl-2 pr-0 font-normal p-text-color'>Users</span> </h6>
                                <button className={style.subscribebtn + " btn rounded-full main-bg-75 text-white text-sm cursor-pointer duration-500 font-normal leading-none px-8 py-3 mt-8 mb-4 hover:main-bg"}>{pricing.buttonLabel}</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingInfo
