import React from "react";

type BlogDetailsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type BlogDetails = {
  intro?: string[];
  sections?: BlogDetailsSection[];
  conclusion?: string[];
};

interface BlogDetailsContentProps {
  blog: {
    title: string;
    date: string;
    author: string;
    image: string;
    content: string;
    tags: string[];
    details?: BlogDetails;
  };
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({ blog }) => {
  const details = blog.details;

  const renderParagraph = (text: string, key: React.Key) => {
    const trimmed = text.trim();
    const isExample = /^example:/i.test(trimmed);
    if (!isExample) {
      return (
        <p
          key={key}
          className="xl:text-xl sm:text-lg text-sm font-light leading-relaxed text-secondary/80"
        >
          {text}
        </p>
      );
    }

    const rest = trimmed.replace(/^example:\s*/i, "");
    return (
      <p
        key={key}
        className="xl:text-xl sm:text-lg text-sm font-light leading-relaxed text-secondary/80"
      >
        <span className="italic font-medium text-secondary">Example:</span>{" "}
        {rest}
      </p>
    );
  };

  return (
    <div className="xl:pt-20 sm:pt-15 pt-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="row">
          <div className="w-full">
            <div className="mb-15">
              <div className="lg:mb-15 mb-7.5">
                {(details?.intro?.length ? details.intro : [blog.content]).map(
                  (p, idx) => (
                    <div key={idx} className={idx === 0 ? "" : "mt-4"}>
                      {renderParagraph(p, idx)}
                    </div>
                  ),
                )}
              </div>

              {details?.sections?.length ? (
                <div className="lg:mb-15 mb-7.5">
                  {details.sections.map((section, idx) => (
                    <div key={idx} className={idx === 0 ? "" : "mt-10"}>
                      <h4 className="text-3xl mb-5 font-semibold">
                        {idx + 1}. {section.title}
                      </h4>

                      {section.paragraphs?.length ? (
                        <div className="space-y-4">
                          {section.paragraphs.map((p, pIdx) =>
                            renderParagraph(p, `${idx}-p-${pIdx}`),
                          )}
                        </div>
                      ) : null}

                      {section.bullets?.length ? (
                        <ul className="xl:text-xl sm:text-lg text-sm font-light mt-5 space-y-2">
                          {section.bullets.map((b, bIdx) => (
                            <li
                              key={`${idx}-b-${bIdx}`}
                              className="ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-primary"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}

              {details?.conclusion?.length ? (
                <div className="lg:mb-15 mb-7.5">
                  <h4 className="text-3xl mb-5 font-semibold">Conclusion</h4>
                  <div className="space-y-4">
                    {details.conclusion.map((p, idx) =>
                      renderParagraph(p, `c-${idx}`),
                    )}
                  </div>
                </div>
              ) : null}

              <div className="mb-7.5 pt-5 border-t border-black/10">
                <ul className="flex flex-wrap items-center gap-4">
                  <li className="font-semibold text-secondary">Tags:</li>
                  {blog.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-secondary/70 hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContent;
