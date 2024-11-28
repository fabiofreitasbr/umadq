import EspiritualSlug, { slugArticle } from '@/app/parts/components/espiritualSlug';
import { Suspense } from 'react';
import Loading from '@/app/parts/components/loading';

export default function Page({ params }: slugArticle) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <EspiritualSlug params={params} />
            </Suspense>
        </>
    );
}
