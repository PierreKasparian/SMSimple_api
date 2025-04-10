import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV != "preview") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },

  rewrites: async () => {
    return [
      {
        source: "/sms-api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:5328/sms-api/:path*"
            : "/sms-api/",
      },
    ];
  },
};

export default nextConfig;
