const fs = require("fs");
const path = require("path");

const baseUrl = "https://scaffold.swarshinde.dev";

function getSlugs(filePath) {
  const content = fs.readFileSync(path.resolve(__dirname, "..", filePath), "utf-8");
  const regex = /slug:\s*(["'])([^"']+)\1/g;
  const slugs = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[2]);
  }
  return slugs;
}

const designSlugs = getSlugs("src/data/designPrompts.js");
const workflowSlugs = getSlugs("src/data/workflowPrompts.js");
const imageSlugs = getSlugs("src/data/imagePrompts.js");

const urls = [
  "/",
  "/design-prompts",
  "/workflow-prompts",
  "/image-prompts",
  "/my-kit"
];

designSlugs.forEach(slug => urls.push(`/design-prompts/${slug}`));
workflowSlugs.forEach(slug => urls.push(`/workflow-prompts/${slug}`));
imageSlugs.forEach(slug => urls.push(`/image-prompts/${slug}`));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>${url === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${url === "/" ? "1.0" : url.split("/").length > 2 ? "0.6" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, "..", "public", "sitemap.xml"), xml);
console.log(`Generated sitemap with ${urls.length} URLs.`);
