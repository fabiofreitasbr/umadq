import { faCheckSquare, faCreditCard, faIndustry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import logoCongresso from "@/public/img/logo-congresso.png"
export default function Banner() {
    return (
        <>
            <div id="banner" className="relative overflow-hidden bg-cover bg-fundo bg-center min-h-[20rem] md:h-[36rem] lg:h-[42rem] 2xl:h-[48rem] pt-10">
                <div className="container mx-auto px-10 md:px-4 h-full">
                    <div className="md:flex items-center justify-center h-full">
                        <div className="w-full relative z-50 md:w-1/2 h-full flex flex-col justify-center mb-4 ">
                            <div className=" container mx-auto max-w-lg">
                                <Image className="w-1/2 md:mx-auto" width={624} height={535} alt="Logo - Mulheres de Frente - Juntas Pela Igualdade" src={logoCongresso} />
                                <h3 className="text-white text-xl md:text-xl 2xl:text-2xl text-left md:text-center my-6 font-poppins font-medium">VENHA PARTICIPAR DESSE MOMENTO <br className="hidden md:block" />IMPORTANTE E TRAGA SUA FAMÍLIA!</h3>
                            </div>
                        </div>
                        <div className="absolute z-10 md:relative -right-[65%] sm:-right-[55%] md:right-auto bottom-0 md:bottom-auto md:w-1/2 md:bg-feature bg-contain bg-bottom bg-no-repeat h-full opacity-50 sm:opacity-60 md:opacity-100">
                            <Image src="/img/img-banner.png" width={752} height={652} className="h-full md:w-3/4 object-contain md:invisible" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}