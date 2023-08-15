import { specstyle } from "@/utils/cstyles";
export async function GET(request,res) {
    let name = request.nextUrl.search.replace("?","")
    try{
        const {cstyles , error} = await specstyle(name)
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