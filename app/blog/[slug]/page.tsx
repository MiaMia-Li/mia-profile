import { getArticlesData } from "@/lib/mdx";
import { formatDateTime, formatDate } from "@/lib/time";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import ScrollToTop from "@/components/ScrollToTop";
import toc from "@jsdevtools/rehype-toc";
import User from "@/components/User";
import { Divider, Link } from "@nextui-org/react";
import { RiArrowLeftLine } from "react-icons/ri";

const Page = async ({ params }: any) => {
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
              rehypePlugins: [
                rehypePrism,
                rehypeSlug,
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark-dimmed",
                  },
                ],
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
    </main>
  );
};
export default Page;
