"use client"
import styles from "./navbar.module.css";
import { FaPaw } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Search from "./search.jsx";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const [search, setSearch] = useState(false);
  const bagitem = useSelector((store) => store.bagitem);

  const [mounted, setMounted] = useState(false);

  // Only render dynamic values after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <> 
      <div className={`${styles["navbar"]} w-screen justify-evenly bg-opacity-80 flex h-[60px] items-center fixed z-12`}>
         
        <Link href="/"> 
          <div className="flex">    
            <div className={`${styles["p"]} bg-black text-green h-[40px] w-[40px] justify-center text-black rounded-[50%] flex z-1`}>
              <FaPaw />
            </div> 
            <div className={`${styles["title"]} flex text-white `}>
              Pet <span className={`${styles["care"]}`}>Care</span>
            </div>
          </div>
        </Link> 

          <div className={`${styles["itemcover"]} flex text-white w-[50%] justify-evenly`}>
            <Link href="/cloth" className={`${styles["clothtab"]} text-white`}>Cloth</Link>  
            <Link href="/medicine" className={`${styles["medicinetab"]} text-white`}>Medicine</Link>  
            <Link href="/food" className={`${styles["foodtab"]} text-white`}>Food</Link>   
          </div> 

            <div onClick={() => setSearch(true)} className={`${styles["search2cover"]} h-[35px] flex w-[30%] bg-white rounded-[30px] flex-row border  text-white items-center `}>

           <div className={`${styles["searchicon2"]} flex  items-center h-[25px] w-[25px] `} >
            <FaSearch className={`${styles["icon2"]} `}/> 
          </div>        
 <p>search for items... </p>
 </div>




        <div className={`${styles["threecover"]} flex justify-around items-center w-[170px] h-[35px]`}>
          <div className={`${styles["searchicon"]} flex justify-center items-center h-[25px] w-[25px] border-white`} onClick={() => setSearch(true)}>
            <FaSearch /> 
          </div>        

          <Link href="/cart" className={`${styles["cart"]} min-w-[3rem] flex justify-center scale-120 h-[1.6rem] items-center rounded-[10px] text-white`}>
            <FaCartPlus /> {mounted ? bagitem.length : 0}
          </Link>

          <div className={styles["sideicon"]} onClick={() => setShowSide(!showSide)}>
            <FaBarsStaggered className={`${styles["icon"]} ${showSide && styles["iconwhite"]}`} />
          </div>   
        </div>

        {showSide && (
          <div className={`${styles["sideitem"]} ${showSide && styles["sideitem2"]}`}>
            <Link href="/cloth" className={`${styles["cloth"]} text-white`}>Cloth</Link>  
            <Link href="/medicine" className={`${styles["medicine"]} text-white`}>Medicine</Link>  
            <Link href="/food" className={`${styles["food"]} text-white`}>Food</Link>   
          </div>
        )}
       
        <Search search={search} setSearch={setSearch} />
      
      </div>
    </>   
  );
}
