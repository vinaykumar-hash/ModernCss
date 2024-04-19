"use client"
import React from 'react'
import { useEffect,useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { custompage } from './GetIteminside';
const Iteminsidecode = (name) => {
  let [HtmlCode,NewHtmlCode] = useState("")
  let [CssCode,NewCssCode] = useState("")
  let [JsCode,NewJsCode] = useState("")
  useEffect(()=>{
    async function FillCode(name){
      let data = await custompage(name)
      NewHtmlCode(data.html);
      NewCssCode(data.css);
      NewJsCode(data.javascript);
      // alert(data.html)
    }
    FillCode(name)
  },[])
  return (
    <div className='w-screen h-auto flex justify-evenly items-center mt-20 bg-gray-950 pt-20 flex-col px-10 gap-20 pb-10'>
        <div className='w-full'>
        <h1 className='text-orange-500 text-2xl font-semibold mb-2'>Html</h1>
        <code className='bg-primary-500 rounded-lg flex flex-col items-end'>
        <CopyToClipboard text={HtmlCode}>
          <button className=' text-sm bg-primary-400 rounded-lg px-2 text-primary-500 m-2'>Copy</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="html" style={dracula} children={HtmlCode} className="rounded-lg html text-left w-full">
            
        </SyntaxHighlighter></code>
        
        </div>
        <div className='w-full'>
        <h1 className='text-cyan-500 text-2xl font-semibold mb-2'>Css</h1>
        <code className='bg-primary-500 rounded-lg flex flex-col items-end'>
        <CopyToClipboard text={CssCode}>
        <button className=' text-sm bg-primary-400 rounded-lg px-2 text-primary-500 m-2'>Copy</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="css" style={dracula} children={CssCode} className="rounded-lg text-left w-full">
            
        </SyntaxHighlighter></code>
        
        </div>
        <div className='w-full'>
        <h1 className='text-red-500 text-2xl font-semibold mb-2'>Javascript</h1>
        <code className='bg-primary-500 rounded-lg flex flex-col items-end'>
        <CopyToClipboard text={JsCode}>
        <button className=' text-sm bg-primary-400 rounded-lg px-2 text-primary-500 m-2'>Copy</button>
        </CopyToClipboard>
        <SyntaxHighlighter language="javascript" style={dracula} children={JsCode} className="rounded-lg text-left w-full">
            
        </SyntaxHighlighter></code>
        
        </div>
    </div>

  )
}

export default Iteminsidecode