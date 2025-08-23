"use client";
import styles from "./eachmedicine.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToHistory } from "../store/slices/historySlice.js";

const Eachmedicine = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToHistory(item));
  };

  return (
    <Link href={`/medicine/${item.id}`}>
      <div
        onClick={handleClick}
        className={`${styles["eachcontainer"]} relative h-[300px] w-[177px]`}
      >
        <img src={item.image} alt={item.item_name} />
        <div className={styles["detailed"]}>
          <div className={styles["companyname"]}>{item.company}</div>
          <div className={styles["productname"]}>{item.item_name}</div>
          <div className={styles["price"]}>
            <span className={styles["ongoingprice"]}>Rs.{item.current_price}</span>
            <span className={styles["originalprice"]}>Rs.{item.original_price}</span>
            <span className={styles["discount"]}>({item.discount_percentage} off)</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Eachmedicine;
