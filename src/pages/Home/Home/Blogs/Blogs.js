import React from "react";
import HomeSingleBlog from "../../../../components/HomeSingleBlog/HomeSingleBlog";
import blogs from "../../../../data/blog-eng.json";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <section className="tp-blog-area pt-90 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title-wrapper text-center mb-55 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tp-section-subtitle common-yellow-shape mb-20 section__sm__title">
                  Some Recent Blogs
                </h5>
                <h2 className="tp-section-title mb-25">
                  Understanding How Bribes Affect <br />
                  Individuals and Communities
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {blogs.slice(0, 6).map((blog, index) => (
              <HomeSingleBlog
                blog={blog}
                blog_img_num="1"
                date="// Jun 02 - 2021"
                title="Parturient hac pulvinar enim sages sollicitudin mamco"
              />
            ))}
            <div className="col-6 custom-pad-20">
              <div
                className="tp-appoint text-end wow fadeInUp"
                data-wow-delay=".9s"
              >
                <Link to={"/blogs"}>
                  <button type="submit" className="theme-btn text-white">
                    <i className="flaticon-enter"></i> See All Blogs
                  </button>
                </Link>
              </div>
            </div>

            {/* <HomeSingleBlog
              blog_img_num="2"
              date="// Jun 04 - 2021"
              title="Baoreet curae placerat amet class rempus over curpise"
            />

            <HomeSingleBlog
              blog_img_num="3"
              date="// Jun 06 - 2021"
              title="Dapibus iaculis curae in tristique fermen venenatis cidun"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
