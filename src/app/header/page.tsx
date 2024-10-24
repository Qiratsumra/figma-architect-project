import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Group 8.jpg"


export default function Header(){
    return(
        <header>
            <div className="flex justify-evenly ">
            <div className="p-2">
                <Image src={logo}  alt="logo"></Image>
                <h1 className="text-sm font-thin max-sm:text-xs">DIGITAL PROJECT</h1>
</div> 
                <div className="p-6 max-sm:p-3">
                <ul className="text-xs flex justify-evenly gap-10 max-sm:gap-3">
                    
                   <Link href={"/"}> <li className="underline"><span className="overline">MAIN</span></li> </Link> 
                    <Link href={"/gallery"}><li>GALLERY</li></Link>
                    <Link href={"/Project"}> <li>Projects</li> </Link>
                   <Link href={"/certification"}> <li>CERTIFICATIONS</li></Link>
                    <Link href={"/contact"}><li>CONTACT</li></Link>
                </ul>
</div>
</div>
        </header>
    )
}