import Image from "next/image";
import Logo from "@/public/img/logo.png"

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center justify-center p-24">
            <Image src={Logo} width={226} height={109} alt="Logo - Umadq" />
        </main>
    );
}
