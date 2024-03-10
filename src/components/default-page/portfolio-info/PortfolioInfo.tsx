import React, { useEffect, useState } from 'react'
import style from './PortfolioInfo.module.scss'
import { ImageUrl } from '../../../constants/ImageUrls'

interface portfolioType {
  category: string,
  status: string,
  image: string,
  title: string,
  subtitle: string
  [key: string]: any
}

const PortfolioInfo = () => {
  const [filtertype, setFiltertype] = useState<string>('New')
  const filterArray = ['New', 'Advertising', 'Branding', 'Web']
  const [displayData, setDisplayData] = useState<portfolioType[]>([])
  const portfolioData: portfolioType[] = [
    {
      category: "web",
      status: "new",
      image: ImageUrl.web1,
      title: "Web Design",
      subtitle: "Crafting stunning and user-friendly websites for a modern digital experience.",
    },
    {
      category: "web",
      status: "new",
      image: ImageUrl.web2,
      title: "E-Commerce",
      subtitle: "Building online stores with seamless navigation and secure payment gateways.",
    },
    {
      category: "advertising",
      status: "new",
      image: ImageUrl.ad2,
      title: "Advertising Campaign",
      subtitle: "Strategizing and executing impactful advertising campaigns for brand visibility.",
    },
    {
      category: "web",
      status: "",
      image: ImageUrl.web4,
      title: "Responsive Design",
      subtitle: "Creating websites that adapt seamlessly to different devices for a consistent user experience.",
    },
    {
      category: "advertising",
      status: "",
      image: ImageUrl.ad1,
      title: "Social Media Ads",
      subtitle: "Engaging social media advertisements to connect with a wider audience.",
    },
    {
      category: "web",
      status: "new",
      image: ImageUrl.web3,
      title: "Interactive UI/UX",
      subtitle: "Designing intuitive and interactive user interfaces for enhanced user engagement.",
    },
    {
      category: "advertising",
      status: "new",
      image: ImageUrl.ad3,
      title: "Product Promotion",
      subtitle: "Promoting products effectively through targeted advertising strategies.",
    },
    {
      category: "advertising",
      status: "new",
      image: ImageUrl.ad4,
      title: "Brand Marketing",
      subtitle: "Strategic brand marketing to establish a strong market presence.",
    },
    {
      category: "branding",
      status: "new",
      image: ImageUrl.brand1,
      title: "Brand Identity",
      subtitle: "Crafting unique brand identities that resonate with the target audience.",
    },
    {
      category: "branding",
      status: "",
      image: ImageUrl.brand2,
      title: "Logo Design",
      subtitle: "Designing memorable logos that represent the essence of the brand.",
    },
    {
      category: "branding",
      status: "new",
      image: ImageUrl.brand3,
      title: "Print Media",
      subtitle: "Creating visually appealing print materials for effective offline marketing.",
    },
    {
      category: "branding",
      status: "",
      image: ImageUrl.brand4,
      title: "Packaging Design",
      subtitle: "Innovative packaging designs that capture attention on the shelves.",
    },
    {
      category: "branding",
      status: "",
      image: ImageUrl.brand5,
      title: "Brand Collateral",
      subtitle: "Developing consistent brand collateral for a unified brand image.",
    },
  ];
  

  useEffect(() => {
    let data: portfolioType[] = [];

    if (filtertype === 'New') {
      data = portfolioData
    } else if (filtertype === 'Advertising') {
      data = portfolioData.filter((item: any) => item.category === 'advertising');
    } else if (filtertype === 'Branding') {
      data = portfolioData.filter((item: any) => item.category === 'branding');
    } else if (filtertype === 'Web') {
      data = portfolioData.filter((item: any) => item.category === 'web');
    }

    setDisplayData(data);

  }, [filtertype])

  const filterData = (filter: any) => {
    setFiltertype(filter)
  }
  return (
    <>
      <div className={"w-full my-12 py-12 " + style.portfolioinfo} id='portfolio-section'>
        <div className="container w-full mx-auto h-full relative">
          <div className={"text-2xl font-medium pb-6 text-color"}> <span className="main-text-color">My</span> Portfolio </div>
          <div className={style.filtertab + " mx-auto w-fit flex items-center justify-center"}>
            {filterArray.map((filter, index) =>
              <div key={filter + index} className={`${filtertype === filter ? style.activefilter : style.filter} text-xs font-normal px-5 py-2 mx-4 mb-3 cursor-pointer`}
                onClick={() => filterData(filter)}
              >
                {filter}
              </div>)}
          </div>
          <div className={style.filtercontainer + " pt-4"}>
            <div className="grid grid-cols-3 gap-4">
              {displayData.map((data: portfolioType, index) =>
                <div className={style.portfoliocard + " zoom duration-500 w-full"} key={index}>
                  <img className={style.cardimg + ' image-fuild'} src={(data.image)} alt="portfolio-img" />
                  <div className={style.cardcontent + " absolute flex flex-col justify-center items-center"}>
                     <h2 className="text-xl font-bold text-white mb-3">{data.title}</h2>
                     <h6 className="text-sm text-white font-light w-5/6 text-center">{data?.subtitle}</h6>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>)
};

export default PortfolioInfo;