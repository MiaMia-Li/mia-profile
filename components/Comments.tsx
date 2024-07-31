"use client";

import Giscus from "@giscus/react";

const Comments = () => {
  return (
    <Giscus
      repo="MiaMia-Li/mia-profile"
      repoId="R_kgDOMaFaMg"
      category="General"
      categoryId="DIC_kwDOMaFaMs4ChTdf"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
};

export default Comments;
