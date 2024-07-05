export default function MoreFeatureCards({ heading, desc, icon }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="mx-auto text-6xl text-red-800">{icon}</div>
            <h1 className="text-center font-bold">{heading}</h1>
            <p className="text-center">{desc}</p>
        </div>
    );
}
