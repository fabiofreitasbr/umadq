import HeaderTitle from "@/app/parts/estrutura/headerTitle";

export default function Equipe() {
    return (
        <>
            <HeaderTitle title="Equipe" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl uppercase mb-4">Conteúdos</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div className="bg-zinc-900 rounded-2xl p-6">
                            <div className="mt-8 text-center">
                                <img src="/img/equipe/fabiofreitas.jpg" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28 mb-6" />
                                <h5 className="hidden mt-4 text-xl font-semibold text-white lg:block">Fábio Freitas</h5>
                                <span className="hidden text-white lg:block">Produtor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}