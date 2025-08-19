"use client"
import styles from "./dynamiccloth.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBag, addToBag } from "../store/slices/bag.js";
import { useState, useEffect } from "react";

export default function Dynamiccloth({ id }) {
  const products = useSelector((state) => state.cloth.items);
  const item = products.find((product) => product.id === id);

  const bagItems = useSelector((state) => state.bagitem);
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensure client-only rendering for bag-dependent UI
  }, []);

  if (!item) {
    return <p style={{ padding: "20px" }}>Product not found</p>;
  }

  const handleRemove = () => {
    dispatch(removeFromBag(item.id));
  };

  const handleAddToBag = () => {
    dispatch(addToBag(item.id));
  };

  // only check bagItems after mounting
  const elementFound = mounted && bagItems.indexOf(item.id) >= 0;

  return (
    <div className={`${styles["dynamicfood"]} h-auto w-screen`}>
      <div className={`${styles["productimagecover"]} relative h-[380px] w-[96%]`}>
        <Image
          src={item.image}
          alt="Pet Image"
          fill
          className={`${styles["hello"]} absolute object-cover`}
        />
      </div>

      <div className={styles["detailed"]}>
        <div className={styles["companyname"]}>{item.company}</div>
        <div className={styles["productname"]}>{item.item_name}</div>
        <div className={styles["price"]}>
          <span className={styles["ongoingprice"]}>Rs.{item.current_price}</span>
          <span className={styles["originalprice"]}>Rs.{item.original_price}</span>
          <span className={styles["discount"]}>({item.discount_percentage} off)</span>
        </div>

        {elementFound ? (
          <div className={styles["newremove"]} onClick={handleRemove}>
            remove item
          </div>
        ) : (
          <div className={styles["newaddtocart"]} onClick={handleAddToBag}>
            Add to Cart
          </div>
        )}
      </div>
    </div>
  );
}
