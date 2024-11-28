import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { excerptCharacters } from "../util/excerpt";
import Image from "next/image";

export default function EquipeVoluntariosSingle(props: any) {
    return (
        <div className="bg-zinc-900 rounded-2xl px-2 md:px-4 pt-6 md:pt-8 pb-4 md:pb-6" id-key={props.dados.id}>
            <div className="text-center">
                <Image src={`/img/equipe/${props.dados.instagram}.jpg`} width={112} height={112} alt="" className="w-16 h-16 m-auto rounded-full object-cover lg:w-28 lg:h-28 mb-6" />
                <div className="mb-4">
                    <h5 className="mt-4 text-sm md:text-base xl:text-lg font-semibold text-white">{props.dados.name}</h5>
                    <span className="text-xs md:text-sm text-white">{props.dados.role}</span>
                </div>
                <a href={`https://www.instagram.com/${props.dados.instagram}`} target="_blank">
                    <button className="w-full bg-red-500 hover:bg-red-600 py-2 px-3 lg:px-6 rounded-md text-white flex items-center justify-center gap-x-2 transition-all text-xs md:text-sm">
                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                        <span className="inline"> {excerptCharacters(props.dados.instagram, 15)} </span>
                    </button>
                </a>
            </div>
        </div>
    )
}