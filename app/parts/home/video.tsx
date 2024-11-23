export default function Video() {
    return (
        <section className="z-10 relative py-12">
            <div className="z-20 relative container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="mx-auto w-full lg:w-1/2">
                        <iframe src="https://www.youtube.com/embed/iX_9eGI87ZE?si=hN9AZUaKXAr0mNU7" title="YouTube video player" className="w-full aspect-video rounded-2xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}