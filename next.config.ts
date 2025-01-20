import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

    images:{
      domains:['cdn.sanity.io'],
  

    // add sanity domain here
  },
};

export default nextConfig;
