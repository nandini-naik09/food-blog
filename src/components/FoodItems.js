import axios from "axios";
import React, { useState, useEffect } from "react";
import "./FoodItem.css";
import { Link } from "react-router-dom";

export default function FoodItems() {
  const [fooditems, setfooditems] = useState([]);

  useEffect(() => {
    getFoodItems();
  }, []);

  const getFoodItems = () => {
    axios
      .get("http://localhost:5005/foodRecepies")
      .then((result) => {
        if (result.status === 200) {
          setfooditems(result?.data);
        }
      })
      .catch((error) => {
        console.log("rejected");
        console.log(error);
      });
  };

  return (
    <div>
      {fooditems.map((recipe) => (
        <div key={recipe.id} className="card cardItem">
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="card-img-top item-img-top"
          />
          <h5>{recipe.name}</h5>
          <Link to={"/Recipe/"+recipe.id} className="btn btn-outline-secondary btn-sm"> View Recipe</Link>
          {/* <button>View Recipe</button> */}
          {/* <p>
            <b>Recipe:</b> {recipe.Instructions}
          </p> */}
          {/* <p>{recipe.Instructions}</p> */}
        </div>
      ))}
    </div>
  );
}
