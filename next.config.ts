import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // new URL('https://viyxdvtppranqbnzygjq.supabase.co/storage/v1/object/public/product-image/**'),
      {
        protocol: "https",
        hostname: "viyxdvtppranqbnzygjq.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/product-image/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
