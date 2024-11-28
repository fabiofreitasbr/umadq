"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const namePath = usePathname();
    const menuFlutuante = (namePath == "/") ? "absolute " : "bg-fundo bg-cover bg-top relative";

    const [menuActive, setMenuActive] = useState("");
    const [menuNavigation, setMenuNavigation] = useState("-right-full");

    const menuBurger = () => {
        const currentActive = (menuActive == '') ? 'is-active' : '';
        const currentNavigation = (menuActive == '') ? 'right-0' : "-right-full";
        setMenuActive(currentActive);
        setMenuNavigation(currentNavigation);
    }
    return (
        <>
            <header className={" w-full py-2 z-50 " + menuFlutuante}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-row justify-between items-center">
                        <div className="logo z-20">
                            <Link href="/"><Image src="/img/logo-congresso.png" width={126} height={58} className="h-12 sm:h-16 w-auto" alt="Logo - Viva Musica" /></Link>
                        </div>
                        <nav className="flex items-center gap-x-10">
                            <ul className="hidden md:flex gap-x-5 xl:gap-x-10 text-base xl:text-lg font-medium">
                                <li><Link href="/" className={"text-white hover:text-orange-500 transition-colors " + (namePath == '/' ? " !text-orange-500" : "")}>Início</Link></li>
                                <li><Link href="/agenda" className={"text-white hover:text-orange-500 transition-colors " + (namePath == '/sobre' ? " !text-orange-500" : "")}>Agenda</Link></li>
                                <li><Link href="/midia" className={"text-white hover:text-orange-500 transition-colors " + (namePath == '/servicos' ? " !text-orange-500" : "")}>Fotos e Vídeos</Link></li>
                                <li><Link href="/espiritual" className={"text-white hover:text-orange-500 transition-colors " + (namePath == '/contato' ? " !text-orange-500" : "")}>Espiritual</Link></li>
                                <li><Link href="/programacao" className={"text-white hover:text-orange-500 transition-colors " + (namePath == '/contato' ? " !text-orange-500" : "")}>Programação</Link></li>
                                <li><Link href="/equipe" className={"text-white hover:text-orange-500 transition-colors " + (namePath == '/contato' ? " !text-orange-500" : "")}>Equipe</Link></li>
                            </ul>

                            <div className="flex items-center gap-x-4 ">

                                <div className="z-20 block md:hidden" onClick={menuBurger}>
                                    <div className={"hamburger hamburger--squeeze " + menuActive}>
                                        <div className="hamburger-box">
                                            <div className="hamburger-inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <nav onClick={menuBurger} className={"block md:hidden z-40 w-full h-screen bg-red-600 fixed top-0 px-6 pt-28 transition-all duration-300 ease-in-out " + menuNavigation}>
                <div className="container mx-auto">
                    <ul className="flex flex-col gap-5 xl:gap-10 text-2xl font-medium">
                        <li><Link href="/" className="text-white">Home</Link></li>
                        <li><Link href="/eventos" className="text-white">Eventos</Link></li>
                        <li><Link href="/programacao" className="text-white">Programação</Link></li>
                        <li><Link href="/espiritual" className="text-white">Espiritual</Link></li>
                        <li><Link href="/programacao" className="text-white">Programação</Link></li>
                        <li><Link href="/equipe" className="text-white">Equipe</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}