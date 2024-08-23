import CustomImage from "../../common/CustomImage";
import ArticleContent from "./ArticleContent";
import { useArticleSectionHook } from "./useArticleSectionHook";

export const ArticleSection = (props) => {
  const { contentRef, sections } = props;
  const {sectionRefs} = useArticleSectionHook()

  return (
    <div
      ref={contentRef}
      className="flex-1 h-[calc(100vh_-45px)] max-md:h-[calc(100vh_-26px)]  p-4 overflow-y-auto smooth-scroll"
    >
      <div className="relative mb-8 ">
        <CustomImage
          src="/assets/blogimage.jpeg"
          width={500}
          height={500}
          alt="First image"
          layout="responsive"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end bg-black/30 z-10 text-center bg-opacity-50">
          <h1 className="text-white uppercase text-2xl flex p-9 ">
            WHY CUSTOMISABLE HAMPERS ARE THE PERFECT FATHER'S DAY GIFT
          </h1>
        </div>
      </div>

      {sections.map((section) => (
        <section
          id={section.id}
          key={section.id}
          className="mb-4 pt-5 "
          ref={(el) => (sectionRefs.current[section.id] = el)}
        >
          <h2 className="mb-4 text-[#0086ca] ">{section.title}</h2>

          {Array.isArray(section.content) ? (
            <ArticleContent content={section?.content} />
          ) : (
            <p>{section?.content}</p>
          )}
          {section.subsections && (
            <div className="mt-4">
              {section.subsections.map((sub) => (
                <div id={sub.id} key={sub.id} className="pt-4 pb-2 ms-4">
                  <h3 className="mb-2">{sub.title}</h3>
                  <ArticleContent content={sub.content} />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
