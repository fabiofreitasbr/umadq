import axios from "axios";
import EquipeVoluntariosSingle from "./equipeVoluntariosSingle";

export default async function EquipeVoluntarios(props: any) {
    const { data } = await axios.get(process.env.local_api + "pessoas/find", {params: {id: props.id}});
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {
                data.map((singleData: any) => (
                    <EquipeVoluntariosSingle key={singleData.id} dados={singleData} />
                ))
            }
        </div>
    )
}