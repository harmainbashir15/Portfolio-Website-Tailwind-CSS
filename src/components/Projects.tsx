import React from 'react'
import Heading from "@/components/Heading";
import Card from './Card';

const  data = [
    {
        id: 0,
        title: "E-Commerce Website",
        desc: "The Cake Palette: Your go-to for delectable cakes and treats, delivered fresh to your door.",
        img: "/project2.png",
        tags: ["Next.JS" , "Node", "Tailwind CSS"],
    },

    {
        id: 1,
        title: "Static Interactive Resume",
        desc: "A modern, interactive resume that showcases your skills and experience.",
        img: "/project1.png",
        tags: ["TypeScript" ,"Node" , "CSS" , "HTML"],
    },


    {
        id: 2,
        title: "Currency Converter Project",
        desc: "A simple HTML and TypeScript powered tool for converting currencies to real-time rates. ",
        img: "/project3.png",
        tags: ["HTML" ,"Node" , "CSS" , "TypeScript"],
    },
    
    {
        id: 3,
        title: "Weather Widget",
        desc: "A Next.JS and TypeScript based tool for fetching and displaying real-time weather data. ",
        img: "/project5.png",
        tags: ["Next.JS" ,"Node" , "CSS" , "TypeScript"],
    },

    {
        id: 4,
        title: "Todo List",
        desc: "A React and TypeScript based app for managing and organizing you tasks efficiently. ",
        img: "/project6.png",
        tags: ["React" ,"Node" , "CSS" , "TypeScript"],
    },


    {
        id: 5,
        title: "Countdown Timer",
        desc: "A Next.JS and TypeScript powered website to track time with an interactive countdown features. ",
        img: "/project4.png",
        tags: ["Next.JS" ,"Node" , "CSS" , "TypeScript"],
    },

   

   
]

const Projects = () => {
  return (
    <div id='projects' className='container-pt-32'>
        <Heading  title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=> (<Card  
            key ={el.id}
            title ={el.title}
            desc = {el.desc}
            img ={el.img}
            tags ={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
