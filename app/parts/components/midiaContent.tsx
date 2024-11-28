import axios from "axios";
import MidiaContentSingle from "./midiaContentSingle";

export default async function MidiaContent() {
    const { data } = await axios.get(process.env.local_api + "drive/find");
    return(
        <div className="grid md:grid-cols-4 gap-8 mb-8">
            {
                data.map((singleData:any) => (
                    <MidiaContentSingle key={singleData.id} dados={singleData} />
                )) 
            }
        </div>
    )
}