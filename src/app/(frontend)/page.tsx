import Link from 'next/link';
import { Title } from '@/components/Title';

export default async function Page() {
    return (
        <section className="max-w-7xl mx-auto grid grid-cols-1 gap-6 p-6">
            <Title>Marketing Site</Title>
            <hr />
            <Link href="/posts">Blog &rarr;</Link>
        </section>
    );
}
