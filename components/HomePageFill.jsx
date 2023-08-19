"use client"
import React from 'react'
import { useEffect } from 'react'
const HomePageFill = () => {
    useEffect(()=>{
        function navigateToSpecRoute(name) {
            window.location.href = "/customstyle/"+name;
        }
        async function fillpage(){
            let res = await fetch("/api/db_connect?LiveUi",{
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
                new_style.classList.add(unique_class,"homepage_item", "sm:w-1/4","w-1/2", "h-full", "rounded-lg", "transition-all","hover:shadow-md","py-auto","flex","justify-center","items-center","hover:shadow-navbarColor-400")
                new_style.style.background = background
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
            let resButton = await fetch("/api/db_connect?button",{
                method:"GET"
            })
            let itemsButton = await resButton.json()
            itemsButton.forEach((ele)=>{
                let unique_class = ele.uniquename
                let background = ele.background
                let name = ele.name
                let html_code = ele.html
                let css_code = ele.css
                let js_code = ele.javascript
                let new_style = document.createElement("div")
                new_style.onclick = () => navigateToSpecRoute(name);
                new_style.classList.add(unique_class,"homepage_item", "sm:w-1/4","w-1/2", "h-full", "rounded-lg", "transition-all","hover:shadow-md","py-auto","flex","justify-center","items-center","hover:shadow-navbarColor-400")
                new_style.style.background = background
                document.querySelector(".Homepagecat2_container").appendChild(new_style)
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
    <div></div>
  )
}

export default HomePageFill