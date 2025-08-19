import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
          <div className={`${styles["title"]} flex text-white `}>PetCare</div>

      <div className={styles.links}>
        <a href="#">Home</a>
        <a href="#">Medicine</a>
        <a href="#">Food</a>
        <a href="#">Dress</a>
      </div>

      <div className={styles.social}>
        <span>© 2025 PetCare. All rights reserved.</span>
        <div className={styles.icons}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
