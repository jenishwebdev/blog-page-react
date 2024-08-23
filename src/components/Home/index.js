"use client";

import { useHomeHook } from "./useHomeHook";
import { ArticleSection } from "./ArticleSection";
import ProgressBar from "@/components/common/ProgressBar";
import TableContent from "./TableContent";

export default function Home() {
  const { sections, scrollPercentage, contentRef } = useHomeHook();

  return (
    <>
      <ProgressBar percentage={scrollPercentage} />
      <div className="flex w-full gap-2 border shadow-lg">
        {/* table of content */}
        <TableContent sections={sections} />
        {/* article section */}
        <ArticleSection sections={sections} contentRef={contentRef} />
      </div>
    </>
  );
}
