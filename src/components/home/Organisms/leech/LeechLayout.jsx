import "./leech.css";
import Intro from "./banner/Intro";
import Taxonomy from "./sections/Taxonomy";
import ExternalMorphology from "./sections/ExternalMorphology";
import BodyWall from "./sections/BodyWall";
import Locomotion from "./sections/Locomotion";
import DigestiveSystem from "./sections/DigestiveSystem";
import RespiratorySystem from "./sections/RespiratorySystem";
import CirculatorySystem from "./sections/CirculatorySystem";
import NervousSystem from "./sections/NervousSystem";
import ExcretorySystem from "./sections/ExcretorySystem";
import ReproductiveSystem from "./sections/ReproductiveSystem";
import ParasiticAdaptations from "./sections/ParasiticAdaptations";
import Facts from "./sections/revision";

import LeechAnatomyInteractive from "./sections/LeechAnotomyInteractive";

export default function LeechLayout() {
  return (
    <main className="leech-page">
      <Intro />
      <Taxonomy />
      <ExternalMorphology />

      {/* ✅ CORRECT */}
      <LeechAnatomyInteractive />

      <BodyWall />
      <Locomotion />
      <DigestiveSystem />
      <RespiratorySystem />
      <CirculatorySystem />
      <NervousSystem />
      <ExcretorySystem />
      <ReproductiveSystem />
      <ParasiticAdaptations />
      {/* <Facts /> */}
    </main>
  );
}
