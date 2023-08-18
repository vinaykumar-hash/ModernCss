import { AddDesign } from "@/utils/cstyles"
export async function GET(request,res) {
}

export async function POST(request) {
    let body = await request.json()
    // console.log(body)
    if(body.KEY==process.env.PRIVATE_KEY){
        let SubmitDesign = await AddDesign(body.NAME,body.BACKGROUND,body.CATEGORY,body.HTML,body.CSS,body.JS)
        return new Response(JSON.stringify({"result":SubmitDesign}))
    }else{
        return new Response(JSON.stringify({"result":SubmitDesign}))
    }
    
}

export async function PUT(request) {}
 
export async function DELETE(request) {}
 
export async function PATCH(request) {}
 
export async function OPTIONS(request) {}