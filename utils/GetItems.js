
import { getcstyles } from "@/utils/cstyles";
export async function Getitems(){
    try{
        const {cstyles , error} = await getcstyles()
        if(error) throw new Error(error)
        return cstyles
        console.log(cstyles[0].javascript)
        // return new Response(JSON.stringify(cstyles[0]))
    }catch(error){
        // return new Response({error:error.message})
        return error
    }
}
// export function cathidden(){
//     document.querySelectorAll(".categories").forEach((el)=>{
//         el.classList.remove("hidden")
//     })
// }
// document.querySelector(".category").addEventListener("click",function(){
//     document.querySelectorAll(".categories").forEach((el)=>{
//         el.classList.remove("hidden")
//     })
// })