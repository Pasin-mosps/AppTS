'use client'

import Container from "../Container"

import { TbBeach, TbMountain, TbPool } from "react-icons/tb"
import { GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md"
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach ,
        description: 'this property is close to the beach'
    },
    {
        label: 'windmills',
        icon: GiWindmill ,
        description: 'this property has windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla ,
        description: 'this property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain ,
        description: 'this property is in the countryside!'
    },
    {
        label: 'Pool',
        icon: TbPool ,
        description: 'this property has a pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland ,
        description: 'this property is on an island!'
    },
]
const Categories= () => {
    const params = useSearchParams()
    const category  =  params ?.get(`category`)
    const pathname = usePathname()

    return ( 
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox 
                    key= {item.label}
                    label={item.label}
                    selected = {category === item.label}
                    icon={item.icon}
                    />
                ))}
            </div>
        </Container>
     );
}
 
export default Categories;