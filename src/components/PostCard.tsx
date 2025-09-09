import { Author } from '@/components/Author';
import { Categories } from '@/components/Categories';
import { POSTS_QUERYResult } from '@/sanity/types';
import { PublishedAt } from '@/components/PublishedAt';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export function PostCard(props: POSTS_QUERYResult[0]) {
    const { title, author, mainImage, publishedAt, categories } = props;

    return (
        <Link className="group" href={`/posts/${props.slug!.current}`}>
            <article className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12">
                <div className="md:col-span-8 md:w-full">
                    <Categories categories={categories} />
                    <h2 className="text-2xl text-pretty font-semibold transition-colors relative mt-4">
                        <span className="relative z-[1]">{title}</span>
                    </h2>
                    <div className="flex items-center mt-2 md:mt-6 gap-x-6">
                        <Author author={author} />
                        <PublishedAt publishedAt={publishedAt} />
                    </div>
                </div>
                <div className="md:col-span-4 overflow-hidden flex">
                    {mainImage ? (
                        <Image
                            className="w-full"
                            src={urlFor(mainImage).width(400).height(200).url()}
                            width={400}
                            height={200}
                            alt={mainImage.alt || title || ''}
                        />
                    ) : null}
                </div>
            </article>
        </Link>
    );
}
