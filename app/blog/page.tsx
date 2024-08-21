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
  return (
    <div className="sm:mt-32 mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Writing about front-end development and random thoughts on life.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          All of my long-form thoughts on programming, life, product design, and
          more, collected in chronological order.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <BlogList allArticles={allArticles} tags={tags} />
      </div>
    </div>
  );
}
