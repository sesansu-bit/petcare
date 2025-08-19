import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Petdress from "@/components/petdress.jsx";
import Petfood from "@/components/petfood.jsx";
import Banner from "@/components/banner.jsx";
import Contact from "@/components/contact.jsx";
import Browsing from "@/components/browsing.jsx";
import Customerrating from "@/components/customerrating.jsx";

export default function Home() {
  return (
    <>
<Hero />
      <About />
      <Browsing />
      <Petdress />
      <Customerrating /> 
      <Petfood></Petfood>
      <Banner></Banner>
    <div id="contactpage">
        <Contact></Contact>
      </div>


 </>
  );
}
