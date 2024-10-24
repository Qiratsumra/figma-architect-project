import Image from "next/image"
import image1 from "../../../public/gallery1.png"
import image2 from "../../../public/gallery2.png"
import image3 from "../../../public/gallery3.png"
import image4 from "../../../public/gallery4.png"
import image5 from "../../../public/gallery5.png"
import image6 from "../../../public/gallery6.png"
import image7 from "../../../public/gallery7.png"
import image8 from "../../../public/gallery8.png"
import image9 from "../../../public/gallery9.png"
import image10 from "../../../public/gallery10.png"








export default function Gallery(){
    return(
        <main>
             <h1 className="text-gray-400 pl-72 text-5xl max-sm:text-3xl max-sm:pl-20 ">Photo 
                <br />
                <b className="text-black">Gallery</b>
            </h1>
            <div className="flex justify-center gap-4 p-4 max-sm:h-[150px] max-sm:w-[160px] max-sm:flex-none max-sm:justify-start max-sm:p-9 max-sm:pl-10 max-sm:inline">
                <Image src={image1} alt="image1" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
                <Image src={image2} alt="image2" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
                <Image src={image3} alt="image3" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
                <Image src={image4} alt="image4" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
                <Image src={image5} alt="image5" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
            </div>

            <div className="flex justify-center gap-4 p-4 max-sm:h-[150px] max-sm:w-[160px] max-sm:flex-none max-sm:justify-start max-sm:p-9 max-sm:pl-10 max-sm:inline max-sm:">
                <Image src={image6} alt="image6" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
                <Image src={image7} alt="image7" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
                <Image src={image8} alt="image8" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
                <Image src={image9} alt="image9" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
                <Image src={image10} alt="image10" className="cursor-pointer max-sm:m-10 max-sm:ml-20"></Image>
            </div>
        </main>
    )
}