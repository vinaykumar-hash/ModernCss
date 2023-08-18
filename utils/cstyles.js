import clientPromise from "./db";
let client
let db
let cstyles

async function init() {
    if(db) return
    try{
        client = await clientPromise
        db = await client.db()
        cstyles = await db.collection("customstyle")
    }catch(error){
        throw new Error("Failed to connect to database")
    }
    
}
(async ()=>{
    await init()
})()


export async function getcstyles(){
    try{
        if (!cstyles) await init()
        const result = await cstyles.find({}).map(user =>({...user ,_id:user._id.toString()})).toArray()
    return {cstyles:result}
    }catch(error){
        return {error:"failed to fetch testdata"}
    }
}
export async function specstyle(name){
    const query = { ["name"]: name };
    try{
        if (!cstyles) await init()
        const result = await cstyles.find(query).map(user =>({...user ,_id:user._id.toString()})).toArray()
    return {cstyles:result}
    }catch(error){
        return {error:"failed to fetch testdata"}
    }
}
export async function getcatstyle(categoryname){
    const query = { ["category"]: categoryname };
    try{
        if (!cstyles) await init()
        const result = await cstyles.find(query).map(user =>({...user ,_id:user._id.toString()})).toArray()
    return {cstyles:result}
    }catch(error){
        return {error:"failed to fetch testdata"}
    }
}
export async function getcategoryname(){
    try{
        if (!cstyles) await init()
        const categories = await cstyles.distinct("category")
        return {categories:categories}
    }catch(error){
        console.log(error)
        return {error:"failed to fetch testdata"}
    }
}
export async function SearchResult(name){
    // const query = { ["category"]: categoryname };
    try{
        if (!cstyles) await init()
        const result = await cstyles.find({name:{$regex: name, $options: 'i' }}).map(user =>({...user ,_id:user._id.toString()})).toArray()
        
    return {cstyles:result}
    }catch(error){
        return {error:"failed to fetch testdata"}
    }
}
export async function AddDesign(name,background,category,Html,Css,Js){
    try{
        if (!cstyles) await init()
        // let UniqueName = await cstyles.distinct("uniquename")
        let InitialUniqueName = name+"ID";
        let DesignData = {
            "name":name,
            "uniquename":name+"ID",
            "html":Html,
            "css":Css,
            "javascript":Js,
            "background":background,
            "category":category
        }
        let p = await cstyles.insertOne(DesignData);
        if(p.acknowledged){
            return true
        }else{
            return false
        }
    }catch(error){
        console.log(error)
    }
}