import axios from "axios";
import AgendaSingle from "./agendaSingle";

export default async function AgendaList() {
    const { data } = await axios.get(process.env.local_api + "agenda/find");
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                data.map((singleData: any) => (
                    <AgendaSingle key={singleData.id} dados={singleData} />
                ))
            }
        </div>
    )
}