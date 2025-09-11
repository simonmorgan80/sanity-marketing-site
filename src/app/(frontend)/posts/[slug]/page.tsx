import type { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import { POST_QUERY } from '@/sanity/lib/queries';
import { Post } from '@/components/Post';
import { notFound } from 'next/navigation';

type RouteProps = {
    params: Promise<{ slug: string }>;
};

const getPage = async (params: RouteProps['params']) =>
    sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

export async function generateMetadata({
    params,
}: RouteProps): Promise<Metadata> {
    const { data: page } = await getPage(params);

    return {
        title: page?.seo.title,
    };
}

export default async function Page({ params }: RouteProps) {
    const { data: post } = await getPage(params);

    if (!post) {
        notFound();
    }

    return (
        <>
            <main className="max-w-7xl mx-auto grid grid-cols-1 gap-6 p-6">
                <Post {...post} />
            </main>
        </>
    );
}
