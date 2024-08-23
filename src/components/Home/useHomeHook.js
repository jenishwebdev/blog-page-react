import { useEffect, useState, useRef } from "react";
import blogData from "../../app/blog/blogdata.json";

export const useHomeHook = () => {
  const { title, sections } = blogData.blog;
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef?.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const totalScrollable = scrollHeight - clientHeight;
        const scrolled = (scrollTop / totalScrollable) * 100;
        setScrollPercentage(scrolled);
      }
    };

    const currentContentRef = contentRef?.current;
    if (currentContentRef) {
      currentContentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentContentRef) {
        currentContentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return { title, sections, scrollPercentage, contentRef };
};
