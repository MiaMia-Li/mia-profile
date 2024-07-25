"use client";
import React, { useMemo } from "react";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";

interface TagItem {
  key: string;
  count: number;
}

interface BlogTagsProps {
  onItemSelect: (...arg) => any;
  tags: TagItem[];
}

const BlogTags: React.FC<BlogTagsProps> = ({ onItemSelect, tags }) => {
  const [selectedKeys, setSelectedKeys] = React.useState<string>("all");
  const allTags = useMemo(() => {
    let newTag = [{ key: "all", count: 0 }].concat(tags);
    return newTag;
  }, [tags]);

  return (
    <Listbox
      aria-label="Actions"
      color="danger"
      variant="light"
      selectedKeys={selectedKeys}
      onAction={(key) => {
        onItemSelect(key);
        setSelectedKeys(key);
      }}>
      {allTags.map(({ key, count }) => {
        if (key == "all") {
          return (
            <ListboxItem
              key={key}
              className={`${selectedKeys === key ? "text-danger" : ""}`}>
              <span className="font-semibold">ALL POST</span>
            </ListboxItem>
          );
        }
        return (
          <ListboxItem
            key={key}
            className={`${selectedKeys === key ? "text-danger" : ""} ml-4`}>
            <span className="text-md">{key}</span>
            <span className="text-md ml-2">({count})</span>
          </ListboxItem>
        );
      })}
    </Listbox>
  );
};

export default BlogTags;
