import React from "react";
import "./Video.scss";

const Video = () => {
  return (
    <div className="video__main">
      {" "}
      <div className="video__block">
        <div className="video__header">
          <h2>Latest Video</h2>
          <p>
            Are you looking for a German course? Start your German with
            qualified German teachers. Check out our website . Link in BIO!
            Intensive Training from basic German level. The comprehensive online
            training inclusive of Goethe Zertifikat Deutsch A1 -B2 Exam Coaching
            & Preparation.
          </p>
        </div>

        <iframe
          src="https://www.youtube.com/embed?listType=playlist&list=UUWcriU939-cScNQX2eDCcfA&rel=0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
