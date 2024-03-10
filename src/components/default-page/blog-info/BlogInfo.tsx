import React from 'react'
import style from './BlogInfo.module.scss'
import { ImageUrl } from '../../../constants/ImageUrls'

type blogType = {
    blogTitle: string,
    id: string,
    uploadedBy: string,
    likes: number,
    comments: number,
    description: string,
    blogimg: string,
    [key: string]: any,
}
const BlogInfo = () => {
    const blogData: blogType[] = [
        {
          id: 'id1',
          blogTitle: 'Discovering the Wonders of Nature',
          uploadedBy: 'Explorer123',
          likes: 18,
          comments: 42,
          description: 'Embark on a journey to explore the beauty of nature, from serene landscapes to fascinating wildlife. Join us in appreciating the wonders that surround us.',
          blogimg: ImageUrl.blog1
        },
        {
          id: 'id2',
          blogTitle: 'Unraveling the Mysteries of the Cosmos',
          uploadedBy: 'Stargazer99',
          likes: 25,
          comments: 36,
          description: 'Delve into the mysteries of the cosmos as we navigate through the vastness of space. Learn about celestial bodies, cosmic phenomena, and the secrets of the universe.',
          blogimg: ImageUrl.blog2
        },
        {
          id: 'id3',
          blogTitle: 'Culinary Adventures Around the World',
          uploadedBy: 'FoodExplorer',
          likes: 30,
          comments: 50,
          description: 'Embark on a culinary journey around the globe, exploring diverse cuisines, traditional recipes, and the stories behind each dish. Get ready for a feast for your taste buds!',
          blogimg: ImageUrl.blog3
        },
      ];
      
      
    return (
        <>
            <div className={"w-full my-12 py-8 " + style.bloginfo} id='blog-section'>
                <div className="container w-full mx-auto h-full relative">
                    <h2 className={"text-2xl font-medium pb-6 text-color"}> <span className="main-text-color">Latest </span> Blog </h2>
                    {
                        blogData.map((blog: blogType, index: number) =>
                            <div key={blog.id} className={style.blogcard + " p-0 relative flex my-4"}>
                                <div className={style.blogimg}>
                                    <img src={blog.blogimg} alt="" />
                                </div>
                                <div className={style.blogdetails+ " text-left px-6 py-4"}>
                                    <h4 className="text-lg text-color font-normal mb-3">{blog.blogTitle}</h4>
                                    <div className="flex my-2">
                                      <p className="p-text-color text-xs font-light my-2">By : <span className='font-medium'>{blog.uploadedBy}</span></p>
                                      <p className="p-text-color px-3"><i className="fa-regular fa-thumbs-up"></i> : <span className='font-medium text-xs'>{blog.likes}</span></p>
                                      <p className="p-text-color"><i className="fa-regular fa-comments"></i> : <span className='font-medium text-xs'>{blog.comments}</span></p>
                                    </div>
                                    <p className="p-text-color text-xs font-light my-2">{blog.description}</p>
                                    <p className="text-color text-xs font-normal my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, doloremque!</p>
                                    <p className="p-text-color text-xs font-light my-2">{blog.description}</p>

                                    <div className="flex mt-4 justify-start items-center main-text-color cursor-pointer">
                                        <p className='text-sm font-light pr-2'>Read More </p>
                                        <i className="fa-solid fa-angles-right"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default BlogInfo
