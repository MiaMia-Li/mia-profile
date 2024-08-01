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
import React from "react";

const Page: React.FC = async ({ params }: any) => {
  const { content, frontmatter, readingTime } = getArticlesData(params.slug);
  return (
    <main className="container max-w-full">
      <ScrollToTop />
      {/* <div className="fixed left-0">
        <User />
        <br />
        <Link>
          <RiArrowLeftLine />
          Back To Blog
        </Link>
      </div> */}
      <header className="py-6 mx-auto text-center">
        <h1 className="text-4xl font-bold  mb-3">{frontmatter.title}</h1>
        <h2 className="text-lg text-default-600 mb-3">
          📅{formatDate(frontmatter.date)} ⏰{readingTime}
        </h2>
        <Link href="/blog" color="danger">
          <RiArrowLeftLine />
          Back To Blog
        </Link>
      </header>
      <Divider />
      <article className="prose !max-w-none dark:prose-invert">
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
                    headings: ["h1", "h2", "h3"],
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
    </main>
  );
};
export default Page;
