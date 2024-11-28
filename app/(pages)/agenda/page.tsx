import AgendaList from "@/app/parts/components/agendaList";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";

export default function Page() {
    return (
        <>
            <HeaderTitle title="Eventos" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <AgendaList />
                </div>
            </section>
        </>
    )
}