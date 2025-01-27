import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const items = [
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
  {
    content: "This is an example of a frosted glass effect using Tailwind CSS.",
  },
];

const FeaturedComponent = () => {
  return (
    <div className="max-h-[700px] overflow-hidden">
      <InfiniteScroll items={items} />
    </div>
  );
};

export default FeaturedComponent;
