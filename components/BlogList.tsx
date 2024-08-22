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
                <div className="font-bold text-lg text-default-800">
                  {frontmatter.title}
                </div>
                <p className="text-sm text-default-400 mt-2 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 40 40">
                    <path
                      fill="#8bb7f0"
                      d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path>
                    <path
                      fill="#4e7ab5"
                      d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"></path>
                    <path
                      fill="#fff"
                      d="M20,35.5c-8.547,0-15.5-6.953-15.5-15.5S11.453,4.5,20,4.5S35.5,11.453,35.5,20S28.547,35.5,20,35.5 z"></path>
                    <path
                      fill="#4e7ab5"
                      d="M20,5c8.271,0,15,6.729,15,15s-6.729,15-15,15S5,28.271,5,20S11.729,5,20,5 M20,4 C11.163,4,4,11.163,4,20s7.163,16,16,16s16-7.163,16-16S28.837,4,20,4L20,4z"></path>
                    <path
                      fill="none"
                      stroke="#66798f"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M26.995 9.665L20 20 25.846 25.846"></path>
                    <path
                      fill="#66798f"
                      d="M20 18.5A1.5 1.5 0 1 0 20 21.5A1.5 1.5 0 1 0 20 18.5Z"></path>
                    <path
                      fill="#c5d4de"
                      d="M20 6A1 1 0 1 0 20 8 1 1 0 1 0 20 6zM20 32A1 1 0 1 0 20 34 1 1 0 1 0 20 32z"></path>
                    <g>
                      <path
                        fill="#c5d4de"
                        d="M33 19A1 1 0 1 0 33 21A1 1 0 1 0 33 19Z"></path>
                    </g>
                    <g>
                      <path
                        fill="#c5d4de"
                        d="M7 19A1 1 0 1 0 7 21A1 1 0 1 0 7 19Z"></path>
                    </g>
                  </svg>
                  <span>{readingTime}</span>
                </p>
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
