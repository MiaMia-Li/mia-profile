export interface Blog {
  slug: string; // 唯一标识符，用于 URL 路径
  title: string; // 博客标题
  date: string; // 发布日期
  content: string; // 博客内容 (可以是 Markdown 或 HTML)
  excerpt?: string; // 简短的摘录或简介
  tags?: string[]; // 标签
  layout?: string; // 布局名称
}

export interface ImageData {
  src: string;
  exif: {
    ISO: number | string;
    aperture: number | string;
    shutterSpeed: number | string;
    focalLength: number | string;
  };
}
