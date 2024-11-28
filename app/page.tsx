import Banner from "./parts/home/banner";
import Marquee from "./parts/home/marquee";
import Agenda from "./parts/home/Agenda";
import Template from "./(pages)/template";

export default function Home() {
    return (
        <Template>
            <main className="w-full overflow-x-hidden">
                <Banner />
                <Marquee />
                <Agenda />
            </main>
        </Template>
    );
}
