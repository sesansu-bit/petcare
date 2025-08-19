import Cloth from "@/components/cloth";
import Food from "@/components/food";
import Medicine from "@/components/medicine";

export default async function Apifetch() {
  const res = await fetch("http://localhost:3005/items", { cache: "no-store" });
  const items  = await res.json();
console.log("API Data:", items);
  return (
    <>
      <Cloth clothdata={items.itemcloth} />
      <Food fooddata={items.itemfood} />
      <Medicine medicinedata={items.itemmedicine} />
    </>
  );
}
