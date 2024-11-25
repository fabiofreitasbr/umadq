import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Agenda from "@/app/parts/home/Agenda";

export default function Eventos() {
    return (
        <>
            <HeaderTitle title="Eventos" />
            <section className="min-h-96 my-8">
                <div className="container mx-auto px-4">
                    <Agenda />
                </div>
            </section>
        </>
    )
}