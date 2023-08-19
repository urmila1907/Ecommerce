import React from "react";
import "./blog.scss";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { Meta } from "../../components/Meta";
import { BlogCard } from "../../components/BlogCard/BlogCard";

export const Blog = () => {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="filter col-3">
              <div className="filter-card mb-3">
                <h4 className="filter-title">Find By Categories</h4>
                <ul className="category-list ps-0">
                  <li className="mb-1 icons">Electronics</li>
                  <li className="mb-1 icons">Clothing</li>
                  <li className="mb-1 icons">Home appliances</li>
                  <li className="mb-1 icons">Footwear</li>
                </ul>
              </div>
            </div>
            <div className="filtered-blogs col-8">
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
                <BlogCard />
                <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard />
                <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard />
                <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
