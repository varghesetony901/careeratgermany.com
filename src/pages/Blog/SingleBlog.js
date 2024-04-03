import React, { useEffect, useLayoutEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../client";
import "./SingleBlog.scss";

const SingleBlog = () => {
  const params = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const query = `*[_type == "blogs" && _id == '${params.id}'][0]`;

    client
      .fetch(query)
      .then((data) => {
        setBlogs(data);
      })
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dateString = `${blogs._createdAt}`;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: 'numeric',
  };
  const date = new Date(dateString).toLocaleString("en-US", options);

  return (
    <div className="singlepost_container">
      <div className="">
        {loading ? (
          <Skeleton count={10} />
        ) : (
          <div className="singlepost_image">
            <img src={urlFor(blogs.imgUrl)} />
          </div>
        )}
      </div>

      <div className="singlepost_content">
        {loading ? <Skeleton count={10} /> : <p>{date}</p>}
        <h2 className="">{blogs.title}</h2>
        <div className="singlepost_desc">
          <p>{blogs.description}</p>
          <p>{blogs.paragraph1}</p>
          <p>{blogs.paragraph2}</p>
          <p>{blogs.paragraph3}</p>
          <p>{blogs.paragraph4}</p>
          <p>{blogs.paragraph5}</p>
          <p>{blogs.paragraph6}</p>
          <p>{blogs.paragraph7}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
