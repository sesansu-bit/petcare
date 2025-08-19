import Dynamicmedicine from "@/components/dynamicmedicine";

export default async function Dynamicmedicinestore({ params }) {
  const { id } = await params;   // 🔥 params ko await karo
  return <Dynamicmedicine id={id} />;
}
