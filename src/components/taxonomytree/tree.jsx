import AnimaliaFlow from "./AnimaliaFlow";
import { SEO } from "../shared";

function Tree() {
  const schema = {
    "@type": "WebPage",
    "name": "Animal Kingdom Taxonomy Tree",
    "description": "Interactive classification tree for the Kingdom Animalia. Explore phylums, classes, and species visually.",
    "url": "https://zoolearn.in/taxonomy-tree"
  };

  return (
    <>
      <SEO 
        title="Interactive Taxonomy Tree"
        description="Explore the animal kingdom visually with our Interactive Taxonomy Tree. Discover classifications from Phylum to Species."
        keywords="Taxonomy Tree, Animal Classification, Biology Tree, Zoology Classification, Phylum, Species"
        canonicalUrl="/taxonomy-tree"
        schema={schema}
      />
      <AnimaliaFlow />
    </>
  )
}

export default Tree
