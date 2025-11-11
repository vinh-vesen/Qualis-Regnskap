const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({ hostname: "https://qualisregnskap.no" });

sitemap.write({ url: "/", lastmod: "2025-11-11", priority: 1.0 });
sitemap.write({
  url: "/#/personvernerklaering",
  lastmod: "2025-11-11",
  priority: 0.8,
});
sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data);
  console.log("✅ sitemap.xml generated successfully!");
});
