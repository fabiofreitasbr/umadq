
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import ContentLinks from '../dados/contentLinks';

const Footer = () => {
    return (
        <footer className="bg-black py-8 md:py-12 block text-white p-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center flex-col">
                    <h3 className="text-center text-2xl md:text-3xl mb-4 font-playfair font-bold text-beige-500">Siga-nos no instagram</h3>
                    <Link href={ContentLinks.instagram}>
                        <button type="button" className="w-full border border-zinc-200 text-white transition font-medium rounded-full my-2 py-3 px-8 flex justify-center items-center text-sm lg:text-base gap-3 transform hover:scale-105 duration-300">
                            <FontAwesomeIcon icon={faInstagram} className="h-4 md:h-6 w-4 md:w-6" /> 
                            <div> @umadqoficial</div>
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
