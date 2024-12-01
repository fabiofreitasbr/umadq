import TextMarquee from "./TextMarquee";

export default function Marquee() {
    const Listing = () => {
        var idents = [];
        for (let n = 0; n < 80; n++) { idents.push(<TextMarquee />) };
        return idents;
    }
    return (
        <div className="flex justify-center z-20 relative">
            <div className="w-full relative">
<<<<<<< HEAD
                <div className="w-[105%] absolute -left-2 top-0 bg-black border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-yellow-500 py-3 md:py-4 lg:py-5 text-center overflow-hidden font-playfair font-bold text-yellow-500 text-base md:text-lg lg:text-xl 2xl:text-2xl -rotate-3 -rotate-6">
=======
                <div className="w-[105%] absolute -left-2 top-0 bg-black border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-yellow-500 py-3 md:py-4 lg:py-5 text-center overflow-hidden font-playfair font-bold text-yellow-500 text-base md:text-lg lg:text-xl 2xl:text-2xl -rotate-3">
>>>>>>> parent of 71bf288 (Rotate - Marquee)
                    <div className="marquee reverse flex justify-center gap-10">
                        <Listing />
                    </div>
                </div>
<<<<<<< HEAD
                <div className="w-[105%] absolute -left-2 top-0 bg-white border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-yellow-500 py-3 md:py-4 lg:py-5 text-center overflow-hidden font-playfair font-bold text-yellow-500 text-base md:text-lg lg:text-xl 2xl:text-2xl rotate-3 rotate-6">
=======
                <div className="w-[105%] absolute -left-2 top-0 bg-white border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-yellow-500 py-3 md:py-4 lg:py-5 text-center overflow-hidden font-playfair font-bold text-yellow-500 text-base md:text-lg lg:text-xl 2xl:text-2xl rotate-3">
>>>>>>> parent of 71bf288 (Rotate - Marquee)
                    <div className="marquee flex justify-center gap-10">
                        <Listing />
                    </div>
                </div>

            </div>
        </div>
        
    )
}