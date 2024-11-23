"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import ContentLinks from "../dados/contentLinks";

export default function Missao() {
    return (
        <section className=" py-10 md:py-16 bg-cover bg-center bg-beige-500 text-purple-700">
            <div className="container mx-auto px-4">

                <div className="md:grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="py-4 md:py-2">
                        <div className="text-center">
                            <h3 className="py-2 md:py-4 text-2xl lg:text-3xl font-bold font-playfair">Nossa Missão</h3>
                            <h4 className="text-base md:text-lg font-light">Gerar Protagonismo, União e Crescimento para mulheres empreendedoras.</h4>
                        </div>
                    </div>
                    <div className="py-4 md:py-2">
                        <div className="text-center">
                            <h3 className="py-2 md:py-4 text-2xl lg:text-3xl font-bold font-playfair">Nossa visão</h3>
                            <h4 className="text-base md:text-lg font-light">Ser reconhecida como a maior roda de negócios feminina da América Latina</h4>
                        </div>
                    </div>
                    <div className="py-4 md:py-2">
                        <div className="text-center">
                            <h3 className="py-2 md:py-4 text-2xl lg:text-3xl font-bold font-playfair">Valores</h3>
                            <h4 className="text-base md:text-lg font-light">Ética, União, Liderança, Excelência, Respeito,  Contribuição, comprometimento, Responsabilidade social e Garra.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}