import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { client, urlFor } from "../../client";
import { MotionWrap } from "../../wrapper";
import "./Gallery.scss";

const Gallery = () => {
  const [videos, setVideos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState(true);
  const [color, setColor] = useState("active");
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [tags, setTags] = useState([]);

  const YTkey = process.env.REACT_APP_YOUTUBE_API;

  const toogleContentVideo = () => {
    setImage(true);
    setColor("active");
  };
  const toogleContentPhoto = () => {
    setImage(false);
    setColor("not-active");
    setModel(false);
  };

  useEffect(() => {
    const query1 =
      '*[_type == "photos"] | order(_createdAt asc){imgUrl , tags-> {title}}';

    const query2 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=UUWcriU939-cScNQX2eDCcfA&key=${YTkey}`;

    client.fetch(query1).then((data) => {
      setPhotos(data);
      // console.log(data);
      setFilterWork(data);
    });

    fetch(query2).then((data) => {
      data.json().then((result) => {
        setVideos(result);
        // console.log(result);
      });
    });

    const query3 = '*[_type == "photoTags"] | order(_createdAt asc) ';
    client.fetch(query3).then((data) => {
      setTags(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    // console.log(item);
    // console.log(photos);
    if (item === "All") {
      setActiveFilter("All");
      setFilterWork(photos);
    } else {
      setFilterWork(photos.filter((photo) => photo.tags.title.includes(item)));
      // console.log(filterWork);
    }
  };
  // const handleWorkFilter = (item) => {
  //     setActiveFilter(item);
  //     if (item === 'All') {
  //         setFilterWork(photos);
  //     } else {
  //         setFilterWork(photos.filter((work) => work.tags.title.includes(item)));
  //     }
  // };

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Career At Germany</title>
      </Helmet>
      <h1 className="gallery__header head-text">
        <span>Gallery</span>
      </h1>
      <div className="gallery_container">
        <div className="gallery_tags">
          <h4
            onClick={toogleContentVideo}
            style={{ background: color === "active" ? "#b20000" : "gray" }}
          >
            Photos
          </h4>
          <h4
            onClick={toogleContentPhoto}
            style={{ background: color === "not-active" ? "#b20000" : "gray" }}
          >
            Videos
          </h4>
        </div>
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} alt="" />
          <AiOutlineCloseCircle
            color="white"
            size={40}
            onClick={() => setModel(false)}
          />
        </div>
        <div className="gallery_content">
          {image ? (
            <div className="gallery-photo">
              <div className="app__work-filter">
                {tags.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleWorkFilter(item.title)}
                    className={`app__work-filter-item app__flex p-text ${
                      activeFilter === item.title ? "item-active" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                ))}
                <p
                  onClick={() => handleWorkFilter("All")}
                  className={`app__work-filter-item app__flex p-text ${
                    activeFilter === "All" ? "item-active" : ""
                  }`}
                >
                  All
                </p>
              </div>
              <div className="gallery">
                {filterWork?.map((photo, index) => (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg(urlFor(photo.imgUrl))}
                  >
                    <img
                      src={urlFor(photo.imgUrl)}
                      alt=""
                      style={{ width: "100%" }}
                    />
                    {/* <h4>{photo.description}</h4> */}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="gallery-video">
              {videos.items?.map((video, index) => (
                <div className="gallery_video-info" key={index}>
                  {/* <div className='gallery_video-iframe'>
                                        <iframe
                                            src={video.link} allowFullScreen>
                                        </iframe>
                                    </div> */}
                  {/* <div className='gallery_video-iframe'> */}
                  {/* <iframe
                                            src={`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video.id.videoId}&key=AIzaSyAC2vVSXCupeqjb5_eRNvjZbKnbke2DjqM`} title='tttt' allowFullScreen>
                                        </iframe> */}

                  <a
                    href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                    target="_blank"
                  >
                    <img src={`${video.snippet.thumbnails.high.url}`} />
                  </a>
                  {/* </div> */}
                  {/* <div>
                                    <h4>{video.snippet.title}</h4>
                                    <h4>Hello</h4>
                                    </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MotionWrap(Gallery);
