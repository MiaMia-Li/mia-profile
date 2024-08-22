import { getAllArticlesData, getTagsWithArticleCount } from "@/lib/mdx";
import BlogList from "@/components/BlogList";
import PageLay from "@/components/PageLay";

// 服务器端数据获取函数
async function fetchData() {
  const allArticles = getAllArticlesData();
  const tags = getTagsWithArticleCount();
  return { allArticles, tags };
}

export default async function Home() {
  const { allArticles, tags } = await fetchData();
  return (
    <PageLay
      title="The pen is mightier than the sword."
      desc="All thoughts are organized in chronological order, offering a journey through my evolving ideas.">
      <BlogList allArticles={allArticles} tags={tags} />
    </PageLay>
  );
}
