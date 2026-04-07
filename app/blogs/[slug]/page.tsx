"use client";
import React, { use } from "react";
import blogsData from "../../../data/blogs.json";
import { notFound } from "next/navigation";
import BlogDetailsContent from "../../../components/blogs/BlogDetailsContent";
import ReplyForm from "../../../components/blogs/ReplyForm";

interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  content: string;
  tags: string[];
}

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const blog = (blogsData as Blog[]).find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <div className="page-content">
        <BlogDetailsContent blog={blog} />
        <div className="container mx-auto px-4 max-w-4xl pb-15">
          <ReplyForm />
        </div>
      </div>
    </>
  );
}

export default Page;
