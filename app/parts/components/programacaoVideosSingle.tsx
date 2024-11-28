export default function ProgramacaoVideosSingle(props:any) {
    return (
        <div className="mb-8">
            <h3 className="mb-3">{props.dados.title}</h3>
            <iframe className="w-full aspect-video rounded-xl md:rounded-2xl lazyloaded" data-src={`https://www.youtube.com/embed/${props.dados.video}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src={`https://www.youtube.com/embed/${props.dados.video}`} data-load-mode="1"></iframe>
        </div>
    )
}