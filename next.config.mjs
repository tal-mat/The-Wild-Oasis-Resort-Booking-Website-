/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jakiggtosfociarlvgsw.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/cabin-images/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'restcountries.com',
                port: '',
                pathname: '/v2/flags/**',
            },
        ],
    },
    // output: "export",
};

export default nextConfig;
