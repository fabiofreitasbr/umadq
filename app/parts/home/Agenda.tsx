
function Evento() {
    return (
        <div className="border rounded-md py-3 px-4 md:py-5 md:px-7" >
            <div className="grid grid-cols-2">
                <div>
                    <p className="text-2xl md:text-3xl mb-2 text-azul-500 font-semibold text-yellow-500">22/11</p>
                    <h1 className="text-base  md:text-lg text-convite" >SEXTA-FEIRA</h1>
                </div>
                <div className="text-right">
                    <p className="text-xl md:text-2xl text-marrom-500">19:00</p>
                </div>
            </div>
            <hr className="w-full border my-6" />
            <p className="text-base md:text-xl text-icone font-light uppercase pb-2 text-yellow-500">CONGRESSO UMADQ</p>
            <p className="text-sm md:text-lg text-icone font-bold">SEDE</p>
        </div>
    )
}

export default function Agenda() {
    return (
        <div className="container mx-auto px-4 mt-10 min-h-[20rem]" >
            <div className="text-center pt-12 pb-8 md:pt-20 md:pb-14">
                <h2 className="text-center font-bodoni text-3xl xl:text-5xl 2xl:text-6xl text-marrom-500 ">AGENDA</h2>
            </div>
            <div className="pb-12 md:pb-28 relative ">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Evento />
                    <Evento />
                    <Evento />
                    <Evento />
                    <Evento />
                </div>
            </div>
        </div>
    )
}
