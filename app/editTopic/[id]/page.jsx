import EditTopicForm from "@/components/editTopicForm";

export default function editTopic () {

    return (
        <>
        <form className="flex flex-col gap-3">
        <input 
            className="border border-slate-500 px-8 py-2"
            type='text'
            placeholder='Topic Title'


        />
        <input 
            className="border border-slate-500 px-8 py-2"
            type='text'
            placeholder='Topic Description'


        />
        <button className="bg-green-600 font-bold text-white px-6 py-3 w-fit">
            Save Topic
        </button>
        </form>
        </>
    
    
    )}