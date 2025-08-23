import styles from "./petfood.module.css";
import Image from "next/image";

export default function Petfood() {
  return (
      <>
      <div className= "w-screen  h-auto  z-7">
        <div className={`${styles["dress-title"]} w-full h-[5%] flex items-center justify-center text-xl font-bold text-green-500`}>
                  Choose The Right Food
        </div>
        
        <div className={`${styles["food-box"]} w-full flex-wrap justify-center   flex h-[90%]  z-7`}>

          <div className={`${styles["food"]} w-[160px]   flex flex-col h-[320px] items-center z-7`}>
            <div className={`${styles["petfood-circle"]} w-[80px]   relative rounded-[50%] border  h-[90px]  z-7`}>
             <Image
                       src="/about1.jpeg"
                                   alt="Pet Image"
                                   fill
                                       className="absolute object-cover rounded-[50%]" /> 
            </div>
                     <div className={`${styles["food-title"]} w-[160px] h-[30px] flex   text-white justify-center z-7`}>Types of Pet Food </div>
            <div className={`${styles["pet-text"]} w-full h-[62%]  flex text-white justify-center items-evenly z-7`}>
              1 . Dry Food (Kibble)
              <br/>
            2 . Wet/Canned Food
 <br/>
3 . Raw Food
 <br/>
4 . Homemade Meals (BARF diet)
 <br/>
5 . Freeze-Dried 
            </div>

          </div>
          





             <div className={`${styles["food1"]} w-[160px]   flex flex-col h-[320px] items-center z-7`}>
            <div className={`${styles["petfood-circle"]} w-[80px]   relative rounded-[50%] border  h-[90px]  z-7`}>
             <Image
                       src="/about2.jpeg"
                                   alt="Pet Image"
                                   fill
                                       className="absolute object-cover rounded-[50%]" /> 
            </div>
                     <div className={`${styles["food-title"]} w-[160px] h-[30px] flex   text-white justify-center z-7`}>Nutrition
</div>
            <div className={`${styles["pet-text"]} w-full h-[62%]  flex text-white justify-center items-evenly z-7`}>
            1 . Protein Needs
 <br/>
 2 . Vitamins & Minerals
 <br/>
3 . Grain-Free 
 <br/>
4 . Age-Specific Nutrition 
 <br/>
              5 . Breed-Specific Diets
              
             
            </div>

            </div>
   <div className={`${styles["food1"]} w-[160px]   flex flex-col h-[320px] items-center z-7`}>
            <div className={`${styles["petfood-circle"]} w-[80px]   relative rounded-[50%] border  h-[90px]  z-7`}>
             <Image
                       src="/about3.jpeg"
                                   alt="Pet Image"
                                   fill
                                       className="absolute object-cover rounded-[50%]" /> 
            </div>
                     <div className={`${styles["food-title"]} w-[160px] h-[30px] flex   text-white justify-center z-7`}>Health Benefits </div>
            <div className={`${styles["pet-text"]} w-full h-[62%]  flex text-white justify-center items-evenly z-7`}>
           1 . Skin & Coat Health
<br/>
2 . Gut Health
<br/>
3 . Joint Strength
<br/>
4 . Weight Manage
<br/>
5 . How to Avoid Allergies
             
  </div>
          </div>



             <div className={`${styles["food1"]} w-[160px]   flex flex-col h-[320px] items-center z-7`}>
            <div className={`${styles["petfood-circle"]} w-[80px]   relative rounded-[50%]   h-[90px]  z-7`}>
             <Image
                       src="/about4.jpeg"
                                   alt="Pet Image"
                                   fill
                                       className="absolute object-cover rounded-[50%]" /> 
            </div>
                     <div className={`${styles["food-title"]} w-[160px] h-[30px] flex   text-white justify-center z-7`}>Get Right Food </div>
            <div className={`${styles["pet-text"]} w-full h-[62%]  flex text-white justify-center items-evenly z-7`}>
            1 . Reading Labels 
              <br/>

2 . Trusted Brands 
              <br/>

3 . Veterinarian Recommendations
              <br/>

4 . Transit to New Food
              <br/>

5 . Feeding Schedule
         

            </div>

          </div>
          




          
          

        
  </div>


        
      </div>
      </>   
  );
}