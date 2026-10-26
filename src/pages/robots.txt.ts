import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const live = process.env.LIVE === '1';
  const body = live
    ? `User-agent: *\nAllow: /\nDisallow: /stil-kit/\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
