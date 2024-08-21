import { getArticlesData } from "@/lib/mdx";
import { formatDate } from "@/lib/time";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import ScrollToTop from "@/components/ScrollToTop";
import toc from "@jsdevtools/rehype-toc";
import User from "@/components/User";
import { Divider, Link } from "@nextui-org/react";
import { RiArrowLeftLine } from "react-icons/ri";
import Comments from "@/components/Comments";
import { RiCalendarTodoFill, RiTimerLine } from "react-icons/ri";
import React from "react";

const Page: React.FC = async ({ params }: any) => {
  const { content, frontmatter, readingTime } = getArticlesData(params.slug);
  return (
    <main className="container overflow-hidden max-w-full">
      <ScrollToTop />
      <div className="md:fixed top-48 left-52">
        <User />
      </div>
      <div className="md:pl-60">
        <article className="prose !max-w-none dark:prose-invert ">
          <header>
            <Link href="/blog" className="text-medium mb-5" color="danger">
              <RiArrowLeftLine />
              <span>Back To Blog</span>
            </Link>
            <h1>{frontmatter.title}</h1>
            <h6 className="flex items-center gap-2">
              <RiCalendarTodoFill />
              <span>{formatDate(frontmatter.date)}</span>
              <Divider orientation="vertical"></Divider>
              <RiTimerLine />
              {readingTime}
            </h6>
          </header>
          <MDXRemote
            source={content}
            options={{
              parseFrontmatter: true,
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkMath],
                rehypePlugins: [
                  rehypePrism,
                  rehypeSlug,
                  [
                    toc,

                    {
                      headings: ["h1", "h2"],
                      cssClasses: {
                        list: "toc-list",
                        listItem: "toc-list-item",
                      },
                    },
                  ],
                ],
              },
            }}
          />
        </article>
        <Comments />
      </div>
    </main>
  );
};
export default Page;
