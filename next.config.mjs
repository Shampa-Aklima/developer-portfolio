/** @type {import('next').NextConfig} */
const nextConfig = {

    //add remote pattern to allow images from unsplash
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
