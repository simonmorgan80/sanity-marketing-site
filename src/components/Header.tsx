import Link from 'next/link';

export function Header() {
    return (
        <div className="p-6">
            <header className="flex items-center justify-between max-w-7xl mx-auto lg:p-6">
                <Link className="md:text-xl font-semibold" href="/">
                    Marketing Site
                </Link>
                <ul className="flex items-center gap-4 font-semibold">
                    <li>
                        <Link className="" href="/posts">
                            Blog
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}
