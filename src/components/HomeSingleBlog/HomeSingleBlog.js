import React from "react";
import { Link } from "react-router-dom";

const HomeSingleBlog = ({ blog_img_num, date, title, blog }) => {
  const { headline, image_link, introduction, body, conclusion, id } = blog;

  console.log("blog", blog);
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="tp-blog mb-30 wow fadeInUp" data-wow-delay=".4s">
          <div className="tp-blog-img mb-25">
            <Link to={`/blogDetails/${id}`}>
              <img
                src={`/assets/img/blog/blog-img-${blog_img_num}.jpg`}
                className="img-fluid"
                alt="img not found"
              />
            </Link>
          </div>
          <div className="tp-blog-text">
            <div className="tp-blog-meta mb-10"></div>
            <h4 className="tp-blog-title mb-20">
              <Link to={`/blogDetails/${id}`}>{headline}</Link>
            </h4>
            <div className="tp-blog-link">
              <Link to={`/blogDetails/${id}`}>
                <i className="flaticon-enter"></i> Continue Reading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSingleBlog;
