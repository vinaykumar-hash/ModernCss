"use client"
import React from "react";
import NavBar from "@/components/NavBar";
import Category from "@/components/Category";
import Categoryfill from "@/components/Categoryfill";
import SearchPageItems from "@/components/SearchPageItems";
export default function Page({params}){
    return (
        <div>
            <NavBar/>
            <div className="w-screen h-screen flex justify-center items-center sm:flex-row flex-col">
                <Category/>
                <Categoryfill/>
                <div className="w-full h-screen text-navbarColor-400">
                    <div>{SearchPageItems(params.id)}</div>
                </div>
            </div>
        </div>
    )
}