import { getAllArticlesData, getTagsWithArticleCount } from "@/lib/mdx";
import { formatDateTime } from "@/lib/time";
import Link from "next/link";
import { Chip } from "@nextui-org/chip";
import { Card } from "@nextui-org/react";

export default function Home() {
  const data = getAllArticlesData();
  const tags = getTagsWithArticleCount();
  console.log("--getAllTags", tags);

  return (
    <main className="container mx-auto px-6 flex flex-col md:flex-row md:gap-20">
      <div>
        <Card className="p-4 bg-white shadow-md rounded-lg min-w-48">
          <div>
            {tags.map(({ key, count }) => (
              <div
                key={key}
                className="flex items-center p-2 rounded-md hover:bg-orange-50 hover:cursor-pointer transition duration-300 ease-in-out">
                <span className="font-semibold text-gray-700">{key}</span>
                <span className="ml-2 text-gray-500">({count})</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div>
        {data.map(({ fileName, frontmatter, readingTime }, idx) => {
          return (
            <div className="py-6 border-b border-gray-20" key={idx}>
              <Link href={`/blog/${fileName}`}>
                <div className="font-bold text-xl">{frontmatter.title}</div>
                <p className="text-sm text-gray-500 mt-1">
                  <span>{formatDateTime(frontmatter.date)}</span> ·{" "}
                  <span>{readingTime}</span>
                </p>
                <p className="text-base text-gray-700 mt-2">
                  {frontmatter.summary}
                </p>
                <div className="flex gap-2 mt-3">
                  {frontmatter.tags.map((tag: string) => (
                    <Chip key={tag} color="warning" variant="bordered">
                      {tag}
                    </Chip>
                  ))}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
