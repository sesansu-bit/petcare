import Dynamiccloth from "@/components/dynamiccloth.jsx";

export default async function Dynamicclothstore({ params }) {
  const { id } = await params;   // ✅ params ko await karna zaruri hai
  return <Dynamiccloth id={id} />;
}
