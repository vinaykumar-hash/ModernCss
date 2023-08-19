"use client"
import React from 'react'

const SearchPageItems = (SearchName) => {
  async function GetSearchItems(name){
    let res;
    try{
    res = await fetch(`/api/searchitem?query=${name}`,{
      method:"GET"
    })}catch(err){
      // Placeholder: Do nothing
    }
    if(res){
    let data = await res.json()
    let ItemsCategory = []
    data.forEach((el)=>{
      if(!ItemsCategory.includes(el[1])){
        ItemsCategory.push(el[1])
      }
    })
    ItemsCategory.forEach((el)=>{
      let NewItemCategory = document.createElement("h1")
      NewItemCategory.textContent = el
      NewItemCategory.classList.add("text-2xl","font-semibold","my-4")
      document.querySelector(".SearchPageContainer").appendChild(NewItemCategory)
      let ItemsContainer = document.createElement("div")
      ItemsContainer.classList.add("w-full",el+"container")
      document.querySelector(".SearchPageContainer").appendChild(ItemsContainer)
      data.forEach((ChildElement)=>{
        if(ChildElement[1]==el){
          fillItem(ChildElement[0],el+"container")
          // let new_style = document.createElement("div")
          //       new_style.onclick = () => navigateToSpecRoute(ChildElement[0]);
          //       new_style.classList.add(unique_class, "sm:w-1/4","w-1/2", "h-full", "rounded-lg", "transition-all","hover:shadow-lg","py-auto","flex","justify-center","items-center")
          //       new_style.style.background = background
          //       ItemsContainer.appendChild(new_style)
          //       document.querySelector("."+unique_class).innerHTML += html_code
          //       const styleElement = document.createElement('style');
          //       styleElement.type = 'text/css';
          //       if (styleElement.styleSheet) {
          //           // For Internet Explorer
          //           styleElement.styleSheet.cssText = css_code;
          //       } else {
          //       styleElement.appendChild(document.createTextNode(css_code));
          //       }
          //       document.head.appendChild(styleElement);
          //       eval(js_code)
        }
      })
    })}
  }
  async function fillItem(name,ClassToAdd){
    let elementRes = await fetch("/api/getstyle?"+name)
    let data = await elementRes.json()
    let unique_class = data[0].uniquename
    let html_code = data[0].html
    let css_code = data[0].css
    let js_code = data[0].javascript
    let new_style = document.createElement("div")
    new_style.onclick = () => navigateToSpecRoute(name);
    new_style.classList.add(unique_class, "sm:w-1/4","w-1/2", "h-20", "rounded-lg", "transition-all","hover:shadow-lg","py-auto","flex","justify-center","items-center")
    new_style.style.background = data[0].background
    document.querySelector("."+ClassToAdd).appendChild(new_style)
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
  }
  function navigateToSpecRoute(name) {
    window.location.href = "/customstyle/"+name;
  }
  GetSearchItems(SearchName)
  return (
    <div className='SearchPageContainer px-8 w-full capitalize'>
      <div className='SearchResultTitle flex justify-start py-4 items-center'>
        <h1 className=''>Search Result For - </h1>
        <h1 className='bg-navbarColor-400 text-gray-800 pl-1 pr-2 pt-1'>" {SearchName} "</h1>
      </div>
      {/* <h1 className='text-2xl font-semibold px-4'>Button</h1>
      <div className='ButtonItemsContainer h-8 w-full'>
      </div> */}
    </div>
  )
}

export default SearchPageItems