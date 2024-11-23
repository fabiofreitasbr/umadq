import TextMarquee from "./TextMarquee";

export default function Marquee() {
    const Listing = () => {
        var idents = [];
        for (let n = 0; n < 30; n++) { idents.push(<TextMarquee />) };
        return idents;
    }
    return (
        <div className="bg-purple-700 border-t-4 border-b-4 border-beige-500 py-3 md:py-4 lg:py-5 text-center overflow-hidden font-playfair font-bold text-beige-500 text-base md:text-lg lg:text-xl 2xl:text-2xl">
            <div className="marquee flex justify-center gap-10">
                <Listing />
            </div>
        </div>
    )
}