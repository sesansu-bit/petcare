import dynamic from "next/dynamic";
import { getItems } from "@/lib/fetchData.js";

// Lazy load the Medicine component
const Medicine = dynamic(() => import("@/components/medicine.jsx"));

export default async function MedicineStore() {
  const items = await getItems();

  return (
    <div>
      <Medicine medicinedata={items.items.itemmedicine} />
    </div>
  );
}
