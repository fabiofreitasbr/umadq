import axios from "axios";
import ProgramacaoVideosSingle from "./programacaoVideosSingle";

export default async function ProgramacaoVideos() {
    const { data } = await axios.get(process.env.local_api + "videos/find");
    return (
        <div>
            {
                data.map((singleData:any) => (
                    <ProgramacaoVideosSingle key={singleData.id} dados={singleData} />
                )) 
            }
        </div>
    )
}