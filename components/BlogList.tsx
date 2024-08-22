"use client";
import React, { useState } from "react";
import BlogTags from "./BlogTags";
import { formatDate } from "@/lib/time";
import Link from "next/link";
import { Chip } from "@nextui-org/chip";
import { RiClockwiseLine } from "react-icons/ri";
import { RiArrowRightLine, RiTimerFill } from "react-icons/ri";

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
      {/* <div className="w-full max-w-[260px] h-fit  px-1 py-2 rounded-small shadow-md">
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
      </div> */}
      <div className="w-full md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        {articles?.map(({ fileName, frontmatter, readingTime }, idx) => {
          return (
            <div className="flex items-start justify-start mb-10 " key={idx}>
              <div className="hidden whitespace-nowrap sm:flex-shrink-0 relative z-10 order-first mt-4 md:flex sm:flex-[160px] sm:flex-grow-0 items-center text-sm text-default-600">
                {formatDate(frontmatter.date)}
              </div>
              <Link
                href={`/blog/${fileName}`}
                className="flex-grow px-6 py-4 transition sm:rounded-2xl dark:hover:bg-zinc-800/50 hover:bg-zinc-100/50">
                <div className="font-bold text-xl text-default-800">
                  {frontmatter.title}
                </div>

                <p className="text-medium text-default-600 mt-2">
                  {frontmatter.summary}
                </p>
                {/* <div className="flex gap-2 mt-3">
                  {frontmatter.tags.map((tag: string) => (
                    <Chip key={tag} color="danger" variant="bordered">
                      {tag}
                    </Chip>
                  ))}
                </div> */}
                <p className="text-danger text-sm font-semibold flex gap-1 items-center mt-6">
                  Read Article
                  <RiArrowRightLine />
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BlogList;
