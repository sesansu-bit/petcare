import Image from "next/image";
import styles from "./petdress.module.css";

export default function Petdress() {
  return (
    <div className="w-screen h-auto p-6 bg-white flex justify-center items-start">
          <div className="h-[95%] text-justify leading-relaxed text-black relative">
              

<div className={`${styles["dress-title"]} w-full h-[5%] flex items-center justify-center text-xl font-bold text-green-500`}>
          Dress Your Pet
              </div>
<div className={`${styles["dress"]} w-full h-full   `}>

      
                  <div className={`${styles["img-container"]}  w-[190px] h-[190px] float-left  relative`}>
          <Image
            src="/petdress2.jpeg"
            alt="Pet Dress"
              fill
              sizes="100%"
            className="object-cover rounded-md"
          />
        </div>

        {/* Text flows around image */}
        <p  className={`${styles["para"]} h-full `}>
       At our pet shop, we believe that pets are not just animals they’re family, and they deserve to look and feel their best. That’s why we offer a wide range of stylish and comfortable pet dresses designed with both fashion and function in mind. Whether you're heading out for a walk in the park, celebrating a special occasion, or just want your furry friend to stand out from the crowd, our outfits add charm without compromising comfort. Each dress is crafted from soft, breathable fabric that keeps your pet relaxed all day. With seasonal collections, trendy designs, and easy-to-wear fits, our clothing ensures that your pet is always dressed to impress — no matter the weather or event. From cozy winter hoodies to fun summer tees, and even festive ethnic wear for celebrations, we have something special for every paw-some personality. So let your pet express their unique style with our handpicked, high-quality fashion pieces made just for them. Whether you're heading out for a walk in the park, celebrating a special occasion, or just want your furry friend to stand out from the crowd.
        </p>
      </div>
          </div>
          </div>
  );
}



