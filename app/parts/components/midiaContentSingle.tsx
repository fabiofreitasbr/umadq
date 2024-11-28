import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MidiaContentSingle(props:any) {
    return (
        <div className=" border border-gray-700 rounded-lg p-4 md:p-6">
            <div className="bg-purple-100 text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2">
                <FontAwesomeIcon icon={faGoogleDrive} className="w-2.5 h-2.5 mr-1.5 text-xs" />
                {props.dados.category}
            </div>
            <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-2">{props.dados.title}</h2>
            <h3 className="text-gray-900 dark:text-white text-xs font-bold mb-2">{props.dados.subtitle}</h3>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">{props.dados.description}</p>
            <a target="_blank" href={props.dados.link}>
                <button className="py-2 px-6 rounded-md border-yellow-500 text-white border bg-transparent transition hover:bg-yellow-500 hover:text-black uppercase flex justify-center items-center gap-x-2">
                    <FontAwesomeIcon icon={faGoogleDrive} className="w-3.5 text-xs" />
                    Ver Arquivos
                </button>
            </a>
        </div>
    )
}