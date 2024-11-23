import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContentLinks from "../dados/contentLinks";
import Link from "next/link";

const Diferencial = () => {
    return (
        <section className="py-20 bg-cover bg-center">
            <div className="container mx-auto px-4">

                <div className="block lg:flex lg:flex-row-reverse">
                    <div className="mx-auto lg:mx-0 lg:w-3/6 px-4 mb-6 lg:mb-0">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                            <Image src="/img/foto-grupo.png" width={720} height={405} alt="Estúdio Grape" className="w-full rounded-xl md:rounded-2xl lg:rounded-3xl row-span-2 lg:row-span-1 lg:col-span-2 h-full md:h-auto md:aspect-square lg:aspect-video object-cover" />
                            <Image src="/img/consulado.png" width={720} height={405} alt="Estúdio Grape" className="w-full rounded-xl md:rounded-2xl lg:rounded-3xl aspect-square object-cover" />
                            <Image src="/img/evento.png" width={720} height={405} alt="Estúdio Grape" className="w-full rounded-xl md:rounded-2xl lg:rounded-3xl aspect-square object-cover" />
                        </div>
                    </div>
                    <div className="lg:w-3/6 px-4">
                        <div className="text-sm md:text-base lg:text-lg text-justify lg:text-left">
                            <h2 className="text-center lg:text-left text-2xl lg:text-3xl xl:text-4xl py-4 font-playfair font-semibold text-purple-700">Nosso Diferencial</h2>
                            <p className="py-2 font-light">Na cidade do <span className="font-bold"> Rio de Janeiro</span> existe uma vasta quantidade e opções de <span className="font-bold">projetos sociais e redes de apoio</span> com foco em diversas áreas;</p>

                            <p className="py-2 font-light">Mas só o <span className="font-bold">Projeto Mulheres de Frente</span> considera exclusivamente as necessidades Delas e tem foco nas particularidades de cada situação, <span className="font-bold">Mulheres em situação de vulnerabilidade socioeconômica, vítimas de violência, mães solo, jovens em busca de oportunidades educacionais e profissionais e Mulheres empreendedoras em geral</span>, são potenciais alvos e objetivos deste Projeto.</p>
                            <h2 className="text-center lg:text-left text-2xl lg:text-3xl xl:text-4xl py-4 font-playfair font-semibold text-purple-700">Nosso Objetivos</h2>
                            <p className="py-2 font-light">Nosso objetivo é proporcionar <span className="font-bold">apoio, educação, capacitação e recursos financeiros para melhorar as condições de vida destas mulheres</span> e promover a <span className="font-bold">igualdade de oportunidades </span>.</p>

                            <h2 className="text-center lg:text-left text-2xl lg:text-3xl xl:text-4xl py-4 font-playfair font-semibold text-purple-700">Propósito do Projeto</h2>
                            <p className="py-2 font-light">Empreendedorismo feminino é uma estratégia eficaz para combater a violência contra as mulheres, pois promove o <span className="font-bold">empoderamento econômico, a criação de oportunidades, a redução da dependência, o engajamento comunitário e a inovação</span>. Ao <span className="font-bold">capacitar as mulheres e criar um ambiente mais equitativo</span>, o empreendedorismo feminino desempenha um papel vital na <span className="font-bold">criação de uma sociedade livre de violência de gênero e mais igualitária</span>.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <Link href={ContentLinks.whatsapp} target="_blank">
                        <button type="submit" className="py-2 px-6 text-base rounded-full bg-purple-700 hover:bg-purple-600 transform hover:scale-105 duration-300 transition delay-300 text-beige-500 uppercase flex justify-center items-center gap-x-2">
                            <FontAwesomeIcon icon={faArrowRight} />Quero Participar
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default Diferencial;