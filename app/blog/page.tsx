import { getAllArticlesData, getTagsWithArticleCount } from "@/lib/mdx";
import BlogList from "@/components/BlogList";

// 服务器端数据获取函数
async function fetchData() {
  const allArticles = getAllArticlesData();
  const tags = getTagsWithArticleCount();
  return { allArticles, tags };
}

export default async function Home() {
  const { allArticles, tags } = await fetchData();
  return <BlogList allArticles={allArticles} tags={tags} />;
}
