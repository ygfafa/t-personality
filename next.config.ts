import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    /**
     * @see https://nextjs.org/docs/app/api-reference/config/typescript#statically-typed-links
     * 라우팅 경로 타이핑
     */
    typedRoutes: true,
  },
}

export default nextConfig
