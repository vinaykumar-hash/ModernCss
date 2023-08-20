"use client"
import NavBar from "@/components/NavBar"
import { useEffect, useState } from "react"
export default function(){
    let [PrivateKey,NewPrivateKey] = useState("False")
    let [BackgroundColor,NewBackgroundColor] = useState(false)
    let [DesignName,NewDesignName] = useState("False")
    useEffect(()=>{
        let styleElement;
        let dynamicScript;
        document.querySelector(".FinalSubmitButton").addEventListener("click",function(){
            document.querySelector(".DesignSubmitForm").style.filter = "brightness(0)"
            document.querySelector(".DesignSubmitForm").style.background = "black"
            document.querySelector(".FinalSubmit").classList.remove("hidden")
        })
        document.querySelector(".FinalSubmitCross").addEventListener("click",function(){
            document.querySelector(".DesignSubmitForm").style.filter = "brightness(1)"
            document.querySelector(".DesignSubmitForm").style.background = ""
            document.querySelector(".FinalSubmit").classList.add("hidden")
        })
        document.querySelector(".TestButton").addEventListener("click",function(){
            document.querySelector(".DesignSubmitForm").style.filter = "brightness(0)"
            document.querySelector(".DesignSubmitForm").style.background = "black"
            document.querySelector(".CodePreview").classList.remove("hidden")
            document.querySelector(".CodePreview").classList.add("flex")
            document.querySelector(".TestCode").innerHTML = document.querySelector(".HtmlCode").value
            if (!styleElement) {
                styleElement = document.createElement('style');
            }
            
            styleElement.type = 'text/css';
            if (styleElement.styleSheet) {
                // For Internet Explorer
                styleElement.styleSheet.cssText = document.querySelector(".CssCode").value;
            } else {
            styleElement.appendChild(document.createTextNode(document.querySelector(".CssCode").value));
            }
            document.head.appendChild(styleElement);
            if (dynamicScript) {
                document.body.removeChild(dynamicScript);
            }
            try {
                eval(document.querySelector(".JsCode").value);
            } catch (error) {
                alert(error)
            }
        
        })
        document.querySelector(".TestCross").addEventListener("click",function(){
            document.querySelector(".DesignSubmitForm").style.filter = "brightness(1)"
            document.querySelector(".DesignSubmitForm").style.background = ""
            if (dynamicScript) {
                document.body.removeChild(dynamicScript);}
            document.querySelector(".CodePreview").classList.remove("flex")
            document.querySelector(".CodePreview").classList.add("hidden")
            document.querySelector(".TestCode").innerHTML = ""
            if (styleElement) {
                document.head.removeChild(styleElement);
                styleElement = null;}
            
        })
        document.querySelector(".FinalRegester").addEventListener("click",async function(){
            let NameSubmitable = false
            let BackgroundSubmitable = false
            let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            if(format.test(document.querySelector(".DesignName").value)){
                document.querySelector(".NameWarn").classList.remove("hidden")
                document.querySelector(".DesignName").style.border = "1px red solid"
            }else{
            let encodedSearchItem = encodeURIComponent(document.querySelector(".DesignName").value);
            let res = await fetch(`/api/searchitem?query=${encodedSearchItem}`,{
            method:"GET"
            })
            let data = await res.json()
            if(data.length==0){
                document.querySelector(".DesignName").style.border = "1px green solid"
                document.querySelector(".NameWarn").classList.add("hidden")
                NameSubmitable = true
            }else{
                document.querySelector(".DesignName").style.border = "1px red solid"
                document.querySelector(".NameWarn").classList.remove("hidden")
                NameSubmitable = false
            }}
            if(!document.querySelector(".BackgroundColor").value.length == 0){
                document.querySelector(".BackgroundColor").style.border = "1px solid green"
                BackgroundSubmitable = true
            }else{
                document.querySelector(".BackgroundColor").style.border = "1px solid red"
                BackgroundSubmitable = false
            }
            if(NameSubmitable && BackgroundSubmitable){
            let res = await fetch("/api/submitdesign",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                        "KEY": document.querySelector(".PrivateKey").value,
                        "NAME":document.querySelector(".DesignName").value,
                        "BACKGROUND":document.querySelector(".BackgroundColor").value,
                        "CATEGORY":document.querySelector(".DesignCategory").value,
                        "HTML":document.querySelector(".HtmlCode").value,
                        "CSS":document.querySelector(".CssCode").value,
                        "JS":document.querySelector(".JsCode").value,
                    }),
                
            })
            let data = await res.json()
            if(data.result==false){
                document.querySelector(".PrivateKey").style.border = "1px red solid"
            }else if(data.result==true){
                document.querySelector(".PrivateKey").style.border = "1px green solid"
                let congo = document.createElement("div")
                congo.classList.add("bg-green-500","transition-all","absolute","mx-auto","left-0","text-center","top-0","flex","justify-center","items-center")
                congo.style.height = "100vh"
                congo.style.width = "100vw"
                congo.style.zIndex = "99"
                document.querySelector("body").appendChild(congo)
                let CongoMessage = document.createElement("p")
                CongoMessage.textContent = "Submited Succesfully 🚀"
                CongoMessage.classList.add("text-6xl","text-gray-800","font-bold")
                congo.appendChild(CongoMessage)
            }}
        })
        
    },[])
    async function CheckAva(){
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(format.test(document.querySelector(".DesignName").value)){
            document.querySelector(".NameWarn").classList.remove("hidden")
            document.querySelector(".DesignName").style.border = "1px red solid"
        }else{
        let encodedSearchItem = encodeURIComponent(document.querySelector(".DesignName").value);
        let res = await fetch(`/api/searchitem?query=${encodedSearchItem}`,{
        method:"GET"
        })
        let data = await res.json()
        if(data.length==0){
            document.querySelector(".DesignName").style.border = "1px green solid"
            document.querySelector(".NameWarn").classList.add("hidden")
            NewDesignName(true)
            return true
        }else{
            document.querySelector(".DesignName").style.border = "1px red solid"
            document.querySelector(".NameWarn").classList.remove("hidden")
            NewDesignName(false)
            return false
        }}
    }
    return(
        <div>
        <NavBar/>
        <div className="DesignSubmitForm flex justify-center items-center flex-col w-screen text-start px-20 transition-all">
            <h1 className="w-full text-4xl font-bold text-navbarColor-400 mt-10">Submit Your Design</h1>
            <p className="w-full text-sm font-normal text-red-600">Note - This Feature Is For Admin Only</p>
            <div className="CodeSpace w-full text-2xl mt-10">
                <div>
                    <p className=" font-semibold text-orange-500">Html</p>
                    <textarea placeholder="Your Html Code" className="HtmlCode w-full bg-navbarColor-100 rounded-lg h-40 outline-none text-sm p-4 text-white tracking-wide mb-10"></textarea>
                </div>
                <div>
                    <p className=" font-semibold text-cyan-500">Css</p>
                    <textarea placeholder="Your Css Code" className="CssCode w-full bg-navbarColor-100 rounded-lg h-40 outline-none text-sm p-4 text-white tracking-wide mb-10"></textarea>
                </div>
                <div>
                    <p className=" font-semibold text-red-500">JavaScript</p>
                    <textarea placeholder="Your JavaScript Code" className="JsCode w-full bg-navbarColor-100 rounded-lg h-40 outline-none text-sm p-4 text-white tracking-wide mb-10"></textarea>
                </div>
            </div>
            <div className="flex justify-center items-center mb-40 gap-4">
                <button className="TestButton text-xl font-semibold rounded-lg bg-green-300 text-green-900 px-8 py-1 shadow-navbarColor-400">Test</button>
                <button className="FinalSubmitButton text-xl font-semibold rounded-lg bg-blue-900 text-white px-8 py-1">Submit</button>
            </div>
        </div>
        <div className="FinalSubmit absolute hidden top-20 mx-auto left-0 right-0 text-center z-50 w-96 bg-gray-300 px-10 font-medium">
            <p className="w-full text-start text-lg tracking-wide text-black font-semibold mt-10 ">Enter Private Code</p>
            <input placeholder="Your Private Code Here" className=" w-full px-2 py-1 mt-1 outline-none PrivateKey"></input>
            <p className="w-full text-start text-lg tracking-wide text-black font-semibold mt-10 ">Enter Design Name</p>
            <input placeholder="Your Design Name Here" className=" w-full px-2 py-1 mt-1 outline-none DesignName" onChange={CheckAva}></input>
            <p className="hidden NameWarn text-xs text-red-500 w-full text-start tracking-wide mt-1">Only Alphabet Allowed</p>
            <p className="w-full text-start text-lg tracking-wide text-black font-semibold mt-10">Enter Background Ex-"#fff"</p>
            <input placeholder="Your Hex Code Here" className=" w-full px-2 py-1 mt-1 outline-none BackgroundColor"></input>
            <p className="w-full text-start text-lg tracking-wide text-black font-semibold mt-10">Enter Category</p>
            <input placeholder="Category" className=" w-full px-2 py-1 mt-1 outline-none DesignCategory"></input>
            <button className="FinalRegester my-10 px-4 py-1 text-xl bg-blue-900 text-white font-semibold">Submit</button>
            <p className="FinalSubmitCross absolute top-2 right-4 cursor-pointer hover:border-dotted hover:border-red-500 hover:border-2 px-1 transition-all">❌</p>
        </div>
        <div className="CodePreview w-96 h-96 bg-gray-300 absolute top-20 mx-auto left-0 right-0 text-center hidden justify-center items-center">
        <p className="TestCross absolute top-2 right-4  text-center cursor-pointer hover:border-dotted border-red-500 hover:border-2 px-1 transition-all">❌</p>
        <div className="TestCode w-80 h-80 bg-black"></div>
        </div>
        
        </div>
    )
}