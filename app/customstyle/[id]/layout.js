"use client"
import Iteminside from "@/components/Iteminside"
import NavBar from '@/components/NavBar'
import Insidepagefill from "@/components/Insideitemfill"
import Iteminsidecode from "@/components/Iteminsidecode"
import { custompage } from "@/components/GetIteminside"
export default function Page({ params }) {
    
    return (
        
    
    <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-gray-950 text-white overflow-scroll">
        <NavBar/>
        <div>{Iteminside(params.id)}</div>
        
        {/* <Iteminsidecode/> */}
        <div>{Insidepagefill(params.id)}</div>
        <div>{Iteminsidecode(params.id)}</div>
        <div className='h-40 w-40 blur-3xl bg-navbarColor-400 opacity-10 absolute top-0 left-32' style={{zIndex:"-90"}}></div>
        <div className='h-40 w-40 blur-3xl bg-navbarColor-400 opacity-10 absolute top-96 right-96'></div>
        <div className='h-40 w-40 blur-3xl bg-navbarColor-400 opacity-10 absolute top-10 right-10'></div>
    </div>
    )
}