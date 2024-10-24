import Link from "next/link";
import Image from "next/image"; 
import map from "../../../public/map.png";

export default function Contact(){
    return(
        <main className="pb-7 flex justify-between max-sm:flex max-sm:justify-between">
            <div>
            <h1 className="text-gray-400 text-5xl text-center max-sm:text-3xl pl-10">Contact 
                <br />
                <b className="text-black">Information</b>
            </h1>

            <br />
            <br />
            <p className="text-center">
                <h3><b>Company Name</b></h3>
                1234Simple Street Textila 357U8
            </p>

            
            <br />
            <br />
            
            <p className="text-center"><b>12748274873</b></p>

            <br />
            <br />
            
            <p className="text-center"><b>architects@gmail.com</b></p>

            <br />

            <button className="bg-black h-14 w-32 text-white ml-20 rounded"> <Link href={"/contact"}>Contact</Link></button>
            </div>

            
                <Image src={map} alt="map" className="max-sm:h-[300px] w-[500px]"></Image>
            
        </main>
    )
}