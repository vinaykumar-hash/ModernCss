import { getcategoryname} from "@/utils/cstyles";
export async function GET(request) {
    try{
        const {categories , error} = await getcategoryname()
        if(error) throw new Error(error)
        return new Response(JSON.stringify(categories))
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