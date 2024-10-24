

import Image from "next/image";


import about1 from "../../public/about1.png"
import about3 from "../../public/about3.png"
import about2 from "../../public/about2.png"


import project1 from "../../public/blackBG.png"
import project2 from "../../public/project1.png"
import project3 from "../../public/project2.png"
import project4 from "../../public/project3.png"
import project5 from "../../public/project4.png"

import contactImage from "../../public/contact.png"

import one from "../../public/1.png"
import two from "../../public/2.png"

import mainPicture from "../../public/Rectangle 6.png"
export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between max-sm:inline">

        <div className="text-center p-20 pt-64  max-sm:text-left max-sm:p-10 max-sm:pt-28">
      <h1 className="w-[227px] h-[64px] text-5xl  text-gray-400 pr-9 max-sm:text-2xl ">PROJECT</h1>
      <h2 className="text-start font-bold text-4xl max-sm:text-xl">Lorem</h2>
      </div>

      <div className="relative ">
      <Image className="w-[870px] h-[800px] pr-40 max-sm:w-[280px] max-sm:h-[300px] max-sm:pr-2" src={mainPicture} alt="bluiding-image"></Image>
     
      <button className="bg-white absolute bottom-0 h-[71px] w-[201.81px] max-sm:h-[15px] max-sm:w-[65px] max-sm:inline-block ">View Projects ➡</button>
      </div>

      </div>
<br />
<br />
<br />

        {/* About Card Section */}
        <div className="  bg-slate-100 w-[1200px] h-[465px] flex justify-center ml-60 mb-3 max-sm:inline max-sm:ml-10 max-sm:mb-2 ">
          <div className="p-5">
            <Image src={about1} alt="about1"></Image>
            <br />
            <Image src={about3} alt="about3"></Image>
          </div>
          
          <div className="w-[270px] h-[345px] m-10 max-sm:m-5 max-sm:h-[50px]">
            <Image src={about2} alt="about2" className="max-sm:h-[100px] w-[150px]"></Image>
          </div>
          <div className="pt-20 max-sm:pt-20">
            <h1 className="text-gray-300 text-4xl  max-sm:text-xl ">About</h1>
            <p className="text-slate-300 max-sm:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />Ratione corporis sit deserunt velit, cupiditate
              <br /> unde voluptate tempora quod ullam consectetur repellat beatae 
              <br />architecto! Enim, unde repellendus 
              <br />laboriosam minima itaque recusandae!</p>
              <br />
              <br />
              <button className="bg-white h-11 w-28"> View More ➡</button>
          </div>
        </div>
<br />
        {/* Main Card Section */} 
         <div className="mt-10 max-sm:mt-10">
        <h1 className="text-gray-300 text-center text-4xl max-sm:text-2xl">Main Focus/Mission Statement</h1>
        <div className="flex justify-center max-sm:inline">
        <div className="flex justify-center  gap-24 w-[1200px] h-[269px] max-sm:inline">
          <div className="flex justify-center">
            <div >
            <h1 className="text-gray-300 text-9xl max-sm:text-[150px]">1</h1>
            </div>

            <p className="pt-7 max-sm:pt-3 max-sm:text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />
              Doloribus reprehenderit voluptatibus tempore 
              <br />minima dolore! Saepe nisi quo laudantium voluptas in.</p>
          </div>
          

          <div className="flex justify-center">
            <div >
            <h1 className="text-gray-300 text-9xl max-sm:text-[150px]">2</h1>
            </div>

            <p className="pt-7 max-sm:pt-3 max-sm:text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />
              Doloribus reprehenderit voluptatibus tempore 
              <br />minima dolore! Saepe nisi quo laudantium voluptas in.</p>
          </div>
        </div>
        </div>
        </div>





        {/* Our Project Section */}

        <div className="mt-10 mb-5">
        <h1 className="text-gray-300 text-5xl text-center font-serif m-5">Our Projects</h1>
        <div className="flex justify-center max-sm:inline ">

          {/* image Write */}
          <div className="relative">
            <Image src={project1} alt="bg-black" className="m-10" ></Image>
            <h3 className="absolute bottom-24 text-7xl text-white pl-20 mt-10 max-sm:text-xl max-sm:bottom-11 max-sm:hidden">Simple <br /> Projects</h3>
          </div>
          <Image src={project2} alt="image" height={100} width={507} className="max-sm:m-10"></Image>
        </div>

        <div className="flex justify-center m-5 max-sm:inline max-sm:m-3">
          <Image src={project3} alt="" className="m-5"></Image>
          <Image src={project4} alt="" className="m-5"></Image>
          <Image src={project5} alt="" className="m-5"></Image>
        </div>
        </div>




        {/* Contact From Section */}
      <div className="mb-20 ">
        <div className="flex justify-center ">
        <div className="h-[603px] w-[1170px] flex justify-between p-10 max-sm:inline">
          <form action="" className="text-center">
            <h3 className=" text-6xl text-gray-300 max-sm:text-3xl max-sm:text-center">Contact</h3>
            <input type="text" placeholder="Name" className="h-12 w-[391px] m-2 bg-gray-100 p-5 max-sm:h-6 max-sm:w-[200px] max-sm:ml-20"></input>
            <input type="tel" placeholder="Phone Number ⭐" className="h-12 w-[391px] m-2 bg-gray-100 p-5 max-sm:h-6 max-sm:w-[200px] max-sm:ml-20"></input>
            <input type="email" placeholder="Email ⭐" className="h-12 w-[391px] m-2 bg-gray-100 p-5 max-sm:h-6 max-sm:w-[200px] max-sm:ml-20"></input>
            <input type="text" placeholder="Interseted in" className="h-12 w-[391px] m-2 bg-gray-100 p-5 max-sm:h-6 max-sm:w-[200px] max-sm:ml-20"></input>
            <textarea name="message" id="message" rows={7} className="h-12 w-[391px] m-2 bg-gray-100 p-5 resize-none max-sm:h-6 max-sm:w-[200px] max-sm:ml-20" placeholder="Any Question?"></textarea>
            <button className="bg-zinc-900 h-14 w-36 m-2 ml-24 rounded border-2 hover:border-yellow-500 text-white">Send Email ➡</button>
            </form>
          <Image src={contactImage} alt="" width={700} height={30}></Image>
        </div>
       </div>
      </div>
      
    </main>
  );
}
