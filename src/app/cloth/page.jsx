import Cloth from "@/components/cloth.jsx";
import { getItems } from "@/lib/fetchData.js";

export default async function ClothStore() {
  const items = await getItems(); 
  return (
    
      <Cloth clothdata={items.items.itemcloth} />

  );
}
