"use client"
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";

export default function Call() {
    return (
        <section className=" py-10 md:py-16 bg-call bg-cover bg-center bg-purple-600">
            <div className="container mx-auto px-4">
                <div className="block lg:flex">
                    <div className="lg:w-7/12">
                        <h3 className="text-center lg:text-left text-zinc-100 text-xl md:text-3xl uppercase py-4 font-medium">COMECE A ECONOMIZAR ATÉ 95% <br /> NA CONTA DE ENERGIA</h3>
                    </div>
                    <div className="lg:w-5/12">
                        <Link href={ContentLinks.whatsapp}><button type="button" className="bg-black hover:bg-zinc-900 transform hover:scale-105 duration-300 transition text-white font-medium rounded-md my-4 py-2 md:py-3 px-8 md:px-10 xl:px-16 block text-lg mx-auto uppercase">Solicite um orçamento</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}