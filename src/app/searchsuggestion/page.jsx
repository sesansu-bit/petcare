import { Suspense } from "react";
import Searchsuggestion from "@/components/Searchsuggestion.jsx";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Searchsuggestion />
    </Suspense>
  );
}
