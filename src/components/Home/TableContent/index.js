const TableContent = (props) => {
  const { sections } = props;

  return (
    <div className=" w-[30vw] sticky top-0 h-[calc(100vh_-45px)]  overflow-y-auto bg-white hidden md:block ">
      <div className="px-4 sticky top-0 py-4 bg-gray-100">
        <h2 className="">Table of Content</h2>
      </div>
      <ul className="my-4 ">
        {sections.map((section) => (
          <li key={section.id} className="mb-2 px-2 ">
            <h5 className="flex text-lg text-[#0086ca] text-sky-400/100  px-1 ">
              <a href={`#${section.id}`}>{section.title}</a>
            </h5>
            {section.subsections && (
              <ul className="pl-4">
                {section.subsections.map((sub) => (
                  <li className="my-2 text-[16px] " key={sub.id}>
                    <a
                      className="hover:underline underline-offset-[6px] decoration-blue-300"
                      href={`#${sub.id}`}
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableContent;
