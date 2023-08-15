import { SearchResult } from "@/utils/cstyles"
export async function GET(request) {
    let cname = request.nextUrl.search.replace("?","")
    try{
        const {cstyles , error} = await SearchResult(cname)
        if(error) throw new Error(error)
        let StyleNames = []
        for(let i=0;i<cstyles.length;i++){
            let style = [cstyles[i].name,cstyles[i].category]
            StyleNames.push(style)
        }
        return new Response(JSON.stringify(StyleNames))
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