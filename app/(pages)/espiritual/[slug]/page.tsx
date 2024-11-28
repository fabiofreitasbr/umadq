import Image from 'next/image';
import axios from 'axios';
import HeaderTitle from '@/app/parts/estrutura/headerTitle';
import Link from 'next/link';

export interface slugArticle {
    params: { slug: string },
}

async function ArticleSingle({ params }: slugArticle) {
    const { data } = await axios.get(process.env.local_api + "articles/single", { params: { slug: params.slug } });
    return (
        <>
            <HeaderTitle title={data.title} />
            <section className="min-h-96 my-8">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full max-w-xl">
                        <div className="">
                            <Image src={"/img/articles/" + data.img} width={1080} height={500} alt="" className="w-full aspect-[16/8] overflow-hidden object-cover rounded-xl" />
                        </div>
                        <div className="py-4 text-base text-gray-500">
                            <h3 className="text-yellow-500 my-2 text-lg lg:text-xl xl:text-2xl font-open">{data.title}</h3>
                            <p className='text-white text-justify'>{data.content}</p>
                        </div>
                        <Link href="/espiritual"><button className="py-2 px-6 rounded-md border-yellow-500 text-white border bg-transparent transition hover:bg-yellow-500 hover:text-black uppercase flex justify-center items-center gap-x-2">Voltar</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default function Page({ params }: slugArticle) {
    return <ArticleSingle params={params} />;
}
