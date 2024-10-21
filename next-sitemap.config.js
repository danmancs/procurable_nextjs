/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://procurable.group', // Replace with your domain
    generateRobotsTxt: true, // (optional) Create `robots.txt`
    exclude: ['/admin/*'], // Add any pages you want to exclude
    sitemapSize: 5000,
  };
  