import Image from "next/image";
import Logo from "@/public/img/logo-congresso.png"
import Banner from "./parts/home/banner";
import Header from "./parts/estrutura/header";
import Footer from "./parts/estrutura/footer";
import Marquee from "./parts/home/marquee";
import Agenda from "./parts/home/Agenda";

export default function Home() {
    return (
        <main>
            <Header />
            <Banner />
            <Marquee />
            <Agenda />
            <Footer />
        </main>
    );
}
