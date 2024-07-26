"use client";
import React, { useState } from "react";
import BlogTags from "./BlogTags";
import { formatDate } from "@/lib/time";
import Link from "next/link";
import { Chip } from "@nextui-org/chip";
import { RiClockwiseLine } from "react-icons/ri";

interface TagItem {
  key: string;
  count: number;
}

interface BlogListProps {
  allArticles: any[];
  tags: TagItem[];
}

const BlogList: React.FC<BlogListProps> = ({ allArticles, tags }) => {
  const [articles, setArticles] = useState(allArticles);
  return (
    <main className="container flex flex-col md:flex-row md:gap-20">
      <div className="w-full max-w-[260px] h-fit  px-1 py-2 rounded-small shadow-md">
        <BlogTags
          tags={tags}
          onItemSelect={(tag) => {
            let filterArticles = allArticles;
            if (tag !== "all") {
              filterArticles = allArticles.filter((article) =>
                article.frontmatter.tags.includes(tag)
              );
            }
            setArticles(filterArticles);
          }}
        />
      </div>
      <div className="flex-1">
        {articles?.map(({ fileName, frontmatter, readingTime }, idx) => {
          return (
            <div className="py-6 border-b border-gray-20" key={idx}>
              <Link href={`/blog/${fileName}`}>
                <div className="font-bold text-xl">{frontmatter.title}</div>
                <p className="text-sm text-default-400 mt-2">
                  <span className="mr-2">{formatDate(frontmatter.date)}</span>
                  <span>{readingTime}</span>
                </p>
                <p className="text-base text-default-600 mt-2">
                  {frontmatter.summary}
                </p>
                <div className="flex gap-2 mt-3">
                  {frontmatter.tags.map((tag: string) => (
                    <Chip key={tag} color="danger" variant="bordered">
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
};

export default BlogList;
