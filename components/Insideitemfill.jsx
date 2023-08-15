"use client"
import React from 'react'
import { custompage } from './GetIteminside'
import { useEffect,useState } from 'react'
export default function Insidepagefill(name){
    useEffect(()=>{
        async function hii(name){
            let data1 = await custompage(name)
            let mod_name = data1.name
            document.querySelector(".mod_name").innerHTML = mod_name
            let html_code = data1.html
            // document.querySelector(".html").textContent = html_code
            let css_code = data1.css
            // document.querySelector(".css").textContent = css_code
            let js_code = data1.javascript
            // document.querySelector(".js").textContent = js_code
            let background = data1.background
            let percentage_split = [html_code.length/(html_code.length+css_code.length+js_code.length)*100,css_code.length/(html_code.length+css_code.length+js_code.length)*100,js_code.length/(html_code.length+css_code.length+js_code.length)*100]
            document.querySelector(".html_split").style.width = String(percentage_split[0])+"%"
            document.querySelector(".css_split").style.width = String(percentage_split[1])+"%"
            document.querySelector(".js_split").style.width = String(percentage_split[2])+"%"
            
            // let new_style = document.createElement("div")
            // new_style.classList.add(unique_class,"homepage_item", "sm:w-1/4","w-1/2", "h-full", "bg-primary-300", "rounded-lg", "overflow-hidden" ,"hover:scale-105", "transition-all","hover:shadow-lg","py-auto")
            // document.querySelector(".Homepagecat1_container").appendChild(new_style)
            document.querySelector(".ActiveElement").innerHTML += html_code
            document.querySelector(".ActiveElement").style.background = background
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
            return {HtmlCode:html_code,CssCode:css_code,JsCode:js_code}
        }
        hii(name)
    },[])
    return (<div></div>)
}
export async function example(name){
    let data1 = await custompage(name)
    let unique_class = data1.uniquename
    let html_code = data1.html
    let css_code = data1.css
    let js_code = data1.javascript
    // let new_style = document.createElement("div")
    // new_style.classList.add(unique_class,"homepage_item", "sm:w-1/4","w-1/2", "h-full", "bg-primary-300", "rounded-lg", "overflow-hidden" ,"hover:scale-105", "transition-all","hover:shadow-lg","py-auto")
    // document.querySelector(".Homepagecat1_container").appendChild(new_style)
    document.querySelector(".ActiveElement").innerHTML += html_code
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
}
export async function example1(name){
    console.log("reached example1")
    let html_code = data1.html
    let css_code = data1.css
    let js_code = data1.javascript
    return ({HtmlCode:html_code,CssCode:css_code,JsCode:js_code})
}
  