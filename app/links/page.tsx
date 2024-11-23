
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

export default function Index() {
    return (
        <div className="bg-cover bg-center flex justify-center items-center min-h-screen bg-fundo">
            <div className="container max-w-md px-4 ">
                <div className="m-4 text-center">
                    {/* <Image width={150} height={150} src={"img/person.jpg"} className="rounded-full border-2 md:border-4 border-white mx-auto w-24 md:w-36" alt="" /> */}
                </div>
                <div className="my-2 md:my-6 text-center">
                    {/* <Image width={150} height={150} src={"img/logo-new-white.png"} className="mx-auto w-2/3" alt="" /> */}
                </div>
                <div className="font-medium text-base md:text-lg lg:text-xl">
                    <Link href="http://instagram.com.br/umadqoficial" target="_blank">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-red-800 text-red-800  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faInstagram} /></div>
                            <div className="px-2"> Siga-me no insta</div>
                        </div>
                    </Link>
                    <Link href="https://www.youtube.com/@adqueimados-lazareto6184" target="_blank">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-red-800 text-red-800  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faYoutube} /></div>
                            <div className="px-2"> Canal do YouTube - Sede</div>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-red-800 text-red-800  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faLink} /></div>
                            <div className="px-2"> Entre no site</div>
                        </div>
                    </Link>
                    <Link href="https://www.facebook.com/umadqoficialbr" target="_blank">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-red-800 text-red-800  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faFacebookSquare} /></div>
                            <div className="px-2"> /umadqoficialbr</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
