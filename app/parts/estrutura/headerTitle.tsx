interface propsHeaderTitle {
    title: string
}

export default function HeaderTitle(props:propsHeaderTitle) {
    return (
        <div className="bg-gray-200 py-6 md:py-8 lg:py-10">
            <div className="container mx-auto px-4 text-center text-2xl md:text-3xl lg:text-4xl uppercase text-blue-500 font-medium">{props.title}</div>
        </div>
    )
}