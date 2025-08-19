"use client"
import styles from "./browsing.module.css";
import Eachbrowsing from "./eachbrowsing.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadHistory } from "../store/slices/historySlice.js";
import { useRouter } from "next/navigation";

export default function Browsing() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.items);
  const router = useRouter();

  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);

  if (!history || history.length === 0) return null;

  const handleClick = (item) => {
    if (item.type == "food") {
      router.push("/food"); 
         }
   if (item.type == "cloth") {
      router.push("/cloth"); 
    }
       if (item.type == "medicine") {
      router.push("/medicine"); 
         }
  };

  return (
    <div className="w-screen h-auto">
      <div
        className={`${styles["dress-title"]} w-full h-[5%] flex items-center justify-center text-xl font-bold text-green-500`}
      >
        Continuously Browsing Items
      </div>
      <div className={`${styles["browsing-container"]} w-full h-full`}>
        {history.map((item) => (
          <div key={item.id} onClick={() => handleClick(item)}>
            <Eachbrowsing item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
