import { Posts, Types } from "js/booru";

//pages/sitemap.xml.js
function generateSiteMap(postIds) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.openbooru.org</loc>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.openbooru.org/info</loc>
       <changefreq>monthly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>https://www.openbooru.org/auth/login</loc>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://www.openbooru.org/auth/register</loc>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     ${postIds
       .map((id: number) => {
         return `
       <url>
            <loc>${`https://www.openbooru.org/post/${id.toFixed(0)}`}</loc>
            <changefreq>daily</changefreq>
            <priority>0.6</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}


async function getAllIds() {
    let query = new Types.PostQuery();
    let all_ids = [];
    while (true) {
        let posts = await Posts.search(query, all_ids.length);
        if (posts.length === 0) {
            break
        } else {
            all_ids = all_ids.concat(posts.map(post => post.id))
        }
    }
    return all_ids
}


export async function getServerSideProps({ res }) {
    let ids = await getAllIds();
    const sitemap = generateSiteMap(ids);

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', "max-age=360, public")
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}


export default function SiteMap() {
    // dad written by getServerSideProps
};
