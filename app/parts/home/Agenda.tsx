import { toZonedTime } from 'date-fns-tz';
import axios from "axios";
import AgendaList from '../components/agendaList';

export default async function Agenda() {
    return (
        <div className="container mx-auto px-4 mt-10 min-h-[20rem]" >
            <div className="text-center pt-12 pb-8 md:pt-20 md:pb-14">
                <h2 className="text-center font-bodoni text-3xl xl:text-5xl 2xl:text-6xl text-marrom-500 ">AGENDA</h2>
            </div>
            <div className="pb-12 md:pb-28 relative ">
                <AgendaList />
            </div>
        </div>
    )
}
