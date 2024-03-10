import React from 'react'
import style from './MyService.module.scss'

interface serviceType {
    title: string,
    description: string,
    icon: string,
    [key: string]: any;
}
const MyService = () => {
    const servicesData: serviceType[] = [
        {
            title: "Web Development",
            icon:'<i class="fa-solid fa-code"></i>' ,
            description: "Expertise in HTML5 for structuring web content and creating responsive layouts.",
        },
        {
            title: "CSS Styling",
            icon: '<i class="fa-brands fa-css3-alt"></i>',
            description: "Proficient in CSS3 for designing and styling web pages with a focus on modern and elegant UI.",
        },
        {
            title: "JavaScript Development",
            icon: '<i class="fa-brands fa-square-js"></i>',
            description: "Strong command of JavaScript for building dynamic and interactive web applications with a keen eye for user experience.",
        },
        {
            title: "React Development",
            icon: '<i class="fa-brands fa-react"></i>',
            description: "Skilled in building responsive and scalable applications with React, utilizing components and state management effectively.",
        },
        {
            title: "Angular Development",
            icon: '<i class="fa-brands fa-angular"></i>',
            description: "Experience in developing robust web applications using Angular, including services, directives, and dependency injection.",
        },
        {
            title: "Ionic Framework",
            icon: '<i class="fa-solid fa-mobile-screen-button"></i>',
            description: "Proficient in creating cross-platform mobile apps with the Ionic framework, providing a seamless user experience across devices.",
        },
        {
            title: "React Native Development",
            icon: '<i class="fa-solid fa-mobile-screen-button"></i>',
            description: "Expertise in building mobile applications using React Native, delivering native-like performance and functionality.",
        },
    ];

    return (
        <>
            <div className={"w-full my-8 py-8 " + style["my-service-content"]} id='service-section' >
                <div className="container mx-auto">
                    <div className={"text-2xl font-medium pb-6 text-color mb-8"}> <span className="main-text-color">My</span> Services </div>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-10">
                        {servicesData.map((service: serviceType, index: number) =>
                            <div className={style["service-card"] + " p-8 relative"} key={index}>
                                <div className={style["service-icon"] + " h-14 w-16 absolute bg-white perfect-center text-4xl main-text-color"} dangerouslySetInnerHTML={{ __html: service.icon }}>
                                </div>
                                <h5 className='text-lg font-medium mb-4 text-color'>{service.title}</h5>
                                <p className="p-text-color text-sm font-normal">{service.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyService
