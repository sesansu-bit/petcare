import Medicine from "@/components/medicine.jsx";
import { getItems } from "@/lib/fetchData.js";
export default async function MedicineStore() {
  const items = await getItems(); 
  return (
 <Medicine medicinedata={items.items.itemmedicine} />
  );
}


  
