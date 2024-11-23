"use client"
import React from 'react';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import ContentLinks from '../dados/contentLinks';

export default function Depoimentos() {
    const splideOptions: any = {
        perPage: 2,
        perMove: 1,
        type: 'loop',
        drag: 'free',
        snap: true,
        gap: '1rem',
        pagination: false,
        breakpoints: {
            640: { perPage: 1, },
            960: { perPage: 2, },
            1200: { perPage: 2, },
        },
    }
    return (
        <>
            <section id="servicos" className="py-10">
                <div className="container mx-auto py-2 px-4">
                    <div className="my-4 text-center">
                        <h2 className="text-purple-500 uppercase font-bold text-xl md:text-2xl my-2">Depoimentos</h2>
                    </div>
                </div>
                <div className="container mx-auto my-4 px-4 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="text-sm md:text-xl text-black rounded-xl">
                            <div className="text-md md:text-lg py-6 md:p-6 my-3 md:mt-0">
                                <div className="text-3xl pb-8">
                                    O que nossos clientes falam sobre nosso serviço.
                                </div>
                                <Link href={ContentLinks.whatsapp}><button type="button" className="py-2 px-6 text-base rounded-md bg-purple-500 hover:bg-purple-600 transform hover:scale-105 duration-300 transition delay-300 text-white uppercase flex justify-center items-center gap-x-2">eu quero saber mais</button></Link>
                            </div>
                        </div>
                        <Splide options={splideOptions} aria-label="Slide de Vídeos">
                            <SplideSlide>
                                <div className="bg-white border-2 border-gray-100 shadow-sm rounded-xl md:rounded-3xl text-center flex flex-col items-center justify-center text-purple-500 font-brandon py-4 px-2 sm:px-4 h-full">
                                    <p className="py-1 text-gray-700 text-xs md:text-sm">Estou extremamente satisfeito com os serviços da Good Sun Solar! Eles foram profissionais desde o primeiro contato até a conclusão da instalação. Agora, minha casa está economizando energia. Recomendo a todos!</p>
                                    <div className="py-2 uppercase font-bold text-sm sm:text-sm lg:text-base">Pedro - Freguesia (RJ)</div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white border-2 border-gray-100 shadow-sm rounded-xl md:rounded-3xl text-center flex flex-col items-center justify-center text-purple-500 font-brandon py-4 px-2 sm:px-4 h-full">
                                    <p className="py-1 text-gray-700 text-xs md:text-sm">Contratei a Good Sun Solar para instalar painéis solares em meu negócio e não poderia estar mais feliz com os resultados. Além de economizar significativamente em minhas contas de energia, estou contribuindo para um futuro mais sustentável. Obrigado, Felipe e Ricardo!</p>
                                    <div className="py-2 uppercase font-bold text-sm sm:text-sm lg:text-base">Marcos - Caxias (RJ)</div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white border-2 border-gray-100 shadow-sm rounded-xl md:rounded-3xl text-center flex flex-col items-center justify-center text-purple-500 font-brandon py-4 px-2 sm:px-4 h-full">
                                    <p className="py-1 text-gray-700 text-xs md:text-sm">Excelente empresa de energia solar! A equipe da Good Sun Solar, principalmente o Rodrigo e o Felipe foram muito prestativos e competente durante todo o processo. Agora, minha família desfruta de energia limpa e renovável em casa. Sem dúvida, recomendo seus serviços a todos que buscam economia na conta da Light.</p>
                                    <div className="py-2 uppercase font-bold text-sm sm:text-sm lg:text-base">Eduardo - Cachambi (RJ)</div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white border-2 border-gray-100 shadow-sm rounded-xl md:rounded-3xl text-center flex flex-col items-center justify-center text-purple-500 font-brandon py-4 px-2 sm:px-4 h-full">
                                    <p className="py-1 text-gray-700 text-xs md:text-sm">Contratar a Good Sun Solar foi a melhor decisão que tomei para minha casa. Além de reduzir drasticamente minha conta de energia da Light, estou orgulhoso por estar utilizando uma fonte de energia limpa e renovável. Recomendo a Good Sun Solar a todos que desejam fazer a transição para a energia solar e economizar.</p>
                                    <div className="py-2 uppercase font-bold text-sm sm:text-sm lg:text-base">Ana Costa - Petrópolis (RJ)</div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </section>
        </>
    )
}