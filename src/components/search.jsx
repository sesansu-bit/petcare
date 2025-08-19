"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./search.module.css";

export default function Search({ search, setSearch }) {
  const [query, setQuery] = useState("");

  const allSuggestions = [
    { label: "Vitamin C & D Medicine", type: "medicine" },
    { label: "Pet Medicine", type: "medicine" },
    { label: "Pet Growth Medicine", type: "medicine" },
    { label: "Alergy Medicine", type: "medicine" },
    { label: "Deworming Tablet Medicine", type: "medicine" },
    { label: "Joint Pain Relief Medicine", type: "medicine" },
    { label: "Skin Care Ointment Medicine", type: "medicine" },
    { label: "Dental Chew Medicine", type: "medicine" },
    { label: "Immunity Booster Medicine", type: "medicine" },
    { label: "Fever & Cold Medicine", type: "medicine" },

    { label: "Winter Cloth", type: "cloth" },
    { label: "Pet Cloth", type: "cloth" },
    { label: "Rain Coat for Pets Cloth", type: "cloth" },
    { label: "Summer T-Shirt Cloth", type: "cloth" },
    { label: "Woolen Sweater Cloth", type: "cloth" },
    { label: "Fancy Costume Cloth", type: "cloth" },
    { label: "Dog Hoodie Cloth", type: "cloth" },
    { label: "Cat Jacket Cloth", type: "cloth" },
    { label: "Soft Blanket Cloth", type: "cloth" },
    { label: "Party Wear Cloth", type: "cloth" },

    { label: "Chicken Biscuit Food", type: "food" },
    { label: "Pedigree Food", type: "food" },
    { label: "Royal Canin Food", type: "food" },
    { label: "Wet Vegetable Canin Food", type: "food" },
    { label: "Grain Free Food", type: "food" },
    { label: "Cat Food", type: "food" },
    { label: "Puppy Starter Food", type: "food" },
    { label: "Adult Dog Food", type: "food" },
    { label: "Fish Flavour Food", type: "food" },
    { label: "Dry Cat Kibble Food", type: "food" },
  ];

  const [suggestions, setSuggestions] = useState(allSuggestions);
  const router = useRouter();

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = allSuggestions.filter((item) =>
      item.label.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSuggestionClick = (item) => {
    setSearch(false);
    setQuery(""); 
    router.push(`/searchsuggestion?type=${item.type}&query=${encodeURIComponent(item.label)}`);
  };

  const handleClose = () => {
    setSearch(false);
    setQuery(""); 
  };

  return (
    <>
      {search && (
        <div
          onClick={handleClose}
          className={`${styles["search-containercover"]} z-15 fixed h-screen top-0 w-screen`}
        >
          {/* Search Bar */}
          <div
            onClick={handleChildClick}
            className={`${styles["search-container"]} flex justify-center items-center z-15 fixed h-[100px] top-0 w-screen`}
          >
            <div className={`${styles["search"]} z-15 h-[50px] w-[80%]`}>
              <input
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
                placeholder="Search for items..."
                className={`${styles["searchinput"]} text-white focus:outline-none placeholder-white h-[100%] w-[100%] px-3`}
              />
            </div>
          </div>

          {/* Suggestions */}
          {query && (
            <div
              onClick={handleChildClick}
              className={`${styles["dropdown"]} fixed bg-black items-start h-auto flex max-h-[210px] overflow-y-auto flex-col w-screen`}
            >
              {suggestions.length > 0 ? (
                suggestions.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(item)}
                    className={`${styles["suggestion"]} w-[100%] text-white hover:bg-gray-700 cursor-pointer`}
                  >
                    {item.label}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 px-3 py-2">No results found</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
