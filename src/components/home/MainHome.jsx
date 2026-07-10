import Banner from "./banner/Banner";
import ScientistCarousel from "./scientist/ScientistCarousel";
import Homepage from "./homepage/homepage";
import { SEO } from "../shared";

const Home = () => {
  return (
    <>
      <SEO 
        title="Interactive Biology Learning Platform" 
        description="ZooLearn is a modern, interactive Biology learning platform featuring 3D models, simulations, taxonomy trees, and NEET/CBSE study materials. Learn Zoology and Botany in an immersive way."
        keywords="Biology, Interactive Learning, ZooLearn, 3D Biology, NEET Biology, CBSE Biology, Taxonomy Tree, Zoology, Botany, Science Education"
        canonicalUrl="/"
      />
      <Banner />
      <ScientistCarousel />
      <Homepage />
    </>
  );
};

export default Home;
