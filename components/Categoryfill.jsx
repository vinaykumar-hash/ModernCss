"use client"
import React from 'react'
import { useEffect } from 'react'
const Categoryfill = () => {
    useEffect(()=>{
        async function fillcategory(){
            let res = await fetch("/api/getstyle/category",{
                method:"GET"
            })
            let data = await res.json()
            let category = document.querySelector(".category")
            data.forEach((ele)=>{
                let new_category = document.createElement("div")
                new_category.classList.add("capitalize","hover:bg-primary-400","pl-6","py-2","categories","font-semibold","text-sm","opacity-80","cursor-pointer","hover:opacity-100","transition-all","sm:block","hidden","hover:text-navbarColor-100")
                new_category.textContent = ele
                new_category.onclick = () => navigateToCatRoute(ele);
                category.appendChild(new_category)
            })
            document.querySelector(".category_text").classList.remove("animate-pulse")
        }
        fillcategory()
        function navigateToCatRoute(name) {
            window.location.href = "/category/"+name;
        }
        let cat_shown = 0;
        document.querySelector(".category_text").addEventListener("click",function(){
            if(cat_shown==0){
                document.querySelectorAll(".categories").forEach((el)=>{
                    el.classList.remove("hidden")
                })
                cat_shown = 1
                document.querySelector(".category_text").innerHTML = "Category &#8593;"
            }else{
                document.querySelectorAll(".categories").forEach((el)=>{
                    el.classList.add("hidden")
                })
                cat_shown = 0
                document.querySelector(".category_text").innerHTML = "Category &#8595;"
            }})
    },[])
  return (
    <div></div>
  )
}

export default Categoryfill