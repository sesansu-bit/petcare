"use client"
import styles from "./bag.module.css";
import Calculation from "./calculation.jsx";
import Eachbag from "./eachbag.jsx";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Bag = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const bagItems = useSelector((state) => state.bagitem);
  const items = useSelector((state) => state.items);

  //  unique bag items
  const bagitem = items.filter(
    (item, index, self) =>
      bagItems.includes(item.id) &&
      self.findIndex((t) => t.id === item.id) === index
  );

  if (!mounted) return null; // avoid hydration mismatch

  return (
  <>
     {bagitem.length ===0 &&
 <div className={styles["add"]}><p>Add something to Bag</p></div>
 }
    <div className={styles["fullcart"]}>
      <div className={styles["leftcart"]}>
        {bagitem.map((itembag, index) => (
          <Eachbag key={`${itembag.id}-${index}`} item={itembag} />
        ))}
      </div>
      <div className={styles["rightcart"]}>
        <Calculation />
      </div>
      </div>
      </>
  );
};

export default Bag;
