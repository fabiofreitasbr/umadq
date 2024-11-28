import axios from "axios";
import EspiritualSingle from "./espiritualSingle";

export default async function EspiritualList () {
    const { data } = await axios.get(process.env.local_api + 'articles/find');
    return(
        <section className="min-h-96 my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {
                    (data) ? data.map((singleDados: any) => (
                        <EspiritualSingle key={singleDados.id} dados={singleDados} />
                    )) : null
                }
            </div>
        </section>
    )
}