

export default function ArticleCards({image, title, desc, readMoreLink})
{

    return (
        <div className="min-w-[40rem] relative flex gap-[1rem]">
            <div className="">
                <img src={image} width={400} alt="Card-Image"></img>
            </div>
            
            <div className="flex flex-col">
                <span className="text-white bg-blue-400 rounded-lg px-2 p-1 w-fit text-sm">GST</span>

                <h1 className="font-bold text-xl">{title}</h1>

                <p>{desc} <a href={readMoreLink} className="text-blue-700 underline">Read More</a></p>
            </div>
        </div>
    );
}