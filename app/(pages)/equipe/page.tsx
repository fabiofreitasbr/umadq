
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import { excerptCharacters } from "@/app/parts/util/excerpt";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";

export function Voluntario(props: any) {
    return (
        <div className="bg-zinc-900 rounded-2xl px-4 pt-8 pb-6" id-key={props.dados.id}>
            <div className="text-center">
                <Image src={`/img/equipe/${props.dados.instagram}.jpg`} width={112} height={112} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28 mb-6" />
                <div className="mb-4">
                    <h5 className="hidden mt-4 text-lg font-semibold text-white lg:block">{props.dados.name}</h5>
                    <span className="hidden text-sm text-white lg:block">{props.dados.role}</span>
                </div>
                <a href={`https://www.instagram.com/${props.dados.instagram}`} target="_blank">
                    <button className="w-full bg-red-500 hover:bg-red-600 py-2 px-3 lg:px-6 rounded-md text-white flex items-center justify-center gap-x-2 transition-all text-sm">
                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                        <span className="hidden lg:inline"> {excerptCharacters(props.dados.instagram, 15)} </span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export async function ListEquipe(props: any) {
    const { data } = await axios.get(process.env.local_api + "pessoas/find", {params: {id: props.id}});
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {
                data.map((singleData: any) => (
                    <Voluntario key={singleData.id} dados={singleData} />
                ))
            }
        </div>
    )
}
export async function ContentEquipe(props: any) {
    const { data } = await axios.get(process.env.local_api + "equipe/find");
    return (
        <>
            {
                data.map((dadosEquipe: any) => (
                    <div key={dadosEquipe.slug}>
                        <h1 className="text-2xl uppercase my-4" id-key={dadosEquipe.id}>{dadosEquipe.name}</h1>
                        <ListEquipe id={dadosEquipe.id} />
                        <hr className="border-zinc-800 mt-4" />
                    </div>
                ))
            }
        </>
    )
}
export default function Equipe() {
    return (
        <>
            <HeaderTitle title="Equipe" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <ContentEquipe />
                </div>
            </section>
        </>
    )
}