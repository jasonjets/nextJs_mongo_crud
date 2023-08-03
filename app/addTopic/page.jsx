'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title || !description){
            alert("title and description required");
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description}),
            });
            
            if(res.ok){
                console.log("Item Added") 
                router.push('/');
            } else {
                throw new Error("Failed to create error");
            }
        } catch (error) {
            console.log("Item Not Added: ", error)
        }
    };



    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2"
                type='text'
                placeholder='Topic Title'



            />
            <input 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2"
                type='text'
                placeholder='Topic Description'


            />
            <button className="bg-green-600 font-bold text-white px-6 py-3 w-fit">
                Add Topic
            </button>
            
            </form>

        </>
    )
}