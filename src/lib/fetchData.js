export async function getItems() {
  const res = await fetch("https://newbackend-sypreen.onrender.com/items", );
  if (!res.ok) throw new Error("Failed to fetch");
  const items = await res.json();
  return items;
}




