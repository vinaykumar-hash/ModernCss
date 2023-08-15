import { getcstyles } from "@/utils/cstyles";
import { getcatstyle } from "@/utils/cstyles";
export async function GET(request) {
    let cname = request.nextUrl.search.replace("?","")
    try{
        const {cstyles , error} = await getcatstyle(cname)
        if(error) throw new Error(error)
        return new Response(JSON.stringify(cstyles))
        // return cstyles
    }catch(error){
        return new Response({error:error.message})
    }
}

export async function POST(request) {}

export async function PUT(request) {}
 
export async function DELETE(request) {}
 
export async function PATCH(request) {}
 
export async function OPTIONS(request) {}