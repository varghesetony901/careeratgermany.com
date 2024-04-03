import React, { useEffect, useState } from "react";
import { client } from "../../client";
import "./TopBar.scss";

const TopBar = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const query = '*[_type == "coursedate"]';
    client.fetch(query).then((data) => {
      setDate(data[0].date);
      // console.log(data[0].date);
      // console.log(date);
    });
  }, []);

  return (
    <div className="Topbar__container">
      <marquee scrollamount="4" behavior="smooth" direction="">
        Next A1,A2,B1,B2 batches start on {date} [Book your seats now]
      </marquee>
    </div>
  );
};

export default TopBar;
