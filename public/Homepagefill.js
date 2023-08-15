export async function fillHome(){
    let res = await fetch("/api/db_connect",{
        method:"GET"
    })
    let items = await res.json()
    console.log(items[0].html)
    alert(items[0].html)
}
fillHome()