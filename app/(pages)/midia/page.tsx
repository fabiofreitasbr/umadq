import MidiaContent from "@/app/parts/components/midiaContent";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";

export default function Page() {
    return (
        <>
            <HeaderTitle title="Fotos e Vídeos" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl uppercase mb-4">Arquivos de Fotos e Vídeos</h1>
                    <div>
                        <MidiaContent />
                    </div>
                </div>
            </section>
        </>
    )
}