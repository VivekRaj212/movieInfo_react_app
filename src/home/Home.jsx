import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import image from "../img/bannermovie.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [apis, setApi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  let url = "https://api.tvmaze.com/shows";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setApi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const numofTotalPages = Math.ceil(apis.length / postPerPage);
  const pages = [...Array(numofTotalPages + 1).keys()].slice(1);
  const lastPageIndex = currentPage * postPerPage;
  const firstPageIndex = lastPageIndex - postPerPage;

  const visiblePages = apis.slice(firstPageIndex, lastPageIndex);

  const previousHandler = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextHandler = () => {
    if (currentPage != numofTotalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="header">
      <div className="background">
        <img src={image} alt="" />
        <div className="top">
          <h2>Cineplex 🎦</h2>
          <p style={{ fontSize: "15x" }}>
            TV shows and web series database.
            <br />
            Create personalised schedules. Episode guide, cast, crew and
            character information.
          </p>
        </div>
      </div>

      <div className="heading">
        <u>
          <h2>Latest Shows Added 📽</h2>
        </u>
      </div>

      <div className="container">
        {visiblePages.map((api, index) => {
          return (
            <div className="card" key={index}>
              <div class="card-header">
                <img src={api.image.medium} alt="rover" />
              </div>
              <div className="card-body">
                <span class="tag tag-teal">{api.name}</span>
                <h6
                  style={{ fontFamily: "oswald", margin: "3px auto auto 5px" }}
                >
                  rating: {api.rating.average} ⭐
                </h6>
                <p style={{ fontWeight: 600 }}>
                  {api.summary
                    .replaceAll("<b>", "")
                    .replaceAll("</b>", "")
                    .replaceAll("<p>", "")
                    .replaceAll("</p>", "")
                    .substring(0, 160)}
                </p>
                <div class="user">
                  <Link to={`/movieinfo/${api.id}`}>
                    <button>Know more</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button>
          <span onClick={previousHandler}>Prev</span>
        </button>
        <p style={{ color: "white" }} className="number">
          {pages.map((page) => (
            <span
              key={page}
              className={`${currentPage === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >{`${page} | `}</span>
          ))}
        </p>
        <button>
          <span onClick={nextHandler}>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
