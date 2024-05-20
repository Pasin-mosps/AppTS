'use client'

import Image from "next/image";

interface AvatarProps {
    src: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return ( 
        <Image className="rounded-full"
        height="30"
        width="30"
        alt="Avatar"
        src={src || "/image/placeholder.png"}
        />
     );
}
 
export default Avatar;