'use client'
import styles from "./hero.module.css";
import Image from "next/image";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPaw } from "react-icons/fa6";
import { GiSittingDog } from "react-icons/gi";
import Link from 'next/link';

export default function Hero() {
  return (
      <>
          <div className="w-screen relative top-0 left-0  h-screen overflow-hidden">
        <Image
      src="/about3.jpeg"
                  alt="Pet Image"
          fill 
          sizes="100%"
      className="absolute top-0 left-0 z-0  brightness-80  object-cover"
    />      
  
              <div className={`${styles["cover"]}  top-0 left-0 relative z-5 flex flex-col items-center w-full h-full `}>
                  
                  <div className={`${styles["pet-title"]} rounded-[10px] text-white text-[2.2rem] `}>
                    Love Your <span className={`${styles["pet"]} `}>Pets </span> Give <span className={`${styles["pet"]} `}>Them</span> Care.
                  </div>      
                 <div className={`${styles["short-title"]} text-white text-[3rem] `}> we provide always our best service for our clients and always try to achieve our client's and satisfaction.</div>  
  
            <div className={`${styles["botton-box"]} flex justify-evenly text-white rounded-[10px]`}>
  <Link href="/cloth"   className={`${styles["botton1"]} bg-white flex justify-center`}> Buy Cloth</Link>
    <Link href="#contactpage"  className={`${styles["botton2"]} bg-white text-black flex justify-center`}> Register Now
</Link>

                  </div>  
            <div className={`${styles["bottom-container"]} bg-white z-1  fixed bottom-0 h-[120px] w-full `}> </div>
                  <div className={`${styles["bottom-container"]}  z-3 flex justify-evenly fixed bottom-0 h-[160px] w-full `}> 
            
                      <div className={`${styles["container"]}  z-1 flex flex-col justify-center items-center h-full w-[120px] `}>
                     <div className={`${styles["pawicon"]}  z-1 flex justify-center items-center scale-200  h-[22px] w-full `}><FaPaw /> </div>
                     <div className={`${styles["card-title"]}  z-1 flex justify-center items-center h-[30px] w-full text-white `}>Pet Food Care</div>
                     <div className={`${styles["card-about"]}  z-1  flex justify-center items-center h-[40px] w-[92%]  `}>"Discover the best nutrition options to keep your pets happy, healthy, full of energy every day." </div>
                   <Link href="#contactpage" className={`${styles["contact"]}  z-1 flex justify-center items-center h-[20px] w-[70%]  `}>contact with us
</Link>
                      </div>
                      <div className={`${styles["container2"]}  z-1 bg-red-500  flex flex-col justify-center items-center  h-full w-[120px] `}> 
                            <div className={`${styles["pawicon"]}  z-1 flex justify-center items-center scale-200  h-[22px] w-full `}><RiCustomerService2Fill /> </div>
                     <div className={`${styles["card-title2"]}  z-1 flex justify-center items-center h-[30px] w-full text-white `}>People Support</div>
                     <div className={`${styles["card-about"]}  z-1  flex justify-center items-center h-[40px] w-[92%]  `}>"Our support team is always here to help you anything your pet needs — anytime, anywhere." </div>
                     <Link href="#contactpage" className={`${styles["contact2"]}  z-1 flex justify-center items-center h-[20px] w-[70%]  `}>contact with us 
</Link>
                      </div>
                      <div className={`${styles["container"]}  z-1 flex flex-col justify-center items-center h-full w-[120px] `}>
                     <div className={`${styles["pawicon"]}  z-1 flex justify-center items-center scale-200  h-[22px] w-full `}><GiSittingDog /></div>
                     <div className={`${styles["card-title"]}  z-1 flex justify-center items-center h-[30px] w-full text-white `}>Personal Trainer</div>
                     <div className={`${styles["card-about"]}  z-1  flex justify-center items-center h-[40px] w-[92%]  `}>"Your pet’s personal trainer helping them learn good habits , wel behaved one paw at a time!" </div>
                      <Link href="#contactpage" className={`${styles["contact"]}  z-1 flex justify-center items-center h-[20px] w-[70%]  `}>contact with us
 </Link>
    
                      </div>   
</div>             
</div>
</div>

      </>   
  );
}
