import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ContentBeneficios from "@/app/parts/dados/contentBeneficios";
import Hand from "../icons/hand";

export default function listBeneficios() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            {
                ContentBeneficios.map((singleServicos) => (
                    <div key={singleServicos.slug}>
                        <div className="h-full sm:h-64 rounded-xl sm:rounded-3xl text-center flex flex-col justify-center items-center text-white text-lg sm:text-2xl px-2 py-4 md:p-4">
                            <FontAwesomeIcon icon={singleServicos.icon} className="h-14 w-14 text-4xl mx-auto text-gray-200" />
                            <h3 className="text-xs md:text-xl py-6 text-purple-600 ">{singleServicos.title}</h3>
                            <h3 className="text-xs md:text-sm text-gray-200 font-light">{singleServicos.content}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}