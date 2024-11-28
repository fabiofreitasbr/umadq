import ProgramacaoVideos from "@/app/parts/components/programacaoVideos";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";

export default function Page() {
    return (
        <>
            <HeaderTitle title="Programação" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <ProgramacaoVideos />
                </div>
            </section>
        </>
    )
}