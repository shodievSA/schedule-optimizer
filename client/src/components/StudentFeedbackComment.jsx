function StudentFeedbackComment({ text, rating, student_name, student_status }) {
    return (
        <div className="flex flex-col border-2 rounded-lg w-full gap-y-8 p-8 border-neutral-400">
            <div className="flex gap-x-5 text-xl">
                <h1>Student Name: <b>{ student_name }</b></h1>
                <h1>Student Status: <b>{ student_status }</b></h1>
            </div>
            <div className="text-lg">
                { text }
            </div>
            <div className="rating flex gap-x-2">
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                checked={ rating === 1 ? true : false }
                disabled 
                />
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                checked={ rating === 2 ? true : false }
                disabled 
                />
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                checked={ rating === 3 ? true : false }
                disabled 
                />
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                checked={ rating === 4 ? true : false }
                disabled 
                />
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                checked={ rating === 5 ? true : false }
                disabled 
                />
            </div>
        </div>
    )
}

export default StudentFeedbackComment;