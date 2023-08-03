import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// ADD NEW TOPIC
export async function POST(request) 
{
    const {title, description} = await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json(
        {
            message: "Topic Created",
            status: "201"
        })
}

// GET ALL TOPICS
export async function GET() 
{
    await connectMongoDB();
    const topics = await Topic.find();
    console.log(topics);
    return NextResponse.json({topics});

}

// DELETE A TOPIC BY ID
export async function DELETE(request) 
{
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({
        message: `Message ${id} removed`,
        status: 200
    })
}