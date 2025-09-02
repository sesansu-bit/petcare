import dynamic from "next/dynamic";

const Bag = dynamic(() => import("@/components/bag.jsx"));

export default function ClothStore() {
  return (
    <div>
      <h1>Cloth Store</h1>
      <Bag />  
    </div>
  );
}
