import React, { useState } from "react";
import BlogSidebarWidget from "../../../../components/BlogSidebarWidget/BlogSidebarWidget";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { FaRegComments, FaPlay } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Link, useLocation } from "react-router-dom";
import blogs from "../../../../data/blog-eng.json";
import HomeSingleBlog from "../../../../components/HomeSingleBlog/HomeSingleBlog";

SwiperCore.use([Navigation, Pagination]);

const BlogsSidebarArea = () => {
  const [isOpen, setOpen] = useState(false);
  console.log("dsfs", blogs);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="o4GuSJYSzrY"
        onClose={() => setOpen(false)}
      />

      <section className="blog-sidebar-area pt-120 pb-110">
        <div className="container">
          <div className="">
          <div className="row justify-content-between">
            {blogs.map((blog, index) => (
              <HomeSingleBlog
                blog={blog}
                blog_img_num="1"
                date="// Jun 02 - 2021"
                title="Parturient hac pulvinar enim sages sollicitudin mamco"
              />
            ))}
            {/* <div className="col-6 custom-pad-20">
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
            </div> */}

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
            {/* <div className="row">
              {blogs.map((blog, index) => (
                <div className="col-lg-4">
                  <div className="ablog__sidebar--wrapper ">
                    <div
                      className="ablog ablog-4 mb-55 wow fadeInUp  "
                      data-wow-delay=".4s"
                    >
                      <div className="ablog__img">
                        <img
                          src="/assets/img/blog/b1.jpg"
                          className="img-fluid w-100"
                          alt="img"
                        />
                      </div>
                      <div className="ablog__text ablog__text4">
                        <div className="ablog__meta ablog__meta4 ">
                          <ul>
                            <li>
                              <Link to={`/blogDetails/${blog.id}`}>
                                <i>
                                  {" "}
                                  <AiOutlineCalendar className="blog_icon" />{" "}
                                </i>{" "}
                                January 15, 2021{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to={`/blogDetails/${blog.id}`}>
                                <i>
                                  {" "}
                                  <AiOutlineUser className="blog_icon" />{" "}
                                </i>{" "}
                                Bribe Alert{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to={`/blogDetails/${blog.id}`}>
                                <i>
                                  {" "}
                                  <FaRegComments className="blog_icon" />{" "}
                                </i>{" "}
                                No Comments
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <h4 className="ablog__text--title4 mb-20 ">
                          <Link to={`/blogDetails/${blog.id}`}>
                            {blog.headline.slice(0, 20) + " ..."}
                          </Link>
                        </h4>
                        <div className="ablog__btn4">
                          <Link
                            to={`/blogDetails/${blog.id}`}
                            className="theme-btn text-white"
                          >
                            <i className="flaticon-enter"></i> Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSidebarArea;
