import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./recipeDetails.css";

export default function RecipeDetails() {
  let { id } = useParams();
  const [fooditem, setFoodItem] = useState([]);

  useEffect(() => {
    GetRecipeDetailsById();
  }, []);

  const GetRecipeDetailsById = () => {
    axios
      .get("http://localhost:5005/foodRecepies/" + id)
      .then((result) => {
        setFoodItem(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <center>
        <h1> {fooditem.name} Recipe</h1>
        <hr />
      </center>
      <center>
        <img
          src={fooditem.imageUrl}
          alt={fooditem.name}
          className="item-img-top "
        />
      </center>
      <div className="card recipe-card">
        <h4> Ingredients:</h4>

        <p>{fooditem.Ingredients}</p>
        {/* <div>
          {fooditem.Ingredients.map((ing) => (
            <ul>
              <li>{ing}</li>
            </ul>
          ))}
        </div> */}

        <h4>Instructions:</h4>
        <p>{fooditem.Instructions}</p>
      </div>
    </div>
  );
}
