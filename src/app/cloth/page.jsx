import dynamic from "next/dynamic";
import { getItems } from "@/lib/fetchData.js";

// Lazy load the Cloth component
const Cloth = dynamic(() => import("@/components/cloth.jsx"));

export default async function ClothStore() {
  const items = await getItems();

  return (
    <div>
      <Cloth clothdata={items.items.itemcloth} />
    </div>
  );
}
