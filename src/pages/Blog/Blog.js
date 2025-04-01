import React, { useEffect, useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../client";
import { MotionWrap } from "../../wrapper";
import "./Blog.scss";

const Blog = () => {
  const perPage = 10;
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useLayoutEffect(() => {
    // const query = '*[_type == "blogs"] | order(_createdAt asc)'
    const query =
      '*[_type == "blogs" && !(_id in path("drafts.**"))] | order(_createdAt asc)';

    client.fetch(query).then((data) => {
      setBlogs(data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * perPage;
  const pageCount = Math.ceil(blogs.length / perPage);

  return (
    <div>
      <Helmet>
        <title>Blog - Career At Germany</title>
      </Helmet>
      <h2 className="head-text blog_header">
        <span>Blogs</span>
      </h2>
      <div className="blogs_container-main">
        <div className="blogs_container">
          {blogs.slice(offset, offset + perPage).map((blog, index) => (
            <div className="blogs_container-post" key={index}>
              <div className="blogs_image">
                <img src={urlFor(blog.imgUrl)} alt={blog.name} />
              </div>

              <div className="blogs_content">
                <h4 className="">{blog.title}</h4>

                <div className="blogs_description">
                  <p>{blog.description}</p>
                  <Link to={`${blog._id}`} className="readmore_button">
                    <button className="">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </div>
  );
};

export default MotionWrap(Blog);
