"use client"
import Category from "@/components/Category";
import Categoryfill from "@/components/Categoryfill";
import NavBar from "@/components/NavBar";
import CategoryPageFill from "@/components/CategoryPageFill";
import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function Page({ params }) {
    return (
        <div>
            <NavBar/>
            <div className="w-screen flex justify-center items-center h-screen sm:flex-row flex-col">
                <Category/>
                <Categoryfill/>
                <div className="w-full h-full p-4">
                    <h1 className="font-semibold text-2xl tracking-wide sm:mx-4 mx-4 mb-4 text-navbarColor-400 capitalize">{params.id}</h1>
                    <div className="CategoryPageItemsContainer w-full h-auto px-4 py-2 flex gap-2 flex-wrap overflow-scroll">
                        
                    </div>
                    {CategoryPageFill(params.id)}
                </div>
            </div>
        </div>
    )
}