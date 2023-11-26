import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import FoodData from "./components/FoodData"
import './App.css';
import Search from "./components/Search.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />

      {
        FoodData.filter((val) => {
          if (searchTerm === "") {
            return val;
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map(footItem => {
          return (
            <div key={footItem.id}>
              <FoodBox food={footItem} totalCost={totalCost} />
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
