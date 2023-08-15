export async function custompage(name){
    let res = await fetch("/api/getstyle?"+name,{
        method:"GET"
    })
    let data = await res.json()
    // console.log(data[0])
    return data[0]
}