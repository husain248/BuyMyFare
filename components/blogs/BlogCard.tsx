import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MessageCircle } from "lucide-react";

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    date: string;
    comments: string;
    author: string;
    image: string;
    slug: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="group blog-card mb-5">
      <div className="sm:mb-7.5 mb-5 overflow-hidden rounded-2xl">
        <div className="group dz-hover-item relative h-60 overflow-hidden sm:h-70">
          <Link
            href={`/blogs/${blog.slug}`}
            className="dz-hover-img relative block h-full w-full"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              className="object-cover duration-500 group-hover:scale-[1.03]"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="xl:text-2xxl text-2xl mb-1.25">
            <Link className="link-hover" href={`/blogs/${blog.slug}`}>
              {blog.title}
            </Link>
          </h4>
          <ul className="flex items-center">
            <li className="xl:text-base text-sm pe-2.5 relative before:absolute before:h-px before:w-2.5 before:left-0 before:top-1/2 before:-translate-y-1/2 first:before:hidden before:bg-bodycolor flex items-center gap-1">
              <Calendar size={20} />
              {blog.date}
            </li>
            <li className="xl:text-base text-sm ps-5 relative before:absolute before:h-px before:w-2.5 before:left-0 before:top-1/2 before:-translate-y-1/2 first:before:hidden before:bg-bodycolor flex items-center gap-1">
              {/* By {blog.author} */}
              <MessageCircle size={20} />
              {blog.comments}
            </li>
          </ul>
        </div>
        <Link
          href={`/blogs/${blog.slug}`}
          className="size-15 min-w-15 flex items-center justify-center rounded-full bg-primary transform xl:-translate-x-full xl:rotate-[-360deg] xl:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden group/second"
        >
          <svg
            className="group-hover/second:animate-toTopFromBottom"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-white"
              d="M7.5 17L17.5 7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="stroke-white"
              d="M7.5 7H17.5V17"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
