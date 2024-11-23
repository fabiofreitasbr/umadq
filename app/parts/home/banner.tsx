import { faCheckSquare, faCreditCard, faIndustry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import logoCongresso from "@/public/img/logo-congresso.png"
import imgGuerreiro from  "@/public/img/guerreiro.png"

export default function Banner() {
    return (
        <>
            <div id="banner" className="relative overflow-hidden bg-cover bg-fundo bg-center min-h-[20rem] md:h-[36rem] lg:h-[42rem] 2xl:h-[48rem] pt-10">
                <div className="container mx-auto px-10 md:px-4 h-full">
                    <div className="md:flex items-center justify-center h-full">
                        <div className="w-full relative z-50 md:w-1/2 h-full flex flex-col justify-center mb-4 ">
                            <div className=" container mx-auto max-w-lg">
                                <h2 className="text-4xl text-yellow-500 pb-4">11º CONGRESSO JOVEM</h2>
                                <h3 className="text-xl pb-6 font-light">União de Mocidade das Assembleias de Deus em Queimados apresenta o tema de guerra espiritual baseado em efésios 6.</h3>
                                <button className="border-2 border-whiite font-normal text-lg py-2 px-3 lg:px-6 rounded-md text-white flex items-center transition-all mx-auto md:mx-0"><span className="inline"> CONFIRMAR PRESENÇA </span></button>
                            </div>
                        </div>
                        <div className="absolute z-10 md:relative -right-[65%] sm:-right-[55%] md:right-auto bottom-0 md:bottom-auto md:w-1/2 md:bg-guerreiro bg-contain bg-bottom bg-no-repeat h-full opacity-40 sm:opacity-40 md:opacity-40">
                            <Image src={imgGuerreiro} width={752} height={652} className="h-full md:w-3/4 object-contain md:invisible" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}