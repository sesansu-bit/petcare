"use client";
import Cloth from "@/components/cloth";  
import Food from "@/components/food";  
import Medicine from "@/components/medicine";  
import { useSearchParams } from "next/navigation";

export default function Searchsuggestion() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  if (type === "cloth") {
    return <Cloth />; 
  }

  if (type === "food") {
    return <Food />; 
  }

  if (type === "medicine") {
    return <Medicine />;
  }

  return <div>No results found</div>;
}
