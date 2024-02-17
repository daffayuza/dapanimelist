import prisma from "@/libs/prisma"

export async function POST(request){
    const { anime_mal_id, user_email, anime_title, username, comment } = await request.json()
    const data = { anime_mal_id, user_email, anime_title, username, comment }

    const createComment = await prisma.comment.create({ data })
    if(!createComment){
        return Response.json({ status:500, isCreated: false })
    } else {
        return Response.json({ status:201, isCreated: true})
    }
}