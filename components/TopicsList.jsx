import Link from "next/link";
import RemoveBTN from "./RemoveBTN";
import { HiPencilAlt } from "react-icons/hi"


const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store"
        });
        // CHECK FOR ERROR IN FETCH
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        // RETURN TOPCS
        console.log("Loaded Correctly")
        return res.json();
    } catch (error) {
        // COULDN'T LOAD TOPICS
        console.log("Error Loding Topics: ", error);
    }
};


export default async function TopicsList() {

    //topics = {};
    const {topics} = await getTopics();

    return (
    <>
    {topics.map((t) => (

    // eslint-disable-next-line react/jsx-key
    <div className="p-4 border border-slate-300 
    my-3 flex justify-between gap-5 items-start">
        <div>
            <h2 className="font-bold text-2xl"> {t.title}</h2>
            <div>{t.description}</div>
        </div>

        <div className="flex gap-2">
            <RemoveBTN id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} /> 
            </Link>
        </div>
    </div>
    ))}
    </>
    );
}