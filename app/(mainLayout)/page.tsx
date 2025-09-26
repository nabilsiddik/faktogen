import ProductSection from "../Sections/HomeSections/ProductSection";
import SliderSection from "../Sections/HomeSections/SliderSection";

export default async function Home() {
  return (
    <div>
      <SliderSection/>
      <ProductSection/>
    </div>
  );
}
