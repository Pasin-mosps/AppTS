'use client'

import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import  MenuItem from "./MenuItem";
import userRegisterModal from "@/app/hook/useRegisterModal";
import userLoginModal from "@/app/hook/useLoginModal";

import { SafeUser } from "@/app/types";
import userRentModal from "@/app/hook/useRentModal";

interface userMenuProps{
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<userMenuProps>= ({
    currentUser
}) => {
    const registerModal = userRegisterModal()
    const loginModal = userLoginModal()
    const rentModal = userRentModal()

    const [isOpen, setIsOpen ] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    const onRent = useCallback(() => {
        if (!currentUser){
            return loginModal.onOpen()
        }

        rentModal.onOpen()
    },[currentUser, loginModal,rentModal])

    return ( 
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={onRent} 
                className="hidden md:block text-sm font-semibold 
                py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"> 
                    Your Home
                </div>
                <div onClick={toggleOpen}
                className="p-3 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center
                gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar/>
                        </div>
                </div>
            </div>

        {isOpen && (
            <div className="absolute rounded0xl shadow-md w-[40vw] md:w-3/4
             bg-white overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer"> 
                {currentUser ? (
                     <>
                     <MenuItem onClick={() => {}}
                     label="My trips"
                     />
                     <MenuItem onClick={()=> {}}
                     label="My favorites"
                     />
                     <MenuItem onClick={()=> {}}
                     label="My reservations"
                     />
                     <MenuItem onClick={()=> {}}
                     label="My properties"
                     />
                     <MenuItem onClick={rentModal.onOpen}
                     label="My Home"
                     />
                     <hr />
                     <MenuItem onClick={()=> {}}
                     label="Logout"
                     />
                 </>
                ) : (
                    <>
                        <MenuItem onClick={loginModal.onOpen}
                        label="Login"
                        />
                        <MenuItem onClick={registerModal.onOpen}
                        label="Sign up"
                        />
                    </>
                )}
                </div>
            </div>
    
        )}
        </div>
     );
}
 
export default UserMenu;