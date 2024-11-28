import Loading from "@/app/parts/components/loading";
import MidiaContent from "@/app/parts/components/midiaContent";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import { Suspense } from "react";

export default function Page() {
    return (
        <>
            <HeaderTitle title="Fotos e Vídeos" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl uppercase mb-4">Arquivos de Fotos e Vídeos</h1>
                    <div>
                        <Suspense fallback={<Loading />}>
                            <MidiaContent />
                        </Suspense>
                    </div>
                </div>
            </section>
        </>
    )
}