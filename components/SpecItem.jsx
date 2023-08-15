"use client"
import React from 'react'
import { useEffect } from 'react'
const SpecItem = () => {
    useEffect(()=>{
        async function FillSpecPage(){
            let res = await fetch("/api/db_connect",{
                method:"GET"
            })
            let items = await res.json()
            items.forEach((ele)=>{
                let unique_class = ele.name
                let html_code = ele.html
                let css_code = ele.css
                let js_code = ele.javascript
                let new_style = document.createElement("div")
                new_style.classList.add(unique_class,"homepage_item", "sm:w-1/4","w-1/2", "h-full", "bg-primary-300", "rounded-lg", "overflow-hidden" ,"hover:scale-105", "transition-all","hover:shadow-lg","py-auto")
                document.querySelector(".Homepagecat1_container").appendChild(new_style)
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
        fillpage()
    },[])
  return (
    <div>SpecItem</div>
  )
}

export default SpecItem