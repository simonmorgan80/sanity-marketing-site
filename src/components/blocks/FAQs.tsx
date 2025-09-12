import { PAGE_QUERYResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';
import { FAQPage, WithContext } from 'schema-dts';

const generateFaqData = (faqs: FAQsProps['faqs']): WithContext<FAQPage> => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs?.map((faq) => ({
        '@type': 'Question',
        name: faq.title!,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.text!,
        },
    })),
});

type FAQsProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number],
    { _type: 'faqs' }
>;

export function FAQs({ _key, title, faqs }: FAQsProps) {
    const faqData = generateFaqData(faqs);

    return (
        <section className="max-w-7xl mx-auto my-16 lg:my-24 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />
            {title ? (
                <h2 className="text-3xl text-center lg:text-4xl font-semibold text-slate-800 mb-16">
                    {title}
                </h2>
            ) : null}
            {Array.isArray(faqs) ? (
                <div className="border-b border-slate-800">
                    {faqs.map((faq) => (
                        <details
                            key={faq._id}
                            className="group [&[open]]:bg-slate-50 transition-colors duration-100 px-4 border-t border-slate-800"
                            name={_key}
                        >
                            <summary className="text-xl font-semibold text-slate-800 list-none cursor-pointer py-4 flex items-center justify-between">
                                {faq.title}
                                <span className="transform origin-center rotate-90 group-open:-rotate-90 transition-transform duration-200">
                                    &larr;
                                </span>
                            </summary>
                            <div className="pb-4">
                                {faq.body ? (
                                    <PortableText value={faq.body} />
                                ) : null}
                            </div>
                        </details>
                    ))}
                </div>
            ) : null}
        </section>
    );
}
