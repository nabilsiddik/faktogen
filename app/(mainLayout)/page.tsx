import { getCartProducts } from "@/utils/GetCartProducts";
import ProductSection from "../Sections/HomeSections/ProductSection";
import SliderSection from "../Sections/HomeSections/SliderSection";

export default async function Home() {
  console.log('cart products', await getCartProducts())
  return (
    <div>
      <SliderSection/>
      <ProductSection/>
    </div>
  );
}
