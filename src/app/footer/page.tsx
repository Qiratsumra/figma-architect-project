

import Image from "next/image"
import Link from "next/link"

import pininterst from "../../../public/pininterest.png"
import linkedin  from "../../../public/linkedin.png"
import twitter from "../../../public/twitter.png"
import fb from "../../../public/fb.png"
import address from "../../../public/address-icon.jpg"
import logo from "../../../public/Group 11 1.png"
import phone from "../../../public/phonne.jpg"
import Email from "../../../public/email-icon.png"

export default function Footer(){
    return(
        <footer className="bg-black text-white p-10 max-sm:w-fit max-sm:p-4">
            <div className="flex justify-between">
            <div className="p-2 ">
                <Image src={logo}  alt="logo" className="h-[94px] w-[145px] max-sm:h-[45px] max-sm:w-[100px]"></Image>
</div> 
           


            <div className="h-[229px] w-[605px] flex justify-between max-sm:flex max-sm:justify-evenly max-sm:h-[100px] max-sm:w-[300px]">
                <div>
                    <h1 className="pt-7 pb-7 max-sm:pt-3 max-sm:pb-3 max-sm:text-xs">Information</h1>
                    <ul className="text-xs max-sm:text-[8px]">
                        <li className="pb-3 max-sm:pb-2">Main</li>
                        <Link href={"/gallery"}><li className="pb-3 max-sm:pb-2">Gallery</li></Link>
                        <Link href={"/Project"}><li  className="pb-3 max-sm:pb-2">Projects</li></Link>
                        <Link href={"/certification"}><li className="pb-3 max-sm:pb-2">Certifications</li></Link>
                        <Link href={"/contact"}><li className="pb-3 max-sm:pb-2">Contacts</li></Link>
                    </ul>
                </div>

                <div>
                <Link href={"/contact"}> <h1 className="pt-7 pb-7 max-sm:pt-3 max-sm:pb-3">Contacts</h1> </Link>
                <ul className="text-xs">
                    <li>
                        <div className="flex justify-between">
                            <Image src={address} alt="address" height={20} width={20} className="max-sm:h-[10px] max-sm:10px"></Image>
                            <p className="max-sm:text-xs">1234Simple Street 
                        <br /> 
                        Textila 357U8
                       </p>
                        </div>
                    </li>
                    <li className="">
                        <div className=" flex justify-between">
                            <Image src={phone} alt="phone-logo" height={20} width={20} className="max-sm:h-[10px] max-sm:w-[10px]"></Image>
                            <p>12748274873</p>
                        </div>
                    </li>

                    <li className="pt-6">
                        <div className="flex justify-between">
                            <Image src={Email} alt="email" height={20} width={20}></Image>
                            <p>qeqndq@gmail.com</p>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <div>
                <h1 className="pt-7 pb-7">Social Media</h1>
                <div className="flex justify-between gap-4 max-sm:gap-4">
                <Image src={fb} alt="fb"></Image>
                <Image src={twitter} alt="twitter"></Image>
                <Image src={linkedin} alt="twitter"></Image>
                <Image src={pininterst} alt="pininterst"></Image>
                </div>
            </div>

            </div>
        </footer>
    )
}