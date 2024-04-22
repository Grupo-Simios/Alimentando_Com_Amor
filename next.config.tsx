// next.config.tsx
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // configuration to enable CSS Modules support
  cssModules: true,

  images : {
    domains : ["api.qrserver.com"]
  }
};

export default nextConfig;
