import Image from "next/image";
import card1 from "../../../public/image 30.png";
import card2 from "../../../public/image 33.png"
import card3 from "../../../public/image 32.png"

import rightArrow from "../../../public/Frame 8.png";
import leftArrow from "../../../public/Group 9.png"
import number from "../../../public/slide-numbers.png"


type details = {
    title:string,
    description:string,
    image:any
};

let blogDetails:details[]=[
    {
        title:"Simple Project No.1",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda voluptatum veniam ipsa eius, maxime reiciendis consectetur nihil voluptatibus minima, hic quas? Odio laboriosam illum optio praesentium cupiditate error quis. Modi, optio. Nam ab dolore dolor accusantium natus debitis, cupiditate culpa enim aperiam ratione sed, quaerat molestias totam inventore explicabo.",
        image: card1
    },
    {
        title:"Simple Project No.2",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda voluptatum veniam ipsa eius, maxime reiciendis consectetur nihil voluptatibus minima, hic quas? Odio laboriosam illum optio praesentium cupiditate error quis. Modi, optio. Nam ab dolore dolor accusantium natus debitis, cupiditate culpa enim aperiam ratione sed, quaerat molestias totam inventore explicabo.",
        image: card2
    },
    {
        title:"Simple Project No.3",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda voluptatum veniam ipsa eius, maxime reiciendis consectetur nihil voluptatibus minima, hic quas? Odio laboriosam illum optio praesentium cupiditate error quis. Modi, optio. Nam ab dolore dolor accusantium natus debitis, cupiditate culpa enim aperiam ratione sed, quaerat molestias totam inventore explicabo.",
        image: card3
    }
]


export default function Projects(){
    return(
        <main>
            <h1 className="text-gray-400 text-5xl max-sm:text-3xl pl-10">Our 
                <br />
                <b className="text-black">Projects</b>
            </h1>
<br />
            <div className="w-[1270px] h-[2px] bg-slate-100"></div>
            <br />
            
            <div className="max-sm:inline-block ">                
                {blogDetails.map((blogData)=>(
                    <div className="w-[1170px] h-[435px] bg-slate-200 flex justify-around m-5 max-sm:w-[350px] max-sm:h-[245px] max-sm:m-10 max-sm:inline ">
                    <Image src={blogData.image} alt="card1-image"></Image>
                    <div className="pl-6">
                        
                        <h1 className="text-gray-400 text-4xl pt-5 max-sm:text-xl ">{blogData.title}</h1>

                    <p className="pt-10 text-slate-400 max-sm:text-xs max-sm:p-0">{blogData.description}</p>
                   
                    <button className="bg-slate-50 mt-28 h-10 w-24 max-sm:mt-10 max-sm:h-3:">View More ➡</button>
                    
                    </div>
                
                                  </div>
                ))
                    
                }
                
            </div>


            <div className="flex justify-center">
            <Image src={number} alt="number" className="cursor-pointer"></Image>
            <Image src={leftArrow} alt="arrow" className="cursor-pointer"></Image>
            <Image src={rightArrow} alt="arrow" className="cursor-pointer"></Image>
            </div>
        </main>
    )
} 