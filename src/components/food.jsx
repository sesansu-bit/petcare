"use client";
import styles from "./food.module.css";
import Eachfood from "./eachfood.jsx";
import { FaArrowDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setFoods } from "../store/slices/foodslice.js";
import { useState, useEffect } from "react";

export default function Food({fooddata}) {
  const [showSide, setShowSide] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const fooditem = useSelector((state) => state.food.items);

  const dispatch = useDispatch();
    useEffect(() => {
      if (fooddata && fooddata.length > 0) {
        dispatch(setFoods(fooddata));
      }
    }, [fooddata, dispatch]);
  
  
  
  if (!fooditem || fooditem.length === 0) {
    return <p>Loading food items...</p>;
  }

  // Sorting & Filtering Logic
  const getFilteredProducts = () => {
    let products = [...fooditem];

    if (selectedOption === "asc") {
      products.sort((a, b) => a.current_price - b.current_price);
    } else if (selectedOption === "desc") {
      products.sort((a, b) => b.current_price - a.current_price);
    } else if (selectedOption === "500") {
      products = products.filter((item) => item.current_price <= 500);
    } else if (selectedOption === "1000") {
      products = products.filter((item) => item.current_price >= 1000);
    }

    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <>
      {/* Top Bar */}
      <div
        className={`${styles["topbox"]} relative w-screen border border-white h-[110px]`}
      >
        <div
          onClick={() => setShowSide(!showSide)}
          className={`${styles["cover"]} relative flex justify-center items-center w-[160px] rounded-[8px] h-[30px] cursor-pointer`}
        >
          <div className={`${styles["sort"]} relative w-[112px] h-[25px]`}>
            Sort by price
          </div>
          <div className={`${styles["arrow"]} relative h-[25px] flex justify-center`}>
            <FaArrowDown />
          </div>
        </div>
      </div>

      {/* Dropdown */}
      {showSide && (
        <div
          className={`${styles["dropdown"]} fixed z-5 w-[160px] rounded-[8px] bg-white text-black`}
        >
          <div
            className="w-[160px] border border-gray-300 flex justify-center items-center h-[25px] cursor-pointer"
            onClick={() => {
              setSelectedOption("asc");
              setShowSide(false);
            }}
          >
            Ascending
          </div>
          <div
            className="w-[160px] border border-gray-300 flex justify-center items-center h-[25px] cursor-pointer"
            onClick={() => {
              setSelectedOption("desc");
              setShowSide(false);
            }}
          >
            Descending
          </div>
          <div
            className="w-[160px] border border-gray-300 flex justify-center items-center h-[25px] cursor-pointer"
            onClick={() => {
              setSelectedOption("500");
              setShowSide(false);
            }}
          >
            500 and below
          </div>
          <div
            className="w-[160px] border border-gray-300 flex justify-center items-center h-[25px] cursor-pointer"
            onClick={() => {
              setSelectedOption("1000");
              setShowSide(false);
            }}
          >
            1000 and above
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div
        className={`${styles["cloth-container"]} relative w-screen z-1 h-auto grid grid-cols-4 gap-4`}
      >
        {filteredProducts.map((items) => (
          <Eachfood key={items.id} item={items} />
        ))}
      </div>
    </>
  );
}
