import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  compressHTML: true,
  prefetch: true,
  site: 'https://blog.kk218.com', // 以后你绑定的域名
});
