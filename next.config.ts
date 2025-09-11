import type { NextConfig } from 'next';
import { fetchRedirects } from '@/sanity/lib/fetchRedirects';
import { client } from '@/sanity/lib/client';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    async redirects() {
        const redirects: any = await fetchRedirects(); //change from 'any'
        return redirects;
    },
};
export default nextConfig;
