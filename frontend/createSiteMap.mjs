import { SitemapStream, streamToPromise } from 'sitemap';
import sanityClient from './src/SanityClient.js';
import fs from 'node:fs/promises';

const films = await sanityClient.fetch(`
	*[_type == "filme"] | order(_createdAt desc) {
		slug
	}
`);

console.log('[create-sitemap] preparing sitemap...');
const smStream = new SitemapStream({
	hostname: 'https://novocine.pt',
});

films.forEach(entry => {
	const url = `/arquivo/${entry.slug.current}`;
	smStream.write({
		url,
		changefreq: 'daily',
		priority: 0.5,
	});
});

smStream.end();

const sitemapOutput = (await streamToPromise(smStream)).toString();
await fs.writeFile(`./dist/sitemap.xml`, sitemapOutput);
console.log(`[create-sitemap] sitemap.xml updated.`);
