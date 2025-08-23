"use client"
import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
const aboutData = [
  {
    id: 1,
    title: "Our Mission",
    content: [
      "Providing quality products for every pet’s needs.",
      "Ensuring happy and healthy pet lifestyles.",
      "Awareness about responsible pet ownership.",
      "Making pet care accessible to all."
    ],
    image: "/about1.jpeg",
    reverse: false, // image left side
  },
  {
    id: 2,
    title: "What We Offer",
    content: [
      "Wide range of pet food, grooming products.",
      "Personalized pet training support.",
      "Online consultation with vets and trainers.",
      "Fast delivery & easy return policy."
    ],
    image: "/about2.jpeg",
    reverse: true, // image right side
  },
  {
    id: 3,
    title: "Why Only Us",
    content: [
      "Trusted by thousands of pet parents.",
      "Premium & affordable product collection.",
      "Friendly support team available 24/7.",
      "Passionate about pets — just like you!"
    ],
    image: "/about3.jpeg",
    reverse: false,
  },
  {
    id: 4,
    title: "Our Journey",
    content: [
      "Founded with a love for animals.",
      "Growing community of loyal customers.",
      "Expanding across cities to serve better.",
      "Continuously improving based on feedback."
    ],
    image: "/about4.jpeg",
    reverse: true,
  },
];

  return (
    <div className={`${styles["about-container"]} w-screen flex justify-evenly flex-col h-auto`}>
      <div className={`${styles["title"]} w-full flex justify-end h-[5%]`}>
        <span className={`${styles["choose"]} text-green-500`}> - why should you choose us ?</span>
      </div>

      {aboutData.map((section) => (
        <div
          key={section.id}
          className={`${styles["container"]} w-full flex h-[160px] ${
            section.reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className={`${styles["circle"]} w-[110px] flex h-[110px] relative rounded-[50%]`}>
            <Image
              src={section.image}
              alt="Pet Image"
              fill
              sizes="110px"
              className="absolute object-cover rounded-[50%]"
            />
          </div>

          <div className={`${styles["right-content"]} w-[400px]  h-full`}>
            <div className={`${styles["mission"]} justify-center w-full flex h-[19%]`}>
              {section.title}
            </div>
            <div className={`${styles["subtopic"]} w-full flex flex-col h-[81%]`}>
              {section.content.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
