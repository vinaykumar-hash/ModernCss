"use client"
import React from 'react'
import { useEffect } from 'react'
const CategoryPageFill = (name) => {
    useEffect(()=>{
        async function FillCategoryPage(name){
            let res = await fetch("/api/db_connect?"+name,{
                method:"GET"
            })
            let items = await res.json()
            items.forEach((ele)=>{
                let unique_class = ele.uniquename
                let background = ele.background
                let name = ele.name
                let html_code = ele.html
                let css_code = ele.css
                let js_code = ele.javascript
                let new_style = document.createElement("div")
                new_style.onclick = () => navigateToSpecRoute(name);
                new_style.classList.add(unique_class, "sm:w-1/4","w-1/2", "h-32", "rounded-lg", "transition-all","hover:shadow-lg","py-auto","flex","justify-center","items-center")
                new_style.style.background = background
                document.querySelector(".CategoryPageItemsContainer").appendChild(new_style)
                document.querySelector("."+unique_class).innerHTML += html_code
                const styleElement = document.createElement('style');
                styleElement.type = 'text/css';
                if (styleElement.styleSheet) {
                    // For Internet Explorer
                    styleElement.styleSheet.cssText = css_code;
                } else {
                styleElement.appendChild(document.createTextNode(css_code));
                }
                document.head.appendChild(styleElement);
                eval(js_code)
            })
        }
        FillCategoryPage(name)
        function navigateToSpecRoute(name) {
            window.location.href = "/customstyle/"+name;
          }
        // let cat_shown = 0
        // document.querySelector(".category_text").addEventListener("click",function(){
        //     if(cat_shown==0){
        //         document.querySelectorAll(".categories").forEach((el)=>{
        //             el.classList.remove("hidden")
        //         })
        //         cat_shown = 1
        //         document.querySelector(".category_text").innerHTML = "Category &#8593;"
        //     }else{
        //         document.querySelectorAll(".categories").forEach((el)=>{
        //             el.classList.add("hidden")
        //         })
        //         cat_shown = 0
        //         document.querySelector(".category_text").innerHTML = "Category &#8595;"
        //     }
            
        // })
    }
    ,[])
  return (
    <div></div>
  )
}

export default CategoryPageFill
// export async function FillCategoryPage(name){
//     let res = await fetch("/api/db_connect?"+name,{
//         method:"GET"
//     })
//     let items = await res.json()
//     items.forEach((ele)=>{
//         let unique_class = ele.uniquename
//         let background = ele.background
//         let name = ele.name
//         let html_code = ele.html
//         let css_code = ele.css
//         let js_code = ele.javascript
//         let new_style = document.createElement("div")
//         new_style.onclick = () => navigateToSpecRoute(name);
//         new_style.classList.add(unique_class,"homepage_item", "sm:w-1/4","w-1/2", "h-full", "rounded-lg", "transition-all","hover:shadow-lg","py-auto","flex","justify-center","items-center")
//         new_style.style.background = background
//         document.querySelector(".CategoryPageItemsContainer").appendChild(new_style)
//         document.querySelector("."+unique_class).innerHTML += html_code
//         const styleElement = document.createElement('style');
//         styleElement.type = 'text/css';
//         if (styleElement.styleSheet) {
//             // For Internet Explorer
//             styleElement.styleSheet.cssText = css_code;
//         } else {
//         styleElement.appendChild(document.createTextNode(css_code));
//         }
//         document.head.appendChild(styleElement);
//         eval(js_code)
//     })
// }