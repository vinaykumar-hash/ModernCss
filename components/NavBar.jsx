"use client"
import React, { useState } from 'react'

const NavBar = () => {
  function navigateToSpecRoute(name) {
    window.location.href = "/customstyle/"+name;
  }
  function navigateToSearchRoute() {
    if(!document.querySelector(".searchtext").value.length == 0){
      window.location.href = "/searchitems/"+document.querySelector(".searchtext").value;
    }
    
  }
  async function SearchItem(){
    let SearchItem = document.querySelector(".searchtext").value
    if(SearchItem.length == 0){
      document.querySelector(".SearchResults").style.opacity = "0"
      document.querySelector(".SearchResults").style.top = "0rem"
    }else{
    let encodedSearchItem = encodeURIComponent(SearchItem);
    let res = await fetch(`/api/searchitem?query=${encodedSearchItem}`,{
      method:"GET"
    })
    let data = await res.json()
    document.querySelector(".searchresultcontainer").innerHTML = ""
    document.querySelector(".SearchResults").style.opacity = "1"
    document.querySelector(".SearchResults").style.top = "4rem"
    if(data.length == 0){
      document.querySelector(".SearchResultTitle").textContent = " Nothing Found "
    }else{
      document.querySelector(".SearchResultTitle").textContent = "\" Search Result \" \-"
    let DataCategory = []
    data.forEach((el)=>{
      if(!DataCategory.includes(el[1])){
        DataCategory.push(el[1])}
      })
    DataCategory.forEach((el)=>{
      let NewStyleName = document.createElement("h1")
      NewStyleName.textContent = el
      NewStyleName.classList.add("text-primary-400","font-semibold","text-xl","px-6","tracking-wide","mt-4")
      document.querySelector(".searchresultcontainer").appendChild(NewStyleName)
      data.forEach((innerel)=>{
        if(innerel[1] == el){
          let NewSearchItem = document.createElement("p")
          NewSearchItem.classList.add("my-2" ,"rounded-lg" ,"py-2", "w-auto" , "sm:mx-4", "font-medium", "pl-4","hover:bg-blue-900","text-white","border","border-gray-800","border-dotted")
          NewSearchItem.textContent = innerel[0]
          // NewSearchItem.onClick = navigateToSpecRoute(el)
          NewSearchItem.addEventListener("click", () => navigateToSpecRoute(innerel[0]));
          document.querySelector(".searchresultcontainer").appendChild(NewSearchItem)
        }
        
        
      })
    })
    }}
  }
  // document.querySelector(".searchbutton").addEventListener("click",navigateToSearchRoute(document.querySelector(".searchtext").textContent))
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='text-center sticky top-0 h-auto bg-navbarColor-100 z-50 shadow-md flex justify-center items-center px-2'>
        <input onChange={SearchItem} type="text" placeholder='Search any Componet' className='searchtext bg-navbarColor-200 text-white font-normal text-sm h-10 w-80 rounded-lg px-4 outline-none my-2 mr-2 tracking-wide'/>
        <button onClick={navigateToSearchRoute} className='searchbutton bg-blue-900 text-white rounded-lg h-10 w-10 opacity-100 transition-all hover:opacity-100 fa fa-search'></button>
    </div>
    <div className='SearchResults cursor-default transition-all flex justify-center items-center flex-col  absolute top-0 opacity-0 z-40 w-screen sm:px-0 px-2 '>
      <div className='SearchResultTitle sm:w-2/5 w-full text-white text-xs bg-navbarColor-100 backdrop-blur-sm rounded-t-lg p-4 drop-shadow-md'>" Search Result " -</div>
      <div className='searchresultcontainer px-2 sm:w-2/5 w-full bg-navbarColor-100 rounded-b-lg text-sm backdrop-blur-sm transition-all max-h-60 overflow-scroll capitalize drop-shadow-2xl'>
      </div>
      
    </div>
    </div>
  )
}

export default NavBar