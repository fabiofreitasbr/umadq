import axios from "axios";
import EquipeVoluntarios from "./equipeVoluntarios";
import { Suspense } from "react";
import Loading from "./loading";

export default async function EquipeList(props: any) {
    const { data } = await axios.get(process.env.local_api + "equipe/find");
    return (
        <>
            {
                data.map((dadosEquipe: any) => (
                    <div key={dadosEquipe.slug}>
                        <h1 className="text-lg md:text-xl xl:text-2xl uppercase my-4" id-key={dadosEquipe.id}>{dadosEquipe.name}</h1>
                        <Suspense fallback={<Loading />}>
                            <EquipeVoluntarios id={dadosEquipe.id} />
                        </Suspense>
                        <hr className="border-zinc-800 mt-4" />
                    </div>
                ))
            }
        </>
    )
}