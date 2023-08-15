import React from 'react'
import { useEffect,useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Iteminsidecode = (name) => {
  let [HtmlCode,NewHtmlCode] = useState("")
  let [CssCode,NewCssCode] = useState("")
  let [JsCode,NewJsCode] = useState("")
  async function TestFunction(name){
    let res = await fetch("/api/getstyle?"+name,{
      method:"GET"
    })
    let data = await res.json()
    // alert(data[0].html)
    // let [HtmlCode] = useState(data[0].html)
    NewHtmlCode(data[0].html);
    NewCssCode(data[0].css);
    NewJsCode(data[0].javascript);
  }
  TestFunction(name)
  // alert(testcode)
  
  // useEffect(()=>{
  //   window.onload = function(){
  //     let HtmlCode = document.querySelector(".html").textContent
  //     alert(HtmlCode)
  //   }
    
  // },[])
  // window.onload = function(){
  //   alert(document.querySelector(".css").textContent)
  //   console.log(document.querySelector(".css").textContent)
  // }
  // let [HtmlCode] = useState(document.querySelector(".css").textContent)
  // let code = "<div></div>";
  return (
    <div className='w-screen h-auto flex justify-evenly items-center mt-20 bg-primary-300 pt-20 flex-col px-10 gap-20 pb-10'>
        <div className='w-full'>
        <h1 className='text-orange-500 text-2xl font-semibold mb-2'>Html</h1>
        <code className='bg-primary-500 rounded-lg flex flex-col items-end'>
        <CopyToClipboard text={HtmlCode}>
          <button className=' text-sm bg-primary-400 rounded-lg px-2 text-primary-500 m-2'>Copy</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="html" style={dracula} children={HtmlCode} className="rounded-lg html text-left w-full">
            
        </SyntaxHighlighter></code>
        {/* <pre className=' code w-full h-80 bg-black rounded-lg  text-white overflow-scroll px-2 py-2 text-sm'><code className='html'></code></pre> */}
        </div>
        <div className='w-full'>
        <h1 className='text-cyan-500 text-2xl font-semibold mb-2'>Css</h1>
        <code className='bg-primary-500 rounded-lg flex flex-col items-end'>
        <CopyToClipboard text={CssCode}>
        <button className=' text-sm bg-primary-400 rounded-lg px-2 text-primary-500 m-2'>Copy</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="css" style={dracula} children={CssCode} className="rounded-lg text-left w-full">
            
        </SyntaxHighlighter></code>
        {/* <pre className=' code w-full h-80 bg-black rounded-lg  text-white overflow-scroll px-2 py-2 text-sm'><code className='css'></code></pre> */}
        </div>
        <div className='w-full'>
        <h1 className='text-red-500 text-2xl font-semibold mb-2'>Javascript</h1>
        <code className='bg-primary-500 rounded-lg flex flex-col items-end'>
        <CopyToClipboard text={JsCode}>
        <button className=' text-sm bg-primary-400 rounded-lg px-2 text-primary-500 m-2'>Copy</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="javascript" style={dracula} children={JsCode} className="rounded-lg text-left w-full">
            
        </SyntaxHighlighter></code>
        {/* <pre className=' code w-full h-80 bg-black rounded-lg  text-white overflow-scroll px-2 py-2 text-sm'><code className='js'></code></pre> */}
        </div>
    </div>

  )
}

export default Iteminsidecode