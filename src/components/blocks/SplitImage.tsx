import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PAGE_QUERYResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';
import { stegaClean } from 'next-sanity';

type SplitImageProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number],
    { _type: 'splitImage' }
>;

export function SplitImage({
    title,
    text,
    image,
    orientation,
}: SplitImageProps) {
    return (
        <section className="max-w-7xl mx-auto my-16 lg:my-24 px-6">
            <div
                className="flex flex-wrap gap-8 md:flex-nowrap data-[orientation='imageRight']:flex-row-reverse"
                data-orientation={stegaClean(orientation) || 'imageLeft'}
            >
                {image ? (
                    <div className="md:w-1/2">
                        <Image
                            className="aspect-video h-auto w-full"
                            src={urlFor(image).width(800).height(600).url()}
                            width={800}
                            height={600}
                            alt=""
                        />
                    </div>
                ) : null}
                <div className="md:w-1/2">
                    {title ? (
                        <h2 className="text-3xl lg:text-4xl justify-start font-semibold text-slate-80 mb-8">
                            {title}
                        </h2>
                    ) : null}

                    <div className="prose lg:prose-xl">
                        {text ? <PortableText value={text} /> : null}
                    </div>
                </div>
            </div>
        </section>
    );
}
