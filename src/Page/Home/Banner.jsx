import React from 'react'

const products = [
  {
      id: 17,
      title: "Camisa Preta",
      price: 999,
      description: "camisa preta com detalhes",
      images: [
        "https://i.imgur.com/9DqEOV5.jpeg",
        "https://i.imgur.com/ae0AEYn.jpeg",
        "https://i.imgur.com/mZ4rUjj.jpeg"
      ],
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-02T14:27:21.000Z",
      category: {
        id: 1,
        name: "nuevo",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        creationAt: "2024-01-01T15:23:18.000Z",
        updatedAt: "2024-01-02T09:35:04.000Z"
      }
    },
    {
      id: 20,
      title: "Generic Metal Fish",
      price: 623,
      description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      images: [
        "https://i.imgur.com/SolkFEB.jpeg",
        "https://i.imgur.com/KIGW49u.jpeg",
        "https://i.imgur.com/mWwek7p.jpeg"
      ],
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z",
      category: {
        id: 2,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-01-01T15:23:18.000Z",
        updatedAt: "2024-01-01T15:23:18.000Z"
      }
    },
    {
      id: 21,
      title: "Tasty Steel Salad",
      price: 598,
      description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      images: [
        "https://i.imgur.com/keVCVIa.jpeg",
        "https://i.imgur.com/afHY7v2.jpeg",
        "https://i.imgur.com/yAOihUe.jpeg"
      ],
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z",
      category: {
        id: 2,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-01-01T15:23:18.000Z",
        updatedAt: "2024-01-01T15:23:18.000Z"
      }
    },
    {
      id: 22,
      title: "Ergonomic Metal Table",
      price: 562,
      description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      images: [
        "https://i.imgur.com/w3Y8NwQ.jpeg",
        "https://i.imgur.com/WJFOGIC.jpeg",
        "https://i.imgur.com/dV4Nklf.jpeg"
      ],
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z",
      category: {
        id: 2,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-01-01T15:23:18.000Z",
        updatedAt: "2024-01-01T15:23:18.000Z"
      }
    },
    {
      id: 25,
      title: "Electronic Rubber Shoes",
      price: 510,
      description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      images: [
        "https://i.imgur.com/YaSqa06.jpeg",
        "https://i.imgur.com/isQAliJ.jpeg",
        "https://i.imgur.com/5B8UQfh.jpeg"
      ],
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z",
      category: {
        id: 2,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-01-01T15:23:18.000Z",
        updatedAt: "2024-01-01T15:23:18.000Z"
      }
    },
    {
      id: 26,
      title: "Intelligent Granite Bike",
      price: 559,
      description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: [
        "https://i.imgur.com/yb9UQKL.jpeg",
        "https://i.imgur.com/m2owtQG.jpeg",
        "https://i.imgur.com/bNiORct.jpeg"
      ],
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z",
      category: {
        id: 2,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-01-01T15:23:18.000Z",
        updatedAt: "2024-01-01T15:23:18.000Z"
      }
    }
]
const Banner = () => {
    const img = "http://ps.magentech.com/themes/sp_destino/modules/spbanner/images/banner02.jpg"
    const img2 = "http://ps.magentech.com/themes/sp_destino/modules/spbanner/images/banner01.jpg"

  return (
    <div className="max-w-[1170px] mx-auto mt-5">  
    <div className="flex">
      <div className="min-w-[30%] ">
    <img src="https://www.asus.com/campaign/Powered-by-ASUS-UK/images/9513Mobile_1080x1500_ROG--logo-removed.jpg"
    alt=""
    className="h-full"
    />     
      </div>
      <div>
        <div className="flex justify-between mx-8 mb-4">
          <h2 className="text-2xl font-bold font-mono">Product Feature</h2>
          <a href='/' className="px-6 py-1 -skew-y-[10deg] bg-blue-600 text-white cursor-pointer">View All</a>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2">
      {products && products.map((item, index)=> 
        <div key={index} className="">
            <img src={item.category.image} alt="" />
            <div className="px-1">
                {/* --------- Product Content ---------- */}
            <div className="">
                <p className="text-slate-400 mt-auto">{item.category.name}</p>
                {/* <p className="text-md font-semibold">{item.title}</p> */}
                <div className="flex justify-between">
                <p className="text-md font-bold text-wrap">{item.title}</p>
                <p>$ {item.price}</p>
                </div>
                <div className="flex justify-between mt-2">
              
                <div className="flex items-center justify-center">                   
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-400 mr-1">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                </svg>
                <span>4.5 (5)</span>
                </div>  
                <div className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 rounded w-10 h-7 text-white cursor-pointer">                   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            
                </div>   
                </div>

            </div>
                {/* --------------- Icons -----------  */}                
                <div className="mt-auto">
                 
            
                </div>
            </div>
        </div>
        )}
      </div>
      </div>
     
    
    </div>    
      
        </div>
  )
}

export default Banner