import React, { useEffect, useState } from "react";
import { client } from "../../client";

const Test = () => {
  const [tags, setTags] = useState([]);

  // const query = '*[_type == "photos"] | order(_createdAt asc) {tags-> {title} }'
  // const query = '*[_type == "photoTags"] | order(_createdAt asc) {title}'

  useEffect(() => {
    const query =
      '*[_type == "photos"] | order(_createdAt asc) {tags-> {title} }';
    client.fetch(query).then((data) => {
      setTags(data);
      // console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>fff</h1>

      {tags?.map((tag, index) => (
        <p key={index}>{tag.tags.title}</p>
      ))}
    </div>
  );
};

export default Test;
