import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "app/_blogs");

// 获取 MDX/MD 原始数据
export function getMdxRawData(fileName: string, hasSuffix: boolean) {
  let fullPath = path.join(articlesDirectory, `${fileName}`);
  let suffix = hasSuffix // 判断是否有后缀，没有的话就加上后缀
    ? ""
    : fs.existsSync(`${fullPath}.mdx`)
    ? ".mdx"
    : ".md";
  const fileContnts = fs.readFileSync(`${fullPath}${suffix}`, "utf8");
  return fileContnts;
}

// 处理 MDX/MD 原始数据中的 frontmatter
export function getMdxFrontmatter(mdxRawData: string) {
  const { content, data } = matter(mdxRawData);
  return {
    content,
    frontmatter: data,
    readingTime: readingTime(content).text, // 计算阅读时间
  };
}

// 获取文章的所有信息
export function getArticlesData(fileName: string, hasSuffix = false) {
  return {
    ...getMdxFrontmatter(getMdxRawData(fileName, hasSuffix)),
    fileName: fileName.split(".").slice(0, -1).join("."), // 去除后缀
  };
}

export function getAllArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    return getArticlesData(fileName, true);
  });

  // 按时间排序：新到旧
  return allArticlesData.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
}

export function getTagsWithArticleCount() {
  const allArticlesData = getAllArticlesData();
  const tagsCount: { [key: string]: number } = {};

  allArticlesData.forEach(({ frontmatter }) => {
    if (frontmatter.tags) {
      frontmatter.tags.forEach((tag: string) => {
        if (tagsCount[tag]) {
          tagsCount[tag]++;
        } else {
          tagsCount[tag] = 1;
        }
      });
    }
  });

  return Object.entries(tagsCount).map(([key, count]) => ({ key, count }));
}
