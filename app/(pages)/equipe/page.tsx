
import EquipeList from "@/app/parts/components/equipeList";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";

export default function Page() {
    return (
        <>
            <HeaderTitle title="Equipe" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <EquipeList />
                </div>
            </section>
        </>
    )
}