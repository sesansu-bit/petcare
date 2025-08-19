import Dynamicfood from "@/components/dynamicfood.jsx";

export default async function Dynamicfoodstore({ params }) {
  const { id } = await params;   // 🔥 params ko await karna zaruri hai
  return <Dynamicfood id={id} />;
}
