import EspiritualSlug from '@/app/parts/components/espiritualSlug';
import { Suspense } from 'react';
import Loading from '@/app/parts/components/loading';
import HeaderTitle from '@/app/parts/estrutura/headerTitle';

export default function Page({ params }: any) {
    return (
        <>
            <HeaderTitle title="Espiritual" />
            <section className="min-h-96 my-8">
                <div className="flex flex-wrap justify-center">
                    <Suspense fallback={<Loading />}>
                        <EspiritualSlug params={params} />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
