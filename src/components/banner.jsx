import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
      <>
              <div className={`${styles["banner"]} relative w-screen  h-[20vh] z-7`}>
          <Image
               src="/care.jpeg"
                           alt="Pet Image"
                           fill
               className=" absolute object-contain"
             />   
          </div>
      </>   
  );
}
