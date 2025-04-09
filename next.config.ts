import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/sms-api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/sms-api/:path*'
            : '/sms-api/'
      },
    ]
  },
};

export default nextConfig;
