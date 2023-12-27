import React from "react";
import ArwaBlogs from "../components/ArwaBlogs";
import RecentBlogs from "../components/RecentBlogs";

const Blog = () => {
  return (
    <div className="mt-5 pt-4">
      <ArwaBlogs />
      <RecentBlogs />
    </div>
  );
};

export default Blog;
