import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// UPDATE TOPIC
export async function PUT(request, {params}) {
    const { id } =  params;
    const { newTitle: title, newDescription: description} =  await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, description });
    return NextResponse.json(
        { 
            message: "Topic Updated Playa",
            status: 200
        })

}

// GET INDIVIDUAL TOPIC
export async function GET(request, {params}) {
    const { id } =  params;
    //const { newTitle: title, newDescription: description} =  await request.json();
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json( {
        topic,
        status: 200
    });
}