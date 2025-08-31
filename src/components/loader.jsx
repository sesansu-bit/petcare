import styles from "./loader.module.css";
import { FaPaw } from "react-icons/fa6";

export default function Loader() {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles["spinner"]}>
        <FaPaw className={styles["paw-icon"]} />
      </div>
    </div>
  );
}
