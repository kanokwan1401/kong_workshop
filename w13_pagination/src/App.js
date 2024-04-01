import { useEffect, useState } from "react";
import "./App.css";
import FoodComponent from "./components/FoodComponent";
import MenuData from "./data/MenuData";

function App() {
  const [foodData, setFoodData] = useState(MenuData);
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(0);

  const pagination = () => {
    const foodPerPage = 4;
    const page = Math.ceil(MenuData.length / foodPerPage);

    const newFood = Array.from({ length: page }, (data, index) => {
      const start = index * foodPerPage; //index[0]
      return MenuData.slice(start, start + foodPerPage);
    });
    return newFood;
  };

  const handdlePage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setFoodData(paginate[page]);
  }, [page]);

  return (
    <div className="App">
      <h1>FoodCard🍛 | Pagination</h1>
      <div className="container">
        {foodData.map((data, index) => {
          return <FoodComponent key={index} {...data} />;
        })}
      </div>
      <div className="pagination-container">
        {dataInPage.map((data, index) => {
          return (
            <button
              key={index}
              onClick={() => handdlePage(index)}
              className={`page-btn ${index === page ? "active-btn" : null}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
