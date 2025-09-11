import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { Title } from '@/components/Title';
import { urlFor } from '@/sanity/lib/image';
import { PAGE_QUERYResult } from '@/sanity/types';

type HeroProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number],
    { _type: 'hero' }
>;

export function Hero({ title, text, image }: HeroProps) {
    return (
        <section className="isolate w-full py-16 relative overflow-hidden">
            <div className="relative flex flex-col justify-center items-center gap-8 z-20 px-6 text-white text-center">
                {title ? <Title>{title}</Title> : null}
                <div className="prose lg:prose-xl text-white text-center max-w-3xl">
                    {text ? <PortableText value={text} /> : null}
                </div>
            </div>
            <div className="absolute inset-0 bg-gray-800 opacity-50 z-10" />
            {image ? (
                <Image
                    className="absolute inset-0 object-cover w-full h-full"
                    src={urlFor(image).width(1600).height(800).url()}
                    width={1600}
                    height={800}
                    alt=""
                />
            ) : null}
        </section>
    );
}
