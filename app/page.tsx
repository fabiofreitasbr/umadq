import Image from "next/image";
import Logo from "@/public/img/logo-congresso.png"
import Banner from "./parts/home/banner";
import Header from "./parts/estrutura/header";
import Footer from "./parts/estrutura/footer";
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
