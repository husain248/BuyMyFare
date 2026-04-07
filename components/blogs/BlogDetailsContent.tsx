import React from "react";

interface BlogDetailsContentProps {
  blog: {
    title: string;
    date: string;
    author: string;
    image: string;
    content: string;
    tags: string[];
  };
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({ blog }) => {
  return (
    <div className="xl:pt-20 sm:pt-15 pt-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="row">
          <div className="w-full">
            <div className="mb-15">
              <div className="lg:mb-15 mb-7.5">
                <p className="xl:text-xl sm:text-lg text-sm font-light leading-relaxed text-secondary/80">
                  {blog.content}
                </p>
              </div>

              <div className="lg:mb-15 mb-7.5">
                <h4 className="text-3xl mb-5 font-semibold">
                  The Power of Inspiration
                </h4>
                <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5 text-secondary/80">
                  Every design begins with inspiration—a spark that ignites
                  creativity. Inspiration can come from anywhere:
                </p>
                <ul className="xl:text-xl sm:text-lg text-sm font-light mb-7.5 space-y-2">
                  <li className="ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-primary">
                    A walk through nature, observing{" "}
                    <span className="border-b border-primary text-secondary">
                      patterns and textures.
                    </span>
                  </li>
                  <li className="ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-primary">
                    Art, architecture, or cultural motifs that speak to a
                    designer’s soul.
                  </li>
                  <li className="ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-primary">
                    Everyday problems that demand innovative solutions.
                  </li>
                </ul>
                <p className="xl:text-xl sm:text-lg text-sm font-light text-secondary/80">
                  For example, the minimalist trend in modern design often draws
                  from natural simplicity and functionality, showing how
                  external influences shape creative thought. The key is to
                  remain curious, open, and receptive to the world around you.
                </p>
              </div>

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
