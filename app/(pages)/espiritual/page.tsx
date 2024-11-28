import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import { excerptWords } from "@/app/parts/util/excerpt";
import axios from "axios";
import Image from "next/image";

export function SingleArticle(props:any) {
    const excerptDados = excerptWords(props.dados.content, 20);
    return(
        <div className="px-2 py-2">
            <a href={"/espiritual/" + props.dados.slug} className="h-full">
                <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-zinc-900">
                    <Image src={`/img/articles/${props.dados.img}`} width={313} height={320} alt="" className="w-full h-80 overflow-hidden object-cover" />
                    <div className="px-6 py-4 flex justify-between">
                        <div className="text-white">
                            <div className="pb-4">
                                <h3 className="text-lg text-yellow-500">{props.dados.title}</h3>
                                <p className="text-sm">{excerptDados}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export async function ListArticles () {
    const { data } = await axios.get(process.env.local_api + 'articles/find');
    return(
        <section className="min-h-96 my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {
                    (data) ? data.map((singleDados: any) => (
                        <SingleArticle key={singleDados.id} dados={singleDados} />
                    )) : null
                }
            </div>
        </section>
    )
}

export default function Espiritual() {
    return (
        <>
            <HeaderTitle title="Espiritual" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl uppercase">Conteúdos</h1>
                    <ListArticles />
                </div>
            </section>
        </>
    )
}