import { getAllArticlesData } from "@/lib/mdx";
import { formatDateTime } from "@/lib/time";
import Link from "next/link";

export default function Home() {
  const data = getAllArticlesData();

  return (
    <main className="container mx-auto mt-20 px-4">
      {data.map(({ fileName, frontmatter, readingTime }, idx) => {
        return (
          <div className="py-6 border-b border-gray-200" key={idx}>
            <Link href={`/blog/${fileName}`}>
              <div className="font-bold text-2xl text-blue-600 hover:text-blue-800">
                {frontmatter.title}
              </div>
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              <span>{formatDateTime(frontmatter.date)}</span> ·{" "}
              <span>{readingTime}</span>
            </p>
            <p className="text-base text-gray-700 mt-2">
              {frontmatter.summary}
            </p>
          </div>
        );
      })}
    </main>
  );
}
