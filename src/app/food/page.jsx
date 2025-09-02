import dynamic from "next/dynamic";
import { getItems } from "@/lib/fetchData.js";

// Lazy load the Food component
const Food = dynamic(() => import("@/components/food.jsx"));

export default async function FoodStore() {
  const items = await getItems();

  return (
    <div>
      <Food fooddata={items.items.itemfood} />
    </div>
  );
}
