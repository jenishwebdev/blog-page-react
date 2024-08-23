import React from "react";

const ArticleContent = ({ content }) => {
  if (Array.isArray(content)) {
    return (
      <ul className="list-disc pl-5">
        {content.map((paragraph, index) => (
          <li key={index} className="mb-4 text-[1.125rem] leading-9">
            {paragraph}
          </li>
        ))}
      </ul>
    );
  }
  return <p>{content}</p>;
};

export default ArticleContent;
