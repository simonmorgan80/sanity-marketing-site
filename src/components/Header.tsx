import Link from 'next/link';

export function Header() {
    return (
        <div className="p-6">
            <header className="bg-white/80 flex items-center justify-between p-6 rounded-lg container mx-auto">
                <Link className="md:text-xl font-bold tracking-tight" href="/">
                    Marketing
                </Link>
                <ul className="flex items-center gap-4 font-semibold text-slate-700">
                    <li>
                        <Link className="transition-colors" href="/posts">
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link className="transition-colors" href="/studio">
                            Sanity Studio
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}
