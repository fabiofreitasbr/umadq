import EspiritualList from "@/app/parts/components/espiritualList";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";

export default function Page() {
    return (
        <>
            <HeaderTitle title="Espiritual" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl uppercase">Conteúdos</h1>
                    <EspiritualList />
                </div>
            </section>
        </>
    )
}