"use client"
import Iteminside from "@/components/Iteminside"
import NavBar from '@/components/NavBar'
import Insidepagefill from "@/components/Insideitemfill"
import Iteminsidecode from "@/components/Iteminsidecode"
import { custompage } from "@/components/GetIteminside"
export default function Page({ params }) {
    
    return (
        
    
    <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-white overflow-scroll">
        <NavBar/>
        <div>{Iteminside(params.id)}</div>
        
        {/* <Iteminsidecode/> */}
        <div>{Insidepagefill(params.id)}</div>
        <div>{Iteminsidecode(params.id)}</div>
    </div>
    )
}