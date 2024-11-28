import { toZonedTime } from 'date-fns-tz';
import axios from "axios";

function Evento(props: any) {
    const dateEvent = new Date(props.dados.date);
    const localHour = dateEvent.getUTCHours();
    dateEvent.setHours(localHour);

    const day = String(dateEvent.getDate()).padStart(2, '0');
    const month = String(dateEvent.getMonth()).padStart(2, '0');
    const diaDaSemana = Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
    }).format(dateEvent);
    const dataDiaMes = `${day}/${month}`;

    const hours = String(dateEvent.getHours()).padStart(2, '0');
    const minutes = String(dateEvent.getMinutes()).padStart(2, '0');
    const horarioEvent = `${hours}:${minutes}`;
    return (
        <div className="border rounded-md py-3 px-4 md:py-5 md:px-7 overflow-hidden relative" >
            <div className="grid grid-cols-2">
                <div>
                    <p className="text-2xl md:text-3xl mb-2 text-azul-500 font-semibold text-yellow-500">{dataDiaMes}</p>
                    <h1 className="text-sm md:text-base uppercase" >{diaDaSemana}</h1>
                </div>
                <div className="text-right">
                    <p className="text-xl md:text-2xl text-marrom-500">{horarioEvent}</p>
                </div>
            </div>
            <hr className="w-full border my-6" />
            <p className="text-base md:text-xl text-icone font-light uppercase pb-2 text-yellow-500">{props.dados.nome}</p>
            <p className="text-sm md:text-lg text-icone font-bold">{props.dados.local}</p>
            {
                (props.dados.realized) ? (<div className="absolute top-[13%] -right-[35%] bg-red-500 text-sm md:text-base w-full rotate-45 text-white text-center">REALIZADO</div>) : null
            }
        </div>
    )
}

export default async function Agenda() {
    const { data } = await axios.get(process.env.local_api + "agenda/find");
    return (
        <div className="container mx-auto px-4 mt-10 min-h-[20rem]" >
            <div className="text-center pt-12 pb-8 md:pt-20 md:pb-14">
                <h2 className="text-center font-bodoni text-3xl xl:text-5xl 2xl:text-6xl text-marrom-500 ">AGENDA</h2>
            </div>
            <div className="pb-12 md:pb-28 relative ">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        data.map((singleData: any) => (
                            <Evento key={singleData.id} dados={singleData} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
