import Image from 'next/image';
import axios from 'axios';
import HeaderTitle from '@/app/parts/estrutura/headerTitle';
import Link from 'next/link';
import EspiritualSlug, { slugArticle } from '@/app/parts/components/espiritualSlug';

export default function Page({ params }: slugArticle) {
    return <EspiritualSlug params={params} />;
}
