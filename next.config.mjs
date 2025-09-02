//  @type {import('next').NextConfig}
const nextConfig = {
    images: {
        unoptimized: true
    },
    // Removed static export and GitHub Pages specific configs for Vercel deployment
    
    // Suppress hydration warnings caused by browser extensions
    reactStrictMode: false,
}
   
export default nextConfig;