import HomeSlider from "../HomeSlider/page";
import HomeSectionCart from "../HomeSectionCart/page";
import { Men, Women, Electronics, Others} from "../ProductData/page"
export default function Homes() {
  return (
    <>
      <HomeSlider />
      <main>
        <HomeSectionCart title="👔 Men Collection" products={Men} />
        <HomeSectionCart title="👗 Women Collection" products={Women} />
        <HomeSectionCart title="💻 Electronics" products={Electronics} />
        <HomeSectionCart title="🛒 Others" products={Others} />
      </main>
    </>
  );
}
