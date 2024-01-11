
import { FaLaptop } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";

import { FiMonitor } from "react-icons/fi";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { FiWatch } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { FiPrinter } from "react-icons/fi";
import { PiSpeakerHifiBold } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5"


export const ItemsCategory = [
    {
        name: "Laptop",
        icon: FaLaptop,
    },
    {
        name: "Mobile",
        icon: CiMobile3,
    },
    {
        name: "TC & LG",
        icon: FiMonitor,
    },
    {
        name: "Headphone",
        icon: MdOutlineHeadphones,
    },
    {
        name: "Camera",
        icon: IoCameraOutline,
    },
    {
        name: "Watch",
        icon: FiWatch,
    },
    {
        name: "Microphone",
        icon: HiOutlineMicrophone,
    },
    
    {
        name: "Printer",
        icon: FiPrinter,
    },
    {
        name: "Speaker",
        icon: PiSpeakerHifiBold,
    },    
    {
        name: "Xbox",
        icon: IoGameControllerOutline,
    },
]


export const products = [
  {
    id: "17",
    title: "Camisa Preta",
    brand: "FashionX",
    company: "StyleHub",
    color: "Black",
    properties: {
      material: "Cotton",
      size: "M",
      style: "Casual"
    },
    price: 999,
    description: "Camisa preta com detalhes",
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
      image: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival1.png.webp",
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-02T09:35:04.000Z"
    }
  },
  {
    id: "20",
    title: "Generic Metal Fish",
    brand: "Dev Byte",
    company: "TechGadget",
    color: "Silver",
    properties: {
      keyboardType: "Gaming",
      backlight: "7-Color RGB LED"
    },
    price: 623,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7-Color RGB LED Back-lighting for smart functionality",
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
      image: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival2.png.webp",
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z"
    }
  },
  {
    id: "21",
    title: "Tasty Steel Salad",
    brand: "FoodCraft",
    company: "HealthyBites",
    color: "Green",
    properties: {
      ingredients: ["Lettuce", "Tomato", "Cucumber", "Feta Cheese"],
      calories: 200,
      servingSize: "Regular"
    },
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
      image: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival3.png.webp",
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z"
    }
  },
  {
    id: "22",
    title: "Ergonomic Metal Table",
    brand: "OfficeStyle",
    company: "FurnitureCo",
    color: "Gray",
    properties: {
      material: "Metal",
      size: "Large",
      features: ["Adjustable Height", "Durable Design"]
    },
    price: 562,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7-Color RGB LED Back-lighting for smart functionality",
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
      image: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival4.png.webp",
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z"
    }
  },
  {
    id: "25",
    title: "Electronic Rubber Shoes",
    brand: "TechFeet",
    company: "FootwearTech",
    color: "Blue",
    properties: {
      size: "9",
      gender: "Unisex",
      features: ["Shock Absorption", "Waterproof"]
    },
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
      image: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival5.png.webp",
      creationAt: "2024-01-01T15:23:18.000Z",
      updatedAt: "2024-01-01T15:23:18.000Z"
    }
  }
]
