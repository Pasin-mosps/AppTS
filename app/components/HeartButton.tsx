'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hook/useFavorite";

interface HeartProps {
    listingId: string
    currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartProps> = ({
    listingId,
    currentUser,
}) => {
    const { hasFavorite, toggleFavorite } = useFavorite({
        listingId,
        currentUser
    })

    return ( 
        <div 
            onClick={toggleFavorite}
            className="relative hover:opacity-80 transition cursor-pointer"
        >
            <AiOutlineHeart  
                size={25}
                className="fill-white absolute-top-[3px]-right-[3px]"
            />
            <AiFillHeart 
                size={28}
                className={hasFavorite ? 'fill-rose-600' : 'fill-neutral-500/70' }
            />

        </div>
     );
}
 
export default HeartButton;