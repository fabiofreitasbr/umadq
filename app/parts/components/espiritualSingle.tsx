import Image from "next/image";
import { excerptWords } from "../util/excerpt";

export default function EspiritualSingle(props:any) {
    const excerptDados = excerptWords(props.dados.content, 20);
    return(
        <div className="px-2 py-2">
            <a href={"/espiritual/" + props.dados.slug} className="h-full">
                <div className="rounded-xl h-full overflow-hidden bg-zinc-900 shadow-lg shadow-zinc-950 transition-all hover:scale-105">
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