import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <center>
        <h4>Welcome to Nandini's Food Blog!!</h4>

        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg"
                className="home-image"
                alt="Carrot Cake"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg"
                className="home-image"
                alt="Chocolate Brownie"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg"
                className="home-image"
                alt="Banana Pancake"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </center>
    </div>
  );
}
