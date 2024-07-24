// components/BlogLayout.tsx
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { components } from "./MDXComponents"; // 导入定义的组件

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="max-w-3xl mx-auto p-4">
        <header className="mb-4">
          <h1 className="text-3xl font-bold">My Blog</h1>
        </header>
        <main>{children}</main>
        <footer className="mt-4">
          <p className="text-sm text-gray-600">© 2024 My Blog</p>
        </footer>
      </div>
    </MDXProvider>
  );
};

export default BlogLayout;
