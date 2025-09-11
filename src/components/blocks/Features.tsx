import { PAGE_QUERYResult } from '@/sanity/types';

type FeaturesProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number],
    { _type: 'features' }
>;

export function Features({ features, title }: FeaturesProps) {
    return (
        <section className="max-w-7xl mx-auto my-16 lg:my-24 px-6">
            {title ? (
                <h2 className="text-3xl text-center lg:text-4xl font-semibold text-slate-800 mb-16">
                    {title}
                </h2>
            ) : null}

            {Array.isArray(features) ? (
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature._key} className="flex flex-col gap-4">
                            <h3 className="text-xl font-semibold text-slate-800">
                                {feature.title}
                            </h3>
                            <p className="text-lg text-slate-600">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            ) : null}
        </section>
    );
}
