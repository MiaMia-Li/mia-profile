// components/MDXComponents.tsx
import { ReactNode } from "react";
// import { Code } from "./CodeComponent"; // 假设你有一个自定义的 Code 组件

export const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-semibold my-3" {...props} />,
  p: (props: any) => <p className="my-2" {...props} />,
  //   code: Code, // 自定义的 Code 组件
  // 可以继续添加其他自定义组件
};
