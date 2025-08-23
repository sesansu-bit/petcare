import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
      <>
              <div className={`${styles["banner"]} relative w-screen  h-[300px] z-7`}>
          <Image
               src="/care.jpeg"
                           alt="Pet Image"
                           fill
               className=" absolute object-auto"
             />   
          </div>
      </>   
  );
}
