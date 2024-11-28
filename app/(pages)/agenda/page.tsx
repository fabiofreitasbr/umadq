import AgendaList from "@/app/parts/components/agendaList";
import Loading from "@/app/parts/components/loading";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import { Suspense } from "react";

export default function Page() {
    return (
        <>
            <HeaderTitle title="Eventos" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <Suspense fallback={<Loading />}>
                        <AgendaList />
                    </Suspense>
                </div>
            </section>
        </>
    )
}