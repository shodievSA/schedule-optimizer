function StudentFeedbackComment() {
    return (
        <div className="flex flex-col border-2 rounded-lg w-full gap-y-8 p-8 border-neutral-400">
            <div className="flex gap-x-5 text-xl">
                <h1>Student Name: <b>Abbos Shodiev</b></h1>
                <h1>Student Grade: <b>A-</b></h1>
                <h1>Student Status: <b>Freshman</b></h1>
            </div>
            <div className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti quidem placeat distinctio sed pariatur saepe, rerum 
                debitis eos exercitationem veniam, cumque ullam suscipit 
                laudantium labore laborum omnis! Autem, sint beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aperiam aliquid voluptatem aut modi illum illo consequuntur maxime. 
                Quibusdam recusandae magnam ad, eum ut debitis porro aut at ea. Aut, esse?
            </div>
            <div className="rating flex gap-x-2">
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                disabled 
                />
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                disabled 
                />
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                disabled 
                />
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                disabled 
                defaultChecked 
                />
                <input 
                type="radio" 
                name="rating-2" 
                className="mask mask-star-2 bg-orange-400 cursor-default" 
                disabled 
                />
            </div>
        </div>
    )
}

export default StudentFeedbackComment;