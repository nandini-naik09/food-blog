import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import FoodItems from "./components/FoodItems";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RecipeDetails from "./components/RecipeDetails"

function App() {
  return (
    <div >
      <Menu/>
    <Routes>
    <Route exact path="/" Component={Home} />
          <Route path="/FoodItems" Component={FoodItems} />
          <Route path="/Home" Component={Home} />
          <Route path="/Recipe/:id" Component={RecipeDetails} />
          <Route path="*" Component={NotFound} />
    </Routes>
    </div>
  );
}

export default App;
