export async function GET() {
    return new Response(
      `User-agent: *
       Disallow:
  
       Sitemap: https://procurable.group/sitemap.xml`, // Replace 'yourdomain.com' with your actual domain
      {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    );
  }