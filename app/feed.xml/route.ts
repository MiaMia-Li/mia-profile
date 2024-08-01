import RSS from "rss";
import { getAllArticlesData } from "@/lib/mdx";

export async function GET() {
  const blogPosts = await getAllArticlesData(); // Fetch your blog posts or any other data you want to feed

  const siteUrl =
    process.env.NODE_ENV === "production"
      ? "https://mia-profile.vercel.app"
      : "http://localhost:3000";

  const feedOptions = {
    title: "Mia Blog RSS Feed",
    description: "Your RSS Feed Description",
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    image_url: `${siteUrl}/bg.jpg`,
    pubDate: new Date().toUTCString(),
    copyright: `All rights reserved - ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  blogPosts.map((post: any) => {
    // console.log("--post", post);
    feed.item({
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      url: `${siteUrl}/blog/${post.fileName}`,
      //   guid: post.id,
      date: post.frontmatter.date,
    });
  });
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
