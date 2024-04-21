"use client"
 


import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () => {
    const router = useRouter();


    return (
        <div>
             <Image
            alt="Logo"
            className="hidden md:block cursor-pointer"
            width="100"
            height="100"
            src="/image/logo1.png"
        />
        </div>
       

        
     );
}

export default Logo;
