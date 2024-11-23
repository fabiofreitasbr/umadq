import Image from "next/image";
import Logo from "@/public/img/logo-congresso.png"
import Banner from "./parts/home/banner";
import Header from "./parts/estrutura/header";
import Footer from "./parts/estrutura/footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Banner />
            <Footer />
        </main>
    );
}
