import React, { useState } from 'react';
import './Chordata.css';
import Ascidia from './ascidiacea/ascidia/Ascidia';
import Herdmania from './ascidiacea/herdmania/Herdmania';
import Salpa from './thaliacea/salpa/Salpa';
import Doliolum from './thaliacea/doliolum/Doliolum';
import Pyrosoma from './thaliacea/pyrosoma/Pyrosoma';
import BranchiostomaLanceolatum from './leptocardii/branchiostoma-lanceolatum/BranchiostomaLanceolatum';
import PetromyzonMarinus from './cyclostomata/petromyzon-marinus/PetromyzonMarinus';
import MyxineGlutinosa from './cyclostomata/myxine-glutinosa/MyxineGlutinosa';
import ScoliodonLaticaudus from './chondrichthyes/scoliodon-laticaudus/ScoliodonLaticaudus';
import Pristis from './chondrichthyes/pristis/Pristis';
import Trygon from './chondrichthyes/trygon/Trygon';
import Torpedo from './chondrichthyes/torpedo/Torpedo';
import CarcharodonCarcharias from './chondrichthyes/carcharodon-carcharias/CarcharodonCarcharias';
import Exocoetus from './osteichthyes/exocoetus/Exocoetus';
import Hippocampus from './osteichthyes/hippocampus/Hippocampus';
import LabeoRohita from './osteichthyes/labeo-rohita/LabeoRohita';
import CatlaCatla from './osteichthyes/catla-catla/CatlaCatla';
import ClariasBatrachus from './osteichthyes/clarias-batrachus/ClariasBatrachus';
import Echeneis from './osteichthyes/echeneis/Echeneis';
import BettaSplendens from './osteichthyes/betta-splendens/BettaSplendens';
import PterophyllumScalare from './osteichthyes/pterophyllum-scalare/PterophyllumScalare';
import LatimeriaChalumnae from './osteichthyes/latimeria-chalumnae/LatimeriaChalumnae';
import Bufo from './amphibia/bufo/Bufo';
import Alytes from './amphibia/alytes/Alytes';
import Hyla from './amphibia/hyla/Hyla';
import Rhacophorus from './amphibia/rhacophorus/Rhacophorus';
import Rana from './amphibia/rana/Rana';
import NecturusMaculosus from './amphibia/necturus-maculosus/NecturusMaculosus';
import AmbystomaTigrinum from './amphibia/ambystoma-tigrinum/AmbystomaTigrinum';
import Salamandra from './amphibia/salamandra/Salamandra';
import Ichthyophis from './amphibia/ichthyophis/Ichthyophis';
import Hemidactylus from './reptilia/hemidactylus/Hemidactylus';
import Calotes from './reptilia/calotes/Calotes';
import Draco from './reptilia/draco/Draco';
import Chamaeleon from './reptilia/chamaeleon/Chamaeleon';
import Phrynosoma from './reptilia/phrynosoma/Phrynosoma';
import Varanus from './reptilia/varanus/Varanus';
import SphenodonPunctatum from './reptilia/sphenodon-punctatum/SphenodonPunctatum';
import Chelone from './reptilia/chelone/Chelone';
import Testudo from './reptilia/testudo/Testudo';
import NajaNaja from './reptilia/naja-naja/NajaNaja';
import ViperaRusselli from './reptilia/vipera-russelli/ViperaRusselli';
import Bungarus from './reptilia/bungarus/Bungarus';
import Hydrophis from './reptilia/hydrophis/Hydrophis';
import Typhlops from './reptilia/typhlops/Typhlops';
import Python from './reptilia/python/Python';
import Crocodylus from './reptilia/crocodylus/Crocodylus';
import GavialisGangeticus from './reptilia/gavialis-gangeticus/GavialisGangeticus';
import Alligator from './reptilia/alligator/Alligator';
import Ichthyosaurus from './reptilia/ichthyosaurus/Ichthyosaurus';
import Triceratops from './reptilia/triceratops/Triceratops';
import Stegosaurus from './reptilia/stegosaurus/Stegosaurus';
import Brachiosaurus from './reptilia/brachiosaurus/Brachiosaurus';
import TyrannosaurusRex from './reptilia/tyrannosaurus-rex/TyrannosaurusRex';
import Pteranodon from './reptilia/pteranodon/Pteranodon';
import Corvus from './aves/corvus/Corvus';
import Columba from './aves/columba/Columba';
import Psittacula from './aves/psittacula/Psittacula';
import PavoCristatus from './aves/pavo-cristatus/PavoCristatus';
import AptenodytesForsteri from './aves/aptenodytes-forsteri/AptenodytesForsteri';
import StruthioCamelus from './aves/struthio-camelus/StruthioCamelus';
import Rhea from './aves/rhea/Rhea';
import DromaiusNovaehollandiae from './aves/dromaius-novaehollandiae/DromaiusNovaehollandiae';
import Apteryx from './aves/apteryx/Apteryx';
import Casuarius from './aves/casuarius/Casuarius';
import Neophron from './aves/neophron/Neophron';
import Passer from './aves/passer/Passer';
import GallusGallus from './aves/gallus-gallus/GallusGallus';
import ChalcophapsIndica from './aves/chalcophaps-indica/ChalcophapsIndica';
import PitohuiDichrous from './aves/pitohui-dichrous/PitohuiDichrous';
import GeospizaMagnirostris from './aves/geospiza-magnirostris/GeospizaMagnirostris';
import GeospizaFortis from './aves/geospiza-fortis/GeospizaFortis';
import GeospizaFuliginosa from './aves/geospiza-fuliginosa/GeospizaFuliginosa';
import GeospizaDifficilis from './aves/geospiza-difficilis/GeospizaDifficilis';
import GeospizaScandens from './aves/geospiza-scandens/GeospizaScandens';
import CamarhynchusPsittacula from './aves/camarhynchus-psittacula/CamarhynchusPsittacula';
import CamarhynchusParvulus from './aves/camarhynchus-parvulus/CamarhynchusParvulus';
import CamarhynchusPallidus from './aves/camarhynchus-pallidus/CamarhynchusPallidus';
import CerthideaOlivacea from './aves/certhidea-olivacea/CerthideaOlivacea';
import PlatyspizaCrassirostris from './aves/platyspiza-crassirostris/PlatyspizaCrassirostris';
import Archaeopteryx from './aves/archaeopteryx/Archaeopteryx';
import OrnithorhynchusAnatinus from './mammalia-prototheria/ornithorhynchus-anatinus/OrnithorhynchusAnatinus';
import Echidna from './mammalia-prototheria/echidna/Echidna';
import RattusFuscipes from './mammalia-metatheria/rattus-fuscipes/RattusFuscipes';
import Macropus from './mammalia-metatheria/macropus/Macropus';
import PhascolarctosCinereus from './mammalia-metatheria/phascolarctos-cinereus/PhascolarctosCinereus';
import Vombatus from './mammalia-metatheria/vombatus/Vombatus';
import Perameles from './mammalia-metatheria/perameles/Perameles';
import PetaurusBreviceps from './mammalia-metatheria/petaurus-breviceps/PetaurusBreviceps';
import Notoryctes from './mammalia-metatheria/notoryctes/Notoryctes';
import Dasyurus from './mammalia-metatheria/dasyurus/Dasyurus';
import MyrmecobiusFasciatus from './mammalia-metatheria/myrmecobius-fasciatus/MyrmecobiusFasciatus';
import ThylacinusCynocephalus from './mammalia-metatheria/thylacinus-cynocephalus/ThylacinusCynocephalus';
import SpilocuscusMaculatus from './mammalia-metatheria/spilocuscus-maculatus/SpilocuscusMaculatus';
import DasyurusMaculatus from './mammalia-metatheria/dasyurus-maculatus/DasyurusMaculatus';
import ElephasMaximus from './mammalia-eutheria/elephas-maximus/ElephasMaximus';
import LoxodontaAfricana from './mammalia-eutheria/loxodonta-africana/LoxodontaAfricana';
import BosIndicus from './mammalia-eutheria/bos-indicus/BosIndicus';
import Rattus from './mammalia-eutheria/rattus/Rattus';
import Pteropus from './mammalia-eutheria/pteropus/Pteropus';
import OryctolagusCuniculus from './mammalia-eutheria/oryctolagus-cuniculus/OryctolagusCuniculus';
import EquusFerus from './mammalia-eutheria/equus-ferus/EquusFerus';
import Macaca from './mammalia-eutheria/macaca/Macaca';
import Camelus from './mammalia-eutheria/camelus/Camelus';
import CanisLupusFamiliaris from './mammalia-eutheria/canis-lupus-familiaris/CanisLupusFamiliaris';
import FelisCatus from './mammalia-eutheria/felis-catus/FelisCatus';
import Delphinus from './mammalia-eutheria/delphinus/Delphinus';
import BalaenopteraMusculus from './mammalia-eutheria/balaenoptera-musculus/BalaenopteraMusculus';
import PantheraTigris from './mammalia-eutheria/panthera-tigris/PantheraTigris';
import PantheraLeo from './mammalia-eutheria/panthera-leo/PantheraLeo';
import RhinocerosUnicornis from './mammalia-eutheria/rhinoceros-unicornis/RhinocerosUnicornis';
import HylobatesHoolock from './mammalia-eutheria/hylobates-hoolock/HylobatesHoolock';
import Lutra from './mammalia-eutheria/lutra/Lutra';
import Trichechus from './mammalia-eutheria/trichechus/Trichechus';
import Phoca from './mammalia-eutheria/phoca/Phoca';
import Sciurus from './mammalia-eutheria/sciurus/Sciurus';
import Lemur from './mammalia-eutheria/lemur/Lemur';
import Lynx from './mammalia-eutheria/lynx/Lynx';
import Talpa from './mammalia-eutheria/talpa/Talpa';
import Dryopithecus from './mammalia-eutheria/dryopithecus/Dryopithecus';
import Ramapithecus from './mammalia-eutheria/ramapithecus/Ramapithecus';
import AustralopithecusAfricanus from './mammalia-eutheria/australopithecus-africanus/AustralopithecusAfricanus';
import HomoHabilis from './mammalia-eutheria/homo-habilis/HomoHabilis';
import HomoErectus from './mammalia-eutheria/homo-erectus/HomoErectus';
import HomoNeanderthalensis from './mammalia-eutheria/homo-neanderthalensis/HomoNeanderthalensis';
import HomoSapiens from './mammalia-eutheria/homo-sapiens/HomoSapiens';

const Chordata = () => {
  const [selectedOrganism, setSelectedOrganism] = useState(null);

  const organisms = [
    { key: 'ascidia', label: 'Ascidia', component: Ascidia },
    { key: 'herdmania', label: 'Herdmania', component: Herdmania },
    { key: 'salpa', label: 'Salpa', component: Salpa },
    { key: 'doliolum', label: 'Doliolum', component: Doliolum },
    { key: 'pyrosoma', label: 'Pyrosoma', component: Pyrosoma },
    { key: 'branchiostoma-lanceolatum', label: 'BranchiostomaLanceolatum', component: BranchiostomaLanceolatum },
    { key: 'petromyzon-marinus', label: 'PetromyzonMarinus', component: PetromyzonMarinus },
    { key: 'myxine-glutinosa', label: 'MyxineGlutinosa', component: MyxineGlutinosa },
    { key: 'scoliodon-laticaudus', label: 'ScoliodonLaticaudus', component: ScoliodonLaticaudus },
    { key: 'pristis', label: 'Pristis', component: Pristis },
    { key: 'trygon', label: 'Trygon', component: Trygon },
    { key: 'torpedo', label: 'Torpedo', component: Torpedo },
    { key: 'carcharodon-carcharias', label: 'CarcharodonCarcharias', component: CarcharodonCarcharias },
    { key: 'exocoetus', label: 'Exocoetus', component: Exocoetus },
    { key: 'hippocampus', label: 'Hippocampus', component: Hippocampus },
    { key: 'labeo-rohita', label: 'LabeoRohita', component: LabeoRohita },
    { key: 'catla-catla', label: 'CatlaCatla', component: CatlaCatla },
    { key: 'clarias-batrachus', label: 'ClariasBatrachus', component: ClariasBatrachus },
    { key: 'echeneis', label: 'Echeneis', component: Echeneis },
    { key: 'betta-splendens', label: 'BettaSplendens', component: BettaSplendens },
    { key: 'pterophyllum-scalare', label: 'PterophyllumScalare', component: PterophyllumScalare },
    { key: 'latimeria-chalumnae', label: 'LatimeriaChalumnae', component: LatimeriaChalumnae },
    { key: 'bufo', label: 'Bufo', component: Bufo },
    { key: 'alytes', label: 'Alytes', component: Alytes },
    { key: 'hyla', label: 'Hyla', component: Hyla },
    { key: 'rhacophorus', label: 'Rhacophorus', component: Rhacophorus },
    { key: 'rana', label: 'Rana', component: Rana },
    { key: 'necturus-maculosus', label: 'NecturusMaculosus', component: NecturusMaculosus },
    { key: 'ambystoma-tigrinum', label: 'AmbystomaTigrinum', component: AmbystomaTigrinum },
    { key: 'salamandra', label: 'Salamandra', component: Salamandra },
    { key: 'ichthyophis', label: 'Ichthyophis', component: Ichthyophis },
    { key: 'hemidactylus', label: 'Hemidactylus', component: Hemidactylus },
    { key: 'calotes', label: 'Calotes', component: Calotes },
    { key: 'draco', label: 'Draco', component: Draco },
    { key: 'chamaeleon', label: 'Chamaeleon', component: Chamaeleon },
    { key: 'phrynosoma', label: 'Phrynosoma', component: Phrynosoma },
    { key: 'varanus', label: 'Varanus', component: Varanus },
    { key: 'sphenodon-punctatum', label: 'SphenodonPunctatum', component: SphenodonPunctatum },
    { key: 'chelone', label: 'Chelone', component: Chelone },
    { key: 'testudo', label: 'Testudo', component: Testudo },
    { key: 'naja-naja', label: 'NajaNaja', component: NajaNaja },
    { key: 'vipera-russelli', label: 'ViperaRusselli', component: ViperaRusselli },
    { key: 'bungarus', label: 'Bungarus', component: Bungarus },
    { key: 'hydrophis', label: 'Hydrophis', component: Hydrophis },
    { key: 'typhlops', label: 'Typhlops', component: Typhlops },
    { key: 'python', label: 'Python', component: Python },
    { key: 'crocodylus', label: 'Crocodylus', component: Crocodylus },
    { key: 'gavialis-gangeticus', label: 'GavialisGangeticus', component: GavialisGangeticus },
    { key: 'alligator', label: 'Alligator', component: Alligator },
    { key: 'ichthyosaurus', label: 'Ichthyosaurus', component: Ichthyosaurus },
    { key: 'triceratops', label: 'Triceratops', component: Triceratops },
    { key: 'stegosaurus', label: 'Stegosaurus', component: Stegosaurus },
    { key: 'brachiosaurus', label: 'Brachiosaurus', component: Brachiosaurus },
    { key: 'tyrannosaurus-rex', label: 'TyrannosaurusRex', component: TyrannosaurusRex },
    { key: 'pteranodon', label: 'Pteranodon', component: Pteranodon },
    { key: 'corvus', label: 'Corvus', component: Corvus },
    { key: 'columba', label: 'Columba', component: Columba },
    { key: 'psittacula', label: 'Psittacula', component: Psittacula },
    { key: 'pavo-cristatus', label: 'PavoCristatus', component: PavoCristatus },
    { key: 'aptenodytes-forsteri', label: 'AptenodytesForsteri', component: AptenodytesForsteri },
    { key: 'struthio-camelus', label: 'StruthioCamelus', component: StruthioCamelus },
    { key: 'rhea', label: 'Rhea', component: Rhea },
    { key: 'dromaius-novaehollandiae', label: 'DromaiusNovaehollandiae', component: DromaiusNovaehollandiae },
    { key: 'apteryx', label: 'Apteryx', component: Apteryx },
    { key: 'casuarius', label: 'Casuarius', component: Casuarius },
    { key: 'neophron', label: 'Neophron', component: Neophron },
    { key: 'passer', label: 'Passer', component: Passer },
    { key: 'gallus-gallus', label: 'GallusGallus', component: GallusGallus },
    { key: 'chalcophaps-indica', label: 'ChalcophapsIndica', component: ChalcophapsIndica },
    { key: 'pitohui-dichrous', label: 'PitohuiDichrous', component: PitohuiDichrous },
    { key: 'geospiza-magnirostris', label: 'GeospizaMagnirostris', component: GeospizaMagnirostris },
    { key: 'geospiza-fortis', label: 'GeospizaFortis', component: GeospizaFortis },
    { key: 'geospiza-fuliginosa', label: 'GeospizaFuliginosa', component: GeospizaFuliginosa },
    { key: 'geospiza-difficilis', label: 'GeospizaDifficilis', component: GeospizaDifficilis },
    { key: 'geospiza-scandens', label: 'GeospizaScandens', component: GeospizaScandens },
    { key: 'camarhynchus-psittacula', label: 'CamarhynchusPsittacula', component: CamarhynchusPsittacula },
    { key: 'camarhynchus-parvulus', label: 'CamarhynchusParvulus', component: CamarhynchusParvulus },
    { key: 'camarhynchus-pallidus', label: 'CamarhynchusPallidus', component: CamarhynchusPallidus },
    { key: 'certhidea-olivacea', label: 'CerthideaOlivacea', component: CerthideaOlivacea },
    { key: 'platyspiza-crassirostris', label: 'PlatyspizaCrassirostris', component: PlatyspizaCrassirostris },
    { key: 'archaeopteryx', label: 'Archaeopteryx', component: Archaeopteryx },
    { key: 'ornithorhynchus-anatinus', label: 'OrnithorhynchusAnatinus', component: OrnithorhynchusAnatinus },
    { key: 'echidna', label: 'Echidna', component: Echidna },
    { key: 'rattus-fuscipes', label: 'RattusFuscipes', component: RattusFuscipes },
    { key: 'macropus', label: 'Macropus', component: Macropus },
    { key: 'phascolarctos-cinereus', label: 'PhascolarctosCinereus', component: PhascolarctosCinereus },
    { key: 'vombatus', label: 'Vombatus', component: Vombatus },
    { key: 'perameles', label: 'Perameles', component: Perameles },
    { key: 'petaurus-breviceps', label: 'PetaurusBreviceps', component: PetaurusBreviceps },
    { key: 'notoryctes', label: 'Notoryctes', component: Notoryctes },
    { key: 'dasyurus', label: 'Dasyurus', component: Dasyurus },
    { key: 'myrmecobius-fasciatus', label: 'MyrmecobiusFasciatus', component: MyrmecobiusFasciatus },
    { key: 'thylacinus-cynocephalus', label: 'ThylacinusCynocephalus', component: ThylacinusCynocephalus },
    { key: 'spilocuscus-maculatus', label: 'SpilocuscusMaculatus', component: SpilocuscusMaculatus },
    { key: 'dasyurus-maculatus', label: 'DasyurusMaculatus', component: DasyurusMaculatus },
    { key: 'elephas-maximus', label: 'ElephasMaximus', component: ElephasMaximus },
    { key: 'loxodonta-africana', label: 'LoxodontaAfricana', component: LoxodontaAfricana },
    { key: 'bos-indicus', label: 'BosIndicus', component: BosIndicus },
    { key: 'rattus', label: 'Rattus', component: Rattus },
    { key: 'pteropus', label: 'Pteropus', component: Pteropus },
    { key: 'oryctolagus-cuniculus', label: 'OryctolagusCuniculus', component: OryctolagusCuniculus },
    { key: 'equus-ferus', label: 'EquusFerus', component: EquusFerus },
    { key: 'macaca', label: 'Macaca', component: Macaca },
    { key: 'camelus', label: 'Camelus', component: Camelus },
    { key: 'canis-lupus-familiaris', label: 'CanisLupusFamiliaris', component: CanisLupusFamiliaris },
    { key: 'felis-catus', label: 'FelisCatus', component: FelisCatus },
    { key: 'delphinus', label: 'Delphinus', component: Delphinus },
    { key: 'balaenoptera-musculus', label: 'BalaenopteraMusculus', component: BalaenopteraMusculus },
    { key: 'panthera-tigris', label: 'PantheraTigris', component: PantheraTigris },
    { key: 'panthera-leo', label: 'PantheraLeo', component: PantheraLeo },
    { key: 'rhinoceros-unicornis', label: 'RhinocerosUnicornis', component: RhinocerosUnicornis },
    { key: 'hylobates-hoolock', label: 'HylobatesHoolock', component: HylobatesHoolock },
    { key: 'lutra', label: 'Lutra', component: Lutra },
    { key: 'trichechus', label: 'Trichechus', component: Trichechus },
    { key: 'phoca', label: 'Phoca', component: Phoca },
    { key: 'sciurus', label: 'Sciurus', component: Sciurus },
    { key: 'lemur', label: 'Lemur', component: Lemur },
    { key: 'lynx', label: 'Lynx', component: Lynx },
    { key: 'talpa', label: 'Talpa', component: Talpa },
    { key: 'dryopithecus', label: 'Dryopithecus', component: Dryopithecus },
    { key: 'ramapithecus', label: 'Ramapithecus', component: Ramapithecus },
    { key: 'australopithecus-africanus', label: 'AustralopithecusAfricanus', component: AustralopithecusAfricanus },
    { key: 'homo-habilis', label: 'HomoHabilis', component: HomoHabilis },
    { key: 'homo-erectus', label: 'HomoErectus', component: HomoErectus },
    { key: 'homo-neanderthalensis', label: 'HomoNeanderthalensis', component: HomoNeanderthalensis },
    { key: 'homo-sapiens', label: 'HomoSapiens', component: HomoSapiens },
  ];

  const SelectedComponent = selectedOrganism
    ? organisms.find(o => o.key === selectedOrganism)?.component
    : null;

  return (
    <div className="phylum-container">
      <header className="phylum-header">
        <h2>Chordata</h2>
        <p>Chordates</p>
      </header>

      <div className="organism-nav">
        <h3>Select an Organism (2 classes)</h3>
        <div className="organism-buttons">
          {organisms.map(organism => (
            <button
              key={organism.key}
              className={'organism-btn ' + (selectedOrganism === organism.key ? 'active' : '')}
              onClick={() => setSelectedOrganism(organism.key)}
            >
              {organism.label}
            </button>
          ))}
        </div>
      </div>

      <div className="organism-content">
        {SelectedComponent ? (
          <SelectedComponent />
        ) : (
          <div className="organism-placeholder">
            <h3>Select an organism to view details</h3>
            <p>Click on any organism above to learn more about its characteristics and taxonomy.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chordata;
