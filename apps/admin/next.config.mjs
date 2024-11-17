/** @type {import('next').NextConfig} */
const nextConfig = {
    //image
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
};

export default nextConfig;
