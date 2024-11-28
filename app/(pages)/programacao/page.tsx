import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";

export function Videos(props:any) {
    return (
        <div className="mb-8">
            <h3 className="mb-3">{props.dados.title}</h3>
            <iframe className="w-full aspect-video rounded-xl md:rounded-2xl lazyloaded" data-src={`https://www.youtube.com/embed/${props.dados.video}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src={`https://www.youtube.com/embed/${props.dados.video}`} data-load-mode="1"></iframe>
        </div>
    )
}

export async function ContentVideos() {
    const { data } = await axios.get(process.env.local_api + "videos/find");
    return (
        <div>
            {
                data.map((singleData:any) => (
                    <Videos key={singleData.id} dados={singleData} />
                )) 
            }
        </div>
    )
}
export default function Programacao() {
    return (
        <>
            <HeaderTitle title="Programação" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <ContentVideos />
                </div>
            </section>
        </>
    )
}