import Food from "@/components/food.jsx";
import { getItems } from "@/lib/fetchData.js";

export default async function FoodStore() {
  const items = await getItems(); 
  return (
    
     <Food fooddata={items.items.itemfood} />

  );
}