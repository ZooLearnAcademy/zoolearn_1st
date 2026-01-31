import React, { useState, useEffect } from 'react';
import { BookOpen, Activity, Heart, Droplet, Bone, Layers, Brain, GitBranch, Anchor, Baby, Thermometer, Menu, X } from 'lucide-react';
import './Patterns.css';

const ZoologyLearningPlatform = () => {
  const [activeTab, setActiveTab] = useState('digestive');
  const [isMobileOpen, setIsMobileOpen] = useState(false); // New State for Mobile Menu

  // Scroll to top when tab changes
  useEffect(() => {
    const contentArea = document.querySelector('.zoo-main-content');
    if (contentArea) contentArea.scrollTo(0, 0);
  }, [activeTab]);

  const contentData = {
    digestive: {
      title: "Digestive System",
      icon: <BookOpen />,
      sections: [
        {
          heading: "Overview",
          content:[
             "The digestive system is found only in Eumetazoa (animals with true tissues).",
             " Complexity increases from lower invertebrates to higher vertebrates."
          ]
        },
        {
          heading: "1. Incomplete Digestive System",
          content: [
            "Structure: There is only one opening.",
            "Function: The same opening acts as both Mouth (ingestion) and Anus (egestion).",
            "Examples: Coelenterata, Platyhelminthes."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768291586/incomplete_digestion_kwnrlx.png",
          imageCaption: "A gastrovascular cavity has one opening",
          examples: [
            "Coelenterata –Platyhelminthes"
          ]
        },
        {
          heading: "2. Complete Digestive System",
          content: [
            "Structure: Two separate openings (Mouth and Anus).",
            "Function: Food moves in one direction (unidirectional), increasing efficiency.",
            "Examples: Aschelminthes to Chordata."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768291536/complete_digestion_obd4zg.png",
          imageCaption: "An alimentary canal has two openings",
          examples: [
            "Aschihelminthes – Chordata"
          ]
        },
        {
          heading: "Comparison Table",
          table:{
              headers:["Feature","Incomplete Digestive System","Complete Digestive System"],
              rows:[
                ["Number of openings","One opening only","Two separate openings"],
                ["Mouth","Same opening acts as mouth","Mouth present at anterior end"],
                ["Anus","Absent (same opening used)","Anus or cloaca present at posterior end"],
                ["Direction of food movement","Bidirectional","Unidirectional"],
                ["Efficiency","Less efficient","More efficient"],
                ["Digestion & egestion","Through same opening","Through separate openings"],
                ["Examples (Phyla)","Coelenterata, Platyhelminthes","Aschelminthes to Chordata"]
              ]
          }
        }
      ]
    },
    respiratory: {
      title: "Respiratory System",
      icon: <Activity />,
      sections: [
        {
          heading: "Overview",
          text: "Respiration depends on habitat and body organization.",
        },
        {
          heading: "Body Surface Respiration",
          content: [
            "Gases exchange through the general body surface by diffusion.",
            "No special respiratory organs."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768293404/body_surface_respiration_glucgw.png",
          examples: [
            "Porifera-Platyhelminthes"
          ]
        },
        {
          heading: "Cutaneous Respiration",
          content: [
            "Respiration through thin, moist, vascular skin."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768293431/cutaneous_respiration_hq9bzq.png",
          examples: [
            "Annelida, Amphibia(Frog)"
          ]
        },
        {
          heading: "Branchial Respiration",
          content: [
            "Respiration through gills."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768293422/branchial_respiration_fnxxn5.png",
          examples: [
            "Arthropoda (Crustaceans)",
            "Molluscs",
            "Chordata (Pisces)"
          ]
        },
        {
          heading: "Tracheal Respiration",
          content: [
            "Air enters through tracheae (air tubes).",
            "Blood does not transport oxygen."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768293447/tracheal_respiration_xri7am.png",
          examples: [
            "Arthropoda (Insecta)"
          ]
        },
        {
          heading: "Pulmonary Respiration",
          content: [
            "Respiration through lungs."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768293439/Pulmonary_Respiration_yko92j.png",
          examples: [
            "Amphibia",
            "Reptilia",
            "Aves",
            "Mammalia"
          ]
        },
        {
          heading: "Buccopharyngeal Respiration",
          content: [
            "Gas exchange through lining of buccopharyngeal cavity."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768293426/buccopharyngeal_respiration_ueppcn.png",
          examples: [
            "Amphibia (Frogs)"
          ]
        },
        {
          heading: "Comparison Table",
          table:{
            headers:["Type of Respiration","Respiratory Surface / Organ","Habitat","Phylum / Examples"],
            rows:[
              ["Body surface respiration","General body surface","Aquatic","Porifera → Platyhelminthes"],
              ["Cutaneous respiration","Thin, moist, vascular skin","Aquatic / Moist terrestrial","Annelida, Amphibia (frog)"],
              ["Branchial respiration","Gills","Aquatic","Crustacea, Mollusca, Pisces"],
              ["Tracheal respiration","Tracheae (air tubes)","Terrestrial","Insecta"],
              ["Pulmonary respiration","Lungs","Terrestrial","Amphibia, Reptilia, Aves, Mammalia"],
              ["Buccopharyngeal respiration","Buccopharyngeal lining","Amphibious","Frog"]
            ]
          }
        }
      ]
    },
    circulatory: {
      title: "Circulatory System",
      icon: <Heart />,
      sections: [
        {
          heading: "Overview",
          text:"Circulation helps transport nutrients, oxygen, hormones, and wastes."
        },
        {
          heading: "Type I – Without Blood (Water as Medium)",
          content: [
            "Water is the medium of transportation.",
            "Blood is absent."
          ]
        },
        {
          heading: "Water Canal System",
          isSubtopic: true,
          content: [
            "Present only in Porifera.",
            "Helps in feeding, respiration, excretion, and reproduction."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768297422/Water_canal_system_nyjn5h.png"
        },
        {
          heading: "Gastrovascular System",
          isSubtopic: true,
          content: [
            "Present in Cnidaria and Ctenophora.",
            "Same cavity for digestion and distribution."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768297413/Gastro_vascular_system_dvqyff.png"
        },
        {
          heading: "Water Vascular System",
          isSubtopic: true,
          content: [
            "Present in Echinoderms.",
            "Helps in locomotion, respiration, and feeding."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768297427/Water_Vascular_System_ywsead.png"
        },
        {
          heading: "Type II – With Blood",
          content: [
            "Blood is the medium of transportation"
          ]
        },
        {
          heading: "Open Circulatory System",
          isSubtopic: true,
          content: [
            "Blood pumped by the heart flows into open sinuses (hemocoel).",
            "Direct contact between blood and body cells."
          ],
          examples: [
            "Arthropoda (Insects, Crabs)",
            "Non-cephalopod Molluscs (Snails, Mussels)",
            "Hemichordata",
            "Blood flows in open spaces"
          ]
        },
        {
          heading: "Closed Circulatory System",
          isSubtopic: true,
          content: [
            "In a closed circulatory system, blood always flows inside blood vessels such as arteries, veins, and capillaries.",
            "Exchange of gases, nutrients, and wastes occurs only through capillaries, making circulation more efficient and well-regulated."
          ],
          examples: [
            "Annelida (Earthworm)",
            "Cephalopod Molluscs (Octopus, Squid)",
            "Chordata (All Vertebrates)"
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1768297508/open_and_close_circulation_vxd1mk.png"
        },
        {
          heading: "Comparison Table",
          table:{
            headers:["Feature","Open Circulatory System","Closed Circulatory System"],
            rows:[
              ["Blood flow","Through open sinuses","Through blood vessels"],
              ["Contact with tissues","Direct","Indirect (via capillaries)"],
              ["Regulation","Less precise","Highly regulated"],
              ["Efficiency","Lower","Higher"],
              ["Examples","Arthropoda, non-cephalopod Mollusca, Hemichordata","Annelida, cephalopod Mollusca, Chordata"]
            ]
          }
        },
        {
          heading: "Visual Comparison",
          table:{
            headers:["Type","Medium","Key Feature","System / Organ","Phylum Examples"],
            rows:[
              ["Without blood","Water","Blood absent; water transports materials","Water canal system","Porifera"],
              ["","","Same cavity for digestion & transport","Gastrovascular system","Cnidaria, Ctenophora"],
              ["","","Helps in locomotion, respiration","Water vascular system","Echinodermata"],
              ["With blood","Blood","Blood is transport medium","Circulatory system","Higher invertebrates & vertebrates"],
              
            ]
          }
        },
        {
          heading: "Circulatory Pathway – Heart",
          content: [
            "All vertebrates possess a muscular, chambered heart.",
            "The number of chambers depends on the type of circulation."
          ]
        },
        {
          heading:"The heart may have:",
          isSubSubtopic: true,
          content:[
            "1 or 2 atria (auricles)",
            "1 or 2 ventricles"
          ]
        },
        {
          heading: "Single Circulation System",
          text:"In single circulation, blood passes through the heart only once during one complete cycle.",
          isSubtopic: true,
          content: [
            "The heart pumps deoxygenated blood to the gills",
            "Blood becomes oxygenated in the gills",
            "Oxygenated blood flows to body tissues",
            "Deoxygenated blood returns to heart."
          ],
          examples: ["Fishes (Pisces)"],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768297517/single_circulation_system_dwydoc.png",
          
        },
        {
          heading:"fish heart",
          isSubtopic: true,
          content: [
            "Functionally two-chambered (one atrium + one ventricle)",
            "Also includes sinus venosus and bulbus/conus arteriosus",
            "Exception: Lungfish → three-chambered heart"
          ]
        },
        {
          heading: "Incomplete Double Circulation (3-Chambered)",
          isSubtopic: true,
          text:"In incomplete double circulation, blood passes through the heart twice, but oxygenated and deoxygenated blood mix partially.",
          content: [
            "Left atrium → oxygenated blood",
            "Right atrium → deoxygenated blood",
            "Both enter a single ventricle",
            "Mixed blood is pumped to the body"
          ],
          examples: [
            "Amphibians (Frogs),Most reptiles,Lungfishes",
            "Three-chambered heart (2 atria + 1 ventricle)",
            "Reptiles have an incomplete interventricular septum",
            "Exception: Crocodile → 4-chambered heart"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768297500/incomplete_double_circulation_system_1_sh9itq.png"
        },
        {
          isSubtopic: true,
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768297504/incomplete_double_circulation_system_2_z2jiti.png"
        },
        {
          heading: "Double Circulation (4-Chambered)",
          text:"In double circulation, blood passes through the heart twice, and oxygenated and deoxygenated blood never mix.",
          isSubtopic: true,
          content: [
            "Pulmonary circulation – heart → lungs → heart",
            "Systemic circulation – heart → body → heart"
          ],
          examples: [
            "Birds",
            "Mammals",
            "Crocodiles"
          ]
        },
        {
          heading:"Heart Structure",
          isSubtopic: true,
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768297492/complete_double_circulation_system_zktucz.png",
          content:[
            "Four-chambered heart",
            "Inter-auricular septum",
            "Inter-ventricular septum"
          ]
        },
        {
          heading: "Comparison Table",
          table:{
            headers:["Type of Circulation","Heart Chambers","Blood Mixing","Major Groups","Examples"],
            rows:[
              ["Single circulation","2 (1 atrium + 1 ventricle)","No mixing","Pisces","Fishes"],
              ["Incomplete double circulation","3 (2 atria + 1 ventricle)","Partial mixing","Amphibia, Reptilia","Frog, Lizard"],
              ["Double circulation","4 (2 atria + 2 ventricles)","No mixing","Aves, Mammalia","Birds, Humans"],
              ["Exception","4 chambers","No mixing","Reptilia","Crocodile"]
            ]
          }
        }
      ]
    },
    excretory: {
      title: "Excretory System",
      icon: <Droplet />,
      sections: [
        {
          heading: "Overview",
          text:"Excretion is the process by which an organism removes metabolic waste products from its body. These wastes are produced during normal activities like digestion, respiration, and protein metabolism. Excretion also helps in maintaining the internal chemical balance of the body."
        },
        {
          heading: "Stage 1: Excretion by Diffusion (No Excretory Organs)",
          text:"Phyla: Porifera, Cnidaria, Ctenophora, Echinodermata",
          content: [
            "These animals do not possess any excretory organs",
            "Metabolic wastes (mainly ammonia) are removed by simple diffusion.",
            "Waste diffuses out through:General body surface,Tube feet and papulae (in echinoderms)",
            "Aquatic habitat provides abundant water for dilution"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768320265/Excretion_by_Diffusion_xjz0f3.png"
        },
        {
          isSubtopic: true,
          content:[
            "Mode of excretion: Diffusion",
            "Nature: Most primitive condition"
          ]
        },
        {
          heading:"Stage 2: Protonephridia (Primitive Tubular Excretory System)",
          text:"Phyla: Platyhelminthes, Some Annelids, Cephalochordata",
          content: [
            "Here, the first tubular excretory structures appear.",
            "Function: Excretion + osmoregulation",
            "Significance: First organized excretory system"
          ]
        },
        {
          heading:"Types of Protonephridia",
          isSubtopic: true,
          
        },
        {
            heading: "Flame cells (with cilia)",
            isSubSubtopic: true, // Level 3 (Subtopic of a subtopic)
            content: [
                "Found in Platyhelminthes and some annelids.",
                "Cilia beat like a flame and drive waste fluid out."
            ],
            image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768320275/flame_cells_sxokcx.png"
        },
        {
          heading:"Solenocytes (with flagella)",
          isSubSubtopic: true,
          content:[
            "Found in Cephalochordata",
            "Function similar to flame cells but use flagella"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768320337/solenocytes_giwwfx.png"
        },
        {
          heading:"Stage 3: Glandular Excretory Structures",
          content:[
            "Nature: Simple but specialized",
            "Intermediate evolutionary stage"
          ]
        },
        {
          heading:"Phylum: Nematoda (Aschelminthes)",
          isSubtopic: true,
          content:[
            "Excretion carried out by renette cells",
            "These are large glandular cells",
            "Also called intracellular tubes",
            "Open to the exterior through an excretory pore"
          ]
        },
        {
          
          heading:"Stage 4: Metanephridia (True Nephridia)",
          text:"Phyla: Annelida, Non-cephalopod Mollusca",
          content:[
            "Excretory organs are metanephridia (nephridia)",
            "Segmentally arranged tubular structures",
            "Highly efficient removal of wastes",
            "Better regulation of body fluids"
          ]
        },
        {
          heading:"Each nephridium has:",
          content:[
            "Nephrostome (funnel)",
            "Tubule",
            "Nephridiopore"
          ]
        },
        {
          heading:"Stage 5: Specialized Excretory Organs in Arthropods",
          text:"Phyla: Arthropods",
          content:[
            "Different classes show different excretory organs, indicating specialization.",
            "Adapted to terrestrial life",
            "Efficient water conservation"
          ],
          table: {
            headers: ["Group", "Excretory Organ"],
            rows: [
              ["Insects", "Malpighian tubules"],
              ["Crustaceans", "Antennary (Green) / Maxillary glands"],
              ["Arachnids", "Coxal glands"]
            ]
          },
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768320308/Malpighian_tubules_sgruep.png"
        },
        {
          isSubtopic:true,
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768320295/green_gland_xhgzkl.png"
        },
        {
          isSubtopic:true,
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768320258/coxwl_gland_qos8wx.png"
        },
        {
          heading:"Stage 6: Kidney – Advanced Excretory Organ",
          text:"Phyla: Cephalopod Mollusca & Vertebrata",
          content:[
            "Excretion carried out by well-developed kidneys",
            "Nephron is the structural and functional unit",
            "Kidney structure varies according to habitat"
          ]
        },
        {
          heading:"Marine fishes",
          isSubtopic: true,
          content:[
            "Aglomerular kidney",
            "Produce very little isoosmotic urine"
          ]
        },
        {
          heading:"Freshwater fishes & Amphibians",
          isSubtopic: true,
          content:[
            "No Henle’s loop",
            "Produce large amount of dilute (hypoosmotic) urine"
          ]
        },
        {
          heading:"Reptiles",
          isSubtopic: true,
          content:[
            "Reduced or absent glomeruli",
            "No Henle’s loop",
            "Produce very little hypotonic urine"
          ]
        },
        {
          heading:"Mammals",
          isSubtopic: true,
          content:[
            "Long loop of Henle",
            "Produce concentrated (hyperosmotic) urine"
          ]
        },
        {
          heading:"Comparison Table",
          table:{
            headers:["Evolutionary Stage","Excretory Structure","Phylum Examples"],
            rows:[
              ["Diffusion","No organs","Porifera, Cnidaria, Echinodermata"],
              ["Protonephridia","Flame cells / Solenocytes","Platyhelminthes, Cephalochordata"],
              ["Glandular","Renette cells","Nematoda"],
              ["Metanephridia","Nephridia","Annelida, Mollusca"],
              ["Tubular / Glandular","Malpighian / Green / Coxal glands","Arthropods"],
              ["Renal","Kidney (Nephron)","Vertebrates, Cephalopods"]
            ]
          }
        },
        {
          heading:"Types of Excretion (Nitrogenous Waste)",
          content:[
            <p>Living organisms eliminate nitrogenous wastes formed during protein and nucleic acid metabolism. The major nitrogenous waste products are:
              <ul>
              <li>Ammonia</li>
              <li>Urea</li>
              <li>Urics Acid</li>
            </ul>
            </p>,
            "Other nitrogenous wastes include: Trimethylamine oxide (TMO), guanine, hippuric acid, creatinine, creatine, purines, pyrimidines, and pteridines."
          ]
        },
        {
          heading:"Modes of Excretion",
          isSubtopic: true
        },
        {
          heading:"1.Ammonotelism",
          isSubtopic: true,
          content:[
            "Animals that excrete ammonia are called ammonotelic.",
            <p>Nitrogenous waste: Ammonia
              <ul>
                <li>Ammonia is the most toxic nitrogenous waste.</li>
                <li>It requires a large amount of water for elimination.</li>
                <li>Ammonia is highly water-soluble.</li>
                <li>It is generally excreted by diffusion across the body surface or through gill surfaces, mainly as ammonium ions.</li>
              </ul>
            </p>
          ],
          examples: [
            "Aquatic invertebrates",
            "Freshwater bony fishes",
            "Larval amphibians",
            "Crustaceans"
          ]
        },
        {
          heading:"Terrestrial Adaptation",
          isSubSubtopic: true,
          text:"With the transition to land, animals evolved less toxic nitrogenous wastes (urea and uric acid) to conserve water."
        },
        {
          heading:"2. Ureotelism",
          isSubtopic: true,
          content:[
            "Animals that excrete urea are called ureotelic.",
            <p>Nitrogenous waste: Urea
              <ul>
                <li>Urea is much less toxic than ammonia.</li>
                <li>It is highly soluble in water and can be excreted in a concentrated form.</li>
                <li>Urea is about 100,000 times less toxic than ammonia.</li>
                <li>It is synthesized in the liver through the ornithine cycle (urea cycle).</li>
              </ul>
            </p>
          ],
          examples:[
            "Cartilaginous fishes",
            "Adult amphibians",
            "Mammals"
          ]

        },
        {
          heaading:"3.Uricotelism",
          isSubtopic: true,
          content:[
            "Animals that excrete uric acid are called uricotelic",
            <p>Nitrogenous waste: Uric Acid
              <ul>
                <li>Uric acid is the least toxic nitrogenous waste.</li>
                <li>It is almost insoluble in water.</li>
                <li>It is excreted in the form of pellets or semi-solid paste, resulting in minimal water loss.</li>
              </ul>
            </p>
          ],
          examples:[
            "Reptiles",
            "Birds",
            "Insects",
            "Gastropoda"
          ]
        },
        {
          heading:"Significance in Shelled Eggs",
          isSubSubtopic: true,
          content:[
            "If embryos inside shelled eggs produced ammonia or urea, these wastes would accumulate to toxic levels.",
            <p>This problem is solved because such animals are uricotelic—uric acid precipitates due to its insolubility and remains harmlessly within the egg shell.
              <ul>
                <li>Fishes and amphibians have shell-less eggs, allowing ammonia or urea to diffuse out.</li>
                <li>Mammals do not face this problem because urea is transported to the mother via the placenta.</li>
              </ul>
            </p>
          ]
        },
        {
          heading:"4. Guanotelism",
          isSubtopic: true,
          content:[
            "Animals that excrete guanine are called guanotelic.",
            <p>Nitrogenous waste: Guanine
              <ul>
                <li>Guanine is structurally similar to uric acid.</li>
                <li>It is relatively non-toxic.</li>
                <li>Requires very little water for excretion.</li>
              </ul>
            </p>
          ],
          examples:[
            "Arachnids"
          ]
        },
        {
          heading:"Comparison Table",
          table:{
            headers:["Mode of Excretion","Nitrogenous Waste","Toxicity","Water Requirement","Solubility","Typical Habitat","Examples"],
            rows:[
              ["Ammonotelism","Ammonia","Most toxic","Very high","Highly soluble","Aquatic","Aquatic invertebrates, freshwater bony fishes, larval amphibians, crustaceans"],
              ["Ureotelism","Urea","Less toxic","Moderate","Highly soluble","Semi-aquatic / Terrestrial","Cartilaginous fishes, adult amphibians, mammals"],
              ["Uricotelism","Uric acid","Least toxic","Very low","Almost insoluble","Dry terrestrial","Reptiles, birds, insects, gastropods"],
              ["Guanotelism","Guanine","Low toxicity","Very low","Poorly soluble","Terrestrial","Arachnids"]
            ]
          }
        },
        {
          heading:"One-line Memory Summary",
          content:[
            "Ammonia → very toxic → lots of water → aquatic",
            "Urea → moderately toxic → some water saving → land & semi-aquatic",
            "Uric acid / Guanine → least toxic → maximum water saving → dry land"
          ]
        }
      ]
    },
    skeletal: {
      title: "Skeletal System",
      icon: <Bone />,
      sections: [
        {
          heading: "Overview",
          text:"The skeleton is the hard supporting framework of the body. It gives the body shape, support, and protection, and also helps in movement by providing attachment to muscles.",
        },
        {
          heading:"Types of Skeleton"
        },
        {
          heading:"Exoskeleton",
          isSubtopic: true,
          text:"An exoskeleton is a skeleton that is present outside the body. It is usually formed of dead, non-living structures secreted by the epidermis.",
          content:[
            <p>Functions
              <ul>
                <li>Protects the body from injury</li>
                <li>Prevents loss of water</li>
                <li>Provides support and rigidity</li>
              </ul>
            </p>,
            "Note: In mammals, these structures are epidermal derivatives, not true bones."
          ],
          examples:[
            "Calcareous shell in Mollusca (snail, oyster)",
            "Chitinous sclerites in Arthropoda (insects, crabs)",
            "Epidermal scales in reptiles",
            "Feathers in birds",
            "Hair, nails, claws, horns, and hooves in mammals"
          ]
        },
        {
          heading:"Endoskeleton",
          isSubtopic: true,
          text:"An endoskeleton is a skeleton that is present inside the body. It is made of living tissues, mainly cartilage and bone.",
          content:[
            <p>Functions
              <ul>
                <li>Provides internal support</li>
                <li>Protects vital organs</li>
                <li>Allows efficient movement</li>
                <li>Grows along with the body</li>
              </ul>
            </p>
          ],
          examples:[
            "Cartilaginous and bony skeleton of vertebrates (fish, frog, humans)"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768412652/exo_and_endo_skeleton_cfmuvg.png"
        },
        {
          heading:"Comparison Table",
          table:{
            headers:["Feature","Feature","Endoskeleton"],
            rows:[
              ["Position","Outside body","Inside body"],
              ["Nature","Non-living","Living"],
              ["Growth","Does not grow with body","Grows with body"],
              ["Examples","Shells, scales, feathers","Bones, cartilage"]
            ]
          }
        },
        {
          heading:"Axial Supporting Structures"
        },
        {
          heading:"Stomochord", 
          isSubtopic: true,
          text:"The stomochord is a hollow, flexible tube found only in hemichordates. It lies in the anterior region of the body and provides support to the proboscis.",
          content:[
            <p>Important clarification:
              <ul>
                <li>Stomochord is not a true notochord</li>
                <li>It is not mesodermal in origin</li>
                <li>Hence, hemichordates are not true chordates</li>
              </ul>
            </p>
          ]
        },
        {
          heading:"Notochord",
          isSubtopic: true,
          text:"The notochord is a rod-like, flexible structure derived from the mesoderm. It forms during embryonic development and lies on the dorsal side of the body.",
          content:[
            <p>Functions
              <ul>
                <li>Acts as a primary internal skeleton</li>
                <li>Provides support and defines the body axis</li>
                <li>Helps in the development of the vertebral column</li>
              </ul>
            </p>,
            "Animals that possess a notochord at any stage of life are called chordates.",
            "Animals that never form a notochord are called non-chordates."
          ],
        },
        {
          heading:"Vertebrates",
          text:"In many chordates, the notochord is present only during embryonic stages. Later, it is replaced by a vertebral column (backbone) made of bone or cartilage.",
          content:[
            "These animals are called vertebrates.",
            
          ],
          examples:[
            "Fishes",
            "Amphibians",
            "Reptiles",
            "Birds",
            "Mammals"
          ]
        }
        
      ]
    },
    metamerism: {
      title: "Metamerism (Segmentation)",
      icon: <Layers />,
      sections: [
        {
          heading: "Overview",
          text:"Metamerism is the phenomenon in which an animal body shows linear repetition of similar parts along its longitudinal axis.",
          content:[
            "This division of the body into repeated units is called segmentation.",
            "Each repeated body unit is called a metamere or somite.",
            <p>Metamerism is found in three highly organized phyla:
              <ul>
                <li>Annelida</li>
                <li>Arthropoda</li>
                <li>Chordata</li>
              </ul>
            </p>,
            "In these animals, segmentation may be present externally, internally, or both.",
            "When segmentation is present both externally and internally, it is called true (metameric) segmentation."
          ]
          
        },
        {
          heading:"Types of Metamerism",
          text:"Metamerism is classified into two main types: Homonomous Metamerism,Heteronomous Metamerism",
          
        },
        {
          heading:"Homonomous Metamerism",
          isSubtopic: true,
          content:[
            "All the segments are similar in structure and function.",
            "Each metamere looks alike."
          ],
          examples:[
            "Annelida (Earthworm)"
          ]
        },
        {
          heading:"Heteronomous Metamerism",
          isSubtopic: true,
          content:[
            "The segments are dissimilar and specialized for different functions.",
            "Body segments may be grouped into regions."
          ],
          examples:[
            "Arthropoda (head, thorax, abdomen)",
            "Chordata (internal segmentation such as vertebrae and muscles)"
          ]
        },
        {
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768415124/homo_and_hetro_pd0unc.png"
        }
      ]
    },
    nervous: {
      title: "Nervous System",
      icon: <Brain />,
      sections: [
        {
          heading: "Overview",
          text:"The nervous system evolved gradually as animals became more complex. It originated from simple cellular coordination and later developed into a highly centralized and protected system capable of rapid responses and complex behavior.",
          content: [
            "The nervous system is ectodermal in origin and is composed of specialized cells called neurons, which can detect, receive, and transmit stimuli."
          ]
        },
        {
          heading:"Absence of Nervous System (Cellular Coordination)"
        },
        {
          heading:"Porifera (Sponges)",
          isSubtopic: true,
          content:[
            "Nervous system: Absent",
            "No neurons or nerve tissues are present.",
            "Body activities are controlled by simple cell-to-cell coordination."
          ],
          text:"This represents the most primitive condition."
        },
        {
          heading:"Diffuse Nervous System (Nerve Net)", 
        },
        {
          heading:"Cnidaria (Coelenterata) & Ctenophora",
          isSubtopic: true,
          content:[
            "Nervous system consists of a loose network of nerve fibers, called a nerve net.",
            "Nerve cells are present on both sides of the mesoglea.",
            "No brain or ganglia.",
            "Impulses can travel in all directions."
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768806540/Diffuse_Nervous_System_ya6k5s.png"
        },
        {
          heading:"Beginning of Centralization (Nerve Ring + Nerve Cords)"
        },
        {
          heading:"Platyhelminthes & Aschelminthes",
          isSubtopic: true,
          content:[
            "Nervous system shows early centralization.",
            "A nerve ring is present around the anterior part of the gut.",
            "From the nerve ring, many longitudinal nerve cords extend backward.",
            "Often described as a ladder-like nervous system."
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768806530/Beginning_of_Centralization_s2cmzl.png",
          text:"This allows directional movement and better coordination."
        },
        {
          heading:"Further Centralization and Segmentation"
        },
        {
          heading:"Annelida & Arthropoda",
          isSubtopic:true,
          content:[
            "Nervous system is well developed and centralized.",
            "A nerve ring surrounds the anterior part of the gut.",
            "A double, solid, mid-ventral nerve cord is present.",
            "The nerve cord has segmentally arranged ganglia."
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768806805/Further_Centralization_and_Segmentation_gqin79.png",
          text:"This arrangement provides precise control of segmented body movements."
        },
        {
          heading:"Ganglionic Nervous System with Commissures"
        },
        {
          heading:"Mollusca",
          isSubtopic:[
            "Nervous system consists of paired ganglia.",
            <p>Ganglia are interconnected by:
              <ul>
                <li>Commissures (between similar ganglia)</li>
                <li>Connectives (between different ganglia)</li>
              </ul>
            </p>,
            <p>Complexity varies:
              <ul>
                <li>Simple in gastropods</li>
                <li>Highly developed in cephalopods</li>
              </ul>
            </p>
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768806812/Ganglionic_Nervous_System_with_Commissures_uwddmx.png",
          text:"This allows higher coordination and learning ability."
        },
        {
          heading:"Radial Nervous System"
        },
        {
          heading:"Echinodermata",
          isSubtopic:true,
          content:[
            "Nervous system shows radial symmetry.",
            <p>Consists of:
              <ul>
                <li>Oral nerve ring</li>
                <li>Aboral nerve ring</li>
                <li>Radial nerves extending into arms</li>
              </ul>
            </p>,
            "No true brain."
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768806822/Radial_Nervous_System_hcn78a.png",
          text:"Suitable for radially symmetrical body plan."
        },
        {
          heading:"Diffuse with Nerve Cords (Primitive Chordate Condition)"
        },
        {
          heading:"Hemichordata",
          isSubtopic: true,
          content:[
            "Still lacks true chordate organization.",
            <p>Nervous system includes:
              <ul>
                <li>Basiepidermal nerve net</li>
                <li>Intraepidermal nerve net</li>
                <li>Dorsal and ventral nerve cords</li>
              </ul>
            </p>
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768806802/Diffuse_with_Nerve_Cords_dfnsko.png",
          text:"Represents a transitional condition."
        },
        {
          heading:"Highly Centralized Nervous System"
        },
        {
          heading:"Vertebrates (Chordata)",
          isSubtopic:true,
          content:[
            "Nervous system is most complex and centralized.",
            <p>Composed of:
              <ul>
                <li>Brain</li>
                <li>Single dorsal, hollow, non-ganglionated nerve cord (spinal cord)</li>
                <li>Cranial nerves</li>
                <li>Spinal nerves</li>
                <li>Autonomic (sympathetic) nervous system</li>
              </ul>
            </p>,
            "Brain is enclosed in the cranium.",
            "Spinal cord is protected by the vertebral column."
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768806818/Highly_Centralized_Nervous_System_dvylee.png",
          text:"This allows advanced behavior, learning, and rapid responses."
        },
        {
          heading:"Comparison Table",
          table: {
            headers: ["Level of Complexity", "Nervous System Type","Phylum Examples"],
            rows: [
              ["Absent", "No neurons","Porifera"],
              ["Diffuse", "Nerve net","Cnidaria, Ctenophora"],
              ["Slightly centralized", "Nerve ring + cords","Platyhelminthes, Aschelminthes"],
              ["Centralized & segmented","Ventral nerve cord with ganglia","Annelida, Arthropoda"],
              ["Ganglionic","Interconnected ganglia","Mollusca"],
              ["Radial","Nerve rings + radial nerves","Echinodermata"],
              ["Transitional","Nerve nets + cords","Hemichordata"],
              ["Highly centralized","Brain + spinal cord","Vertebrates"]
            ]
          }
        }

      ]
    },
    reproductive: {
      title: "Reproductive System",
      icon: <GitBranch />,
      sections: [
        {
          heading: "Reproductive System in Animals",
          text:"Reproduction is a special characteristic of all living organisms. It helps in the continuation of a species (race) and maintains population size. In animals, reproduction occurs in two main ways: asexual and sexual reproduction."
        },
        {
          heading:"Asexual Reproduction",
          text:"In asexual reproduction, a single parent produces new individuals. There is no formation or fusion of gametes, and the offspring are genetically identical to the parent.This type of reproduction is common in lower and simpler animals."
        },
        {
          heading:"Common Methods of Asexual Reproduction",
          isSubtopic: true
        },
        {
          heading:"Binary Fission",
          isSubSubtopic: true,
          text:"One organism divides into two equal individuals.",
          examples:[
            "Protozoans (Amoeba, Paramecium)"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768827203/Screenshot_2026-01-19_182113_w2h4tq.png"
        },
        {
          heading:"Multiple Fission",
          isSubSubtopic: true,
          text:"One parent produces many offspring at once.",
          examples:[
            "Protozoans (Plasmodium)"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768827203/Screenshot_2026-01-19_182201_qslxlh.png"
        },
        {
          heading:"Budding",
          isSubSubtopic:true,
          text:"A small outgrowth (bud) forms on the parent and later separates.",
          examples:["Cnidaria (Hydra)"],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768827203/Screenshot_2026-01-19_182224_sauk4z.png"
        },
        {
          heading:"Fragmentation",
          isSubSubtopic:true,
          text:"The body breaks into pieces, and each piece develops into a new individual.",
          examples:["Porifera (Sponges), some Annelids"],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768827203/Screenshot_2026-01-19_182244_pq8n1a.png"
        },
        {
          heading:"Sexual Reproduction",
          content:[
            "In sexual reproduction, two parents are usually involved.",
            <p>It includes:
              <ul>
                <li>Formation of gametes</li>
                <li>Fusion of male and female gametes (fertilization)</li>
              </ul>
            </p>,
            "This type of reproduction is common in higher animals and leads to genetic variation."
          ]
        },
        {
          heading:"Gametes and Gonads",
          isSubtopic: true,
          content:[
            "Gametes are sex cells.",
            "Male gamete: Sperm",
            "Female gamete: Ovum (egg)"
          ]
        },
        {
          heading:"Gametes are produced in special organs called gonads:",
          isSubtopic:true,
          content:[
            "Testes → produce sperms",
            "Ovaries → produce ova"
          ]
        },
        {
          heading:"Based on Distribution of Sexes"
        },
        {
          heading:"Unisexual (Dioecious) Animals",
          isSubtopic:true,
          content:[
            "Male and female gonads are present in different individuals.",
            "Each organism is either male or female."
          ],
          example:[
            "Nematoda (Ascaris)",
            "Arthropoda",
            "Most vertebrates (fishes, birds, mammals)"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768828698/Screenshot_2026-01-19_184735_q1ybcj.png"
        },
        {
          heading:"Bisexual (Monoecious / Hermaphrodite) Animals",
          isSubtopic:true,
          content:[
            "Both testes and ovaries are present in the same individual.",
            "Self-fertilization or cross-fertilization may occur."
          ],
          examples:[
            "Platyhelminthes (Taenia)",
            "Annelida (Earthworm)",
            "Some Molluscs"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768828697/Screenshot_2026-01-19_184755_b7wunj.png"
        },
        {
          heading:"Evolutionary Trend in Reproduction",
          content:[
            "Lower animals → mainly asexual reproduction",
            "Higher animals → sexual reproduction",
            "Sexual reproduction increases variation, adaptability, and survival"
          ]
        },
        {
          heading:"comparison table",
          table:{
            headers:["Phylum / Group","Type of Reproduction","Sexual Condition","Special Features / Examples"],
            rows:[
              ["Porifera","Asexual & Sexual","Mostly bisexual (hermaphrodite)","Asexual by budding, fragmentation; sexual by gametes"],
              ["Cnidaria (Coelenterata)","Asexual & Sexual","Mostly bisexual","Budding common (Hydra); alternation of generations in some"],
              ["Ctenophora","Sexual","Bisexual","Self-fertilization rare; marine forms"],
              ["Platyhelminthes","Sexual (some asexual)","Bisexual","Complex reproductive organs (e.g., Taenia)"],
              ["Nematoda (Aschelminthes)","Sexual","Unisexual (dioecious)","Sexual dimorphism common (Ascaris)"],
              ["Annelida","Sexual (some asexual)","Mostly bisexual","Earthworm is hermaphrodite; clitellum present"],
              ["Mollusca","Sexual","Mostly unisexual (some bisexual)","Cephalopods show advanced reproduction"],
              ["Arthropoda","Sexual","Unisexual","Metamorphosis common; insects show high specialization"],
              ["Echinodermata","Sexual (some asexual)","Unisexual","High regeneration capacity"],
              ["Hemichordata","Sexual","Unisexual","Simple gonads"],
              ["Chordata (Vertebrates)","Sexual","Mostly unisexual","Advanced organs; placenta in mammals"]
            ]
          }
        }
      ]
    },
    fertilization: {
      title: "Fertilization",
      icon: <Anchor />,
      sections: [
        {
          heading: "Overview",
          text:"Fertilization is the process in which the male gamete (sperm) fuses with the female gamete (ovum).The product formed after fertilization is called a zygote, which later develops into a new individual."
        },
        {
          heading:"Types of Fertilization (Based on Place)"
        },
        {
          heading:"1.External Fertilization",
          isSubtopic: true,
          text:"External fertilization occurs when the sperms and eggs are released into the external environment, usually water, and fertilization takes place outside the body.",
          content:[
            "Common in aquatic animals",
            "A large number of gametes are produced to increase chances of fertilization",
            "Fertilization occurs outside the body."
          ],
          examples:[
            "Many aquatic invertebrates",
            "Fishes",
            "Amphibians"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768831239/Screenshot_2026-01-19_193008_afkwql.png"
        },
        {
          heading:"2.Internal Fertilization",
          isSubtopic: true,
          text:"Internal fertilization occurs when the fusion of sperm and egg takes place inside the female reproductive tract.",
          content:[
            "Common in terrestrial animals",
            "Also seen in some aquatic vertebrates",
            "Produces fewer gametes but has a higher success rate",
            "Fertilization occurs inside the body."
          ],
          examples:[
            "Reptiles",
            "Birds",
            "Mammals",
            "Some fishes (e.g., sharks)"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768831239/Screenshot_2026-01-19_193021_l2gqtj.png"
        },
        {
          heading:"Types of Fertilization (Based on Parents)"
        },
        {
          heading:"3.Self-Fertilization",
          isSubtopic:true,
          text:"Self-fertilization occurs when the sperm and egg produced by the same individual fuse together.",
          content:[
            "Seen in bisexual (hermaphrodite) animals",
            "Ensures reproduction even when mates are unavailable"
          ],
          examples:[
            "Taenia",
            "Earthworm (rare, usually cross-fertilization preferred)"
          ]
        },
        {
          heading:"4.Cross-Fertilization",
          isSubtopic:true,
          text:"Cross-fertilization occurs when the gametes from two different individuals fuse.",
          content:[
            "Most common type in animals",
            "Leads to genetic variation",
            "Fertilization evolved from external (aquatic) → internal (terrestrial) with increasing protection of gametes and embryos"
          ],
          examples:[
            "Most animals, including humans"
          ]
        },
        {
          heading:"comparison-table",
          table:{
            headers:["Phylum","Type of Fertilization","Nature (Self / Cross)","Examples"],
            rows:[
              ["Porifera","Internal fertilization","Mostly self (bisexual)","Sponges"],
              ["Cnidaria (Coelenterata)","External (mostly)","Cross-fertilization","Hydra, Jellyfish"],
              ["Ctenophora","External","Self or cross","Comb jellies"],
              ["Platyhelminthes","Internal","Mostly self (bisexual)","Taenia, Planaria"],
              ["Nematoda (Aschelminthes)","Internal","Cross-fertilization","Ascaris"],
              ["Annelida","External or internal","Mostly cross","Earthworm"],
              ["Mollusca","External or internal","Mostly cross","Pila, Octopus"],
              ["Arthropoda","Internal","Cross-fertilization","Insects, Crabs"],
              ["Echinodermata","External","Cross-fertilization","Starfish"],
              ["Hemichordata","External","Cross-fertilization","Balanoglossus"],
              ["Chordata - Pisces","External (mostly)","Cross-fertilization","Rohu, Shark"],
              ["Chordata - Amphibia","External (mostly)","Cross-fertilization","Frog"],
              ["Chordata - Reptilia","Internal","Cross-fertilization","Lizard, Snake"],
              ["Chordata - Aves","Internal","Cross-fertilization","Birds"],
              ["Chordata - Mammalia","Internal (placental)","Cross-fertilization","Humans"]
            ]
          }
        }
      ]
    },
    development: {
      title: "Development in Animals",
      icon: <Baby />,
      sections: [
        {
          heading:"Overview",
          text:"Development refers to the series of changes by which a zygote grows and differentiates into an adult animal.Based on the mode of birth, development is classified into three types."
        },
        {
          heading:"1.Oviparous Animals",
          text:"Oviparous animals lay eggs, and development of the embryo takes place outside the body of the mother.",
          content:[
            "Eggs may be laid after external or internal fertilization",
            "Embryo is nourished by yolk"
          ],
          examples:[
            "Fishes",
            "Amphibians",
            "Reptiles",
            "Birds",
            "Many invertebrates"
          ]
        },
        {
          heading:"2.Viviparous Animals",
          text:"Viviparous animals give birth to young ones.",
          contents:[
            "Fertilization is always internal",
            "The embryo develops inside the mother",
            "Nourishment is obtained directly from the mother (placenta in mammals)"
          ],
          examples:[
            "Most mammals (human, dog, cow)"
          ]
        },
        {
          heading:"3.Ovoviviparous Animals",
          text:"In ovoviviparous animals:",
          content:[
            "Eggs are retained inside the mother’s body",
            "Embryo develops inside the egg",
            "There is no direct nourishment from the mother",
            "Young ones hatch inside the mother and are then released"
          ],
          examples:[
            "Sharks",
            "Some reptiles (snakes, lizards)"
          ]
        },
        {
          heading:"Types of Development (Based on Life Cycle)",
          text:"Development is further classified into two types based on whether a larval stage is present."
        },
        {
          heading:"4.Direct Development",
          text:"In direct development:",
          content:[
            "There is no larval stage",
            "The young one resembles the adult",
            "Only growth and maturation occur"
          ],
          examples:[
            "Reptiles",
            "Birds",
            "Mammals"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768837329/Screenshot_2026-01-19_211018_qkxizo.png"
        },
        {
          heading:"5.Indirect Development",
          text:"In indirect development:",
          content:[
            "Development includes one or more larval stages",
            "Larva differs greatly from adult",
            "Larva undergoes metamorphosis to become adult"
          ],
          examples:[
            "Frog (tadpole → frog)",
            "Insects (butterfly, mosquito)"
          ],
          image:"https://res.cloudinary.com/duibfmcw1/image/upload/v1768837329/Screenshot_2026-01-19_211035_pzvkco.png"
        }
      ]
    },
    temperature: {
      title: "Body Temperature Regulation",
      icon: <Thermometer />,
      sections: [
        {
          heading: "Overview",
          text:"Animals differ in their ability to maintain body temperature.Based on this, animals are classified into poikilothermic and homeothermic."
        },
        {
          heading:"Poikilothermic (Ectothermic) Animals",
          text:"Poikilothermic animals do not maintain a constant body temperature.Their body temperature changes with the surrounding environment.",
          content:[
            "Also called ectothermic animals",
            "Body temperature depends on external heat sources",
            "Mostly found in aquatic or warm environments"
          ],
          examples:[
            "Fishes",
            "Amphibians",
            "Reptiles",
            "Most invertebrates",
            "A lizard becomes active in sunlight and sluggish in cold."
          ]
        },
        {
          heading:"Homeothermic (Endothermic) Animals",
          text:"Homeothermic animals maintain a constant body temperature, regardless of changes in environmental temperature.",
          content:[
            "Also called endothermic animals",
            "Body heat is produced internally by metabolism",
            "Requires more energy"
          ],
          examples:[
            "Birds",
            "Mammals",
            "Humans maintain ~37 °C body temperature in all seasons"
          ]
        },
        {
          heading:"Salinity Tolerance in Animals",
          text:"Animals also differ in their ability to tolerate changes in salt concentration of the environment."
        },
        {
          heading:"Stenohaline Animals",
          text:"Stenohaline animals can tolerate only a narrow range of salinity.",
          content:[
            "Mostly marine or freshwater animals",
            "Cannot survive drastic salinity changes"
          ],
          examples:[
            "Starfish",
            "Coral fishes"
          ]
        },
        {
          heading:"Euryhaline Animals",
          text:"Euryhaline animals can tolerate a wide range of salinity changes.",
          content:[
            "Can live in both freshwater and seawater",
            "Common in estuaries"
          ],
          examples:[
            "Salmon",
            "Eels"
          ]
        }
      ]
    }
  };

  // Logic to calculate Next and Previous Tabs
  const tabKeys = Object.keys(contentData);
  const currentIndex = tabKeys.indexOf(activeTab);
  const prevTabKey = currentIndex > 0 ? tabKeys[currentIndex - 1] : null;
  const nextTabKey = currentIndex < tabKeys.length - 1 ? tabKeys[currentIndex + 1] : null;

  return (
    <div className="zoo-app-container">
      
      {/* Mobile Overlay */}
      <div 
        className={`sidebar-overlay ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`zoo-sidebar ${isMobileOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          
        </div>
        <nav className="sidebar-nav">
          {Object.keys(contentData).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setIsMobileOpen(false); // Close menu on selection
              }}
              className={`nav-btn ${activeTab === key ? 'active' : ''}`}
            >
              {React.cloneElement(contentData[key].icon, { size: 20 })}
              <span>{contentData[key].title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="zoo-main-content">
        
        {/* Mobile Header Bar */}
        <div className="mobile-header-bar">
          <button className="mobile-menu-btn" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} color="#16a34a" />
          </button>
          <span className="mobile-brand-title">ZooLearn</span>
        </div>

        <div className="content-card">
          
          {/* Header - NOW INCLUDES TOP NAVIGATION BUTTONS */}
          <div className="content-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="header-icon-wrapper">
                {React.cloneElement(contentData[activeTab].icon, { size: 32, color: '#16a34a' })}
              </div>
              <h2 className="header-title">{contentData[activeTab].title}</h2>
            </div>

            {/* Top Navigation Wrapper */}
            <div className="header-nav-buttons" style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem' }}>
                {prevTabKey && (
                  <button 
                    className="nav-action-btn prev-btn"
                    onClick={() => setActiveTab(prevTabKey)}
                    title="Previous Topic"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    &larr; Prev
                  </button>
                )}
                {nextTabKey && (
                  <button 
                    className="nav-action-btn next-btn"
                    onClick={() => setActiveTab(nextTabKey)}
                    title="Next Topic"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    Next &rarr;
                  </button>
                )}
            </div>
          </div>

          {/* Content Rendering */}
          <div className="sections-wrapper">
            {contentData[activeTab].sections.map((section, index) => (
              <div 
                key={index} 
                className="content-section" 
                // UPDATED STYLE TO HANDLE isSubSubtopic
                style={{
                    marginLeft: section.isSubSubtopic ? '4rem' : section.isSubtopic ? '2rem' : '0',
                    borderLeft: (section.isSubtopic || section.isSubSubtopic) ? '3px solid #e5e7eb' : 'none',
                    paddingLeft: '1.5rem'
                }}
              >
                <h3 className="section-title" style={(section.isSubtopic || section.isSubSubtopic) ? { fontSize: '1.1rem', color: '#4b5563' } : {}}>
                  <span className="section-marker" style={(section.isSubtopic || section.isSubSubtopic) ? { height: '1rem', background: '#9ca3af' } : {}}></span>
                  {section.heading}
                </h3>
                
                {/* Text Paragraph */}
                {section.text && (
                  <p className="section-text">{section.text}</p>
                )}

                {/* Bullet Points */}
                {section.content && (
                  <ul className="section-list">
                    {section.content.map((item, i) => (
                      <li key={i} className="list-item">
                        <span className="bullet-dot"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Table */}
                {section.table && (
                  <div className="table-container">
                    <table className="zoo-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((header, hIndex) => (
                            <th key={hIndex}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIndex) => (
                          <tr key={rIndex}>
                            {row.map((cell, cIndex) => (
                              <td key={cIndex}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* --- IMAGE BLOCK --- */}
                {section.image && (
                  <figure className="section-image-wrapper">
                    <img 
                      src={section.image} 
                      alt={section.heading} 
                      className="section-image" 
                    />
                    {section.imageCaption && (
                      <figcaption className="image-caption">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* --- EXAMPLE LIST BLOCK --- */}
                {section.examples && (
                  <div className="example-block">
                    <span className="example-label">Examples</span>
                    <ul className="example-list">
                      {section.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
              </div>
            ))}
          </div>

          {/* --- NEXT / PREV BUTTONS FOOTER --- */}
          <div className="navigation-footer">
            {prevTabKey ? (
              <button 
                className="nav-action-btn prev-btn"
                onClick={() => setActiveTab(prevTabKey)}
              >
                &larr; Previous
              </button>
            ) : (
              <div></div> /* Spacer to keep Next button on the right */
            )}

            {nextTabKey && (
              <button 
                className="nav-action-btn next-btn"
                onClick={() => setActiveTab(nextTabKey)}
              >
                Next &rarr;
              </button>
            )}
          </div>

        </div>
      
      </div>
    </div>
  );
};

export default ZoologyLearningPlatform;