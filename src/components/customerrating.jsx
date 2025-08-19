"use client"
import styles from "./customerrating.module.css";
import { IoIosContact } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const ratingsData = [
  {
    name: "Anjali Sharma",
    review:
      "I bought a winter jacket for my pug from here and it's super cute and cozy! The material is soft, and my pet loves wearing it. The stitching is neat, and it feels premium. Total worth it!",
  },
  {
    name: "Rohit Mehra",
    review:
      "The hoodie fits perfectly on my labrador. Looks stylish and keeps him warm during evening walks. Even after a few washes, the color hasn't faded, and the fabric feels just as soft as new.",
  },
  {
    name: "Amit Sharma",
    review:
      "Very comfortable and my dog loves it! I can see he feels free to run and play without any discomfort. The size guide was accurate and helped me pick the perfect fit.",
  },
  {
    name: "Priya Singh",
    review:
      "Good fabric quality, perfect fit. The delivery was quick and packaging was neat. My golden retriever absolutely adores wearing this during our park walks.",
  },
  {
    name: "Ravi Verma",
    review:
      "Soft material and fast delivery. I was impressed by the quality at this price point. My beagle seems much happier wearing this in the colder mornings.",
  },
  {
    name: "Neha Kapoor",
    review:
      "My cat looks super cute in this! The design is simple yet elegant, and the comfort level is amazing. She even sleeps in it sometimes which is rare for her.",
  },
  {
    name: "Saurabh Mehta",
    review:
      "Worth the price, recommended. The cloth feels breathable yet warm enough for winters. Plus, I received so many compliments from neighbors during our walks.",
  },
  {
    name: "Anjali Nair",
    review:
      "Perfect for summer, lightweight fabric that doesn’t make my dog feel hot. The colors are bright and cheerful, making it look fresh even after multiple wears.",
  },
  {
    name: "Manoj Gupta",
    review:
      "Colors are vibrant, my puppy looks adorable. The overall quality is excellent and the price is reasonable for the finish and comfort you get.",
  },
  {
    name: "Simran Kaur",
    review:
      "Very happy with the purchase. It fits exactly as shown in the size chart and the customer service team was really helpful in guiding me before buying.",
  },
];


export default function Customerrating() {
  return (
    <>
      <div
        className={`${styles["dress-title"]} w-full h-[5rem] text-white flex items-center justify-center text-xl font-bold text-green-500`}
      >
        Our Product Rating
      </div>

      <div
        className={`${styles["customerratingcover"]} z-7 flex items-center h-[40vh] overflow-x-auto gap-4`}
      >
        <div
          className={`${styles["customerrating"]} z-7 flex items-center gap-6`}
        >
          {ratingsData.map((rating, index) => (
            <div
              key={index}
              className={`${styles["rating-box"]} w-[350px] z-7 h-[250px] flex-shrink-0`}
            >
              <div
                className={`${styles["rating-contact"]} float-right border-2 flex justify-center items-center border-green-500 w-[70px] z-7 rounded-[50%] h-[70px]`}
              >
                <IoIosContact className="scale-350" />
              </div>
              <p className={`${styles["name"]}`}>{rating.name}</p>
              <div
                className={`${styles["rating-text"]} w-[95%] h-[60%]`}
              >
                “{rating.review}”
              </div>
              <div
                className={`${styles["rating"]} flex items-center w-[50%] justify-evenly h-[13%]`}
              >
                <FaStar className={`${styles["star"]}`} />
                <FaStar className={`${styles["star"]}`} />
                <FaStar className={`${styles["star"]}`} />
                <FaStar className={`${styles["star"]}`} />
                <FaStar className={`${styles["star"]}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
