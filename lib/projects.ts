export type ProjectCategory =
  | "ecommerce"
  | "vitrine"
  | "saas"
  | "sante"
  | "industrie";

export type Project = {
  slug: string;
  name: string;
  sector: string;
  category: ProjectCategory;
  problem: string;
  stack?: string;
  url: string;
  accent: string;
  /** Optional local capture: `/projects/{slug}.webp` */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "cosmeva",
    name: "Cosmeva",
    sector: "Cosmétiques B2B",
    category: "ecommerce",
    problem:
      "Catalogue wholesale pour détaillants : MOQ, gammes solaires et corps, commande claire plutôt qu'une vitrine décorative.",
    stack: "Next.js · e-commerce B2B",
    url: "https://cosmevadz.com",
    accent: "#C4A574",
  },
  {
    slug: "inass-meuble",
    name: "Inass Meuble",
    sector: "Mobilier",
    category: "ecommerce",
    problem:
      "Vendre une sélection courte de meubles pratiques, en arabe, avec livraison 58 wilayas et paiement à la livraison.",
    stack: "Next.js · RTL · COD",
    url: "https://inass-meuble.com",
    accent: "#8B7355",
  },
  {
    slug: "leagb",
    name: "LEAGB",
    sector: "Géotechnique",
    category: "industrie",
    problem:
      "Rendre lisible un laboratoire béton/sol à Chéraga : équipements, preuves techniques, prises de contact multiples.",
    stack: "Next.js · vitrine technique",
    url: "https://laboratoire-legab.com",
    accent: "#4A6FA5",
  },
  {
    slug: "ballers",
    name: "Ballers",
    sector: "Streetwear",
    category: "ecommerce",
    problem:
      "Boutique sportwear homme (Nike, Jordan, Adidas) avec rythme de collection et parcours d'achat mobile-first.",
    stack: "Next.js · e-commerce",
    url: "https://ballersdz.com",
    accent: "#E8E8E8",
  },
  {
    slug: "kocem",
    name: "KOCEM",
    sector: "Mode femme",
    category: "ecommerce",
    problem:
      "Sélection sacs et chaussures : catégories nettes, fiches produit soignées, checkout adapté au retail algérien.",
    stack: "Next.js · e-commerce",
    url: "https://kocemdz.com",
    accent: "#D4A0A0",
  },
  {
    slug: "dr-amrani",
    name: "Dr Amrani",
    sector: "Cardiologie",
    category: "sante",
    problem:
      "Cabinet cardiaque : vulgariser les signes d'alerte, orienter l'urgence, et donner une prise de rendez-vous crédible.",
    stack: "Next.js · éditorial médical",
    url: "https://dramrani-cardiologie.com",
    accent: "#6B8E9F",
  },
  {
    slug: "souk-lhoma",
    name: "Souk Lhoma",
    sector: "Alimentaire",
    category: "ecommerce",
    problem:
      "Canal de commande en ligne pour une offre boucherie / souk — stocks, confiance, et livraison locale.",
    stack: "E-commerce",
    url: "https://souklhoma.com",
    accent: "#B85C38",
  },
  {
    slug: "yousra-entrepot",
    name: "Yousra Entrepôt",
    sector: "Logistique",
    category: "industrie",
    problem:
      "Expliquer l'entreposage sous douane à Jijel (36 000 m², flux conteneurs) à des importateurs pressés.",
    stack: "Next.js · site industriel",
    url: "https://sarlyousraentrepot.com",
    accent: "#C4A35A",
  },
  {
    slug: "sm-boutique",
    name: "S&M Boutique",
    sector: "Mode RTL",
    category: "ecommerce",
    problem:
      "Boutique femme (sélection turque) 100 % arabe, RTL, collections et service WhatsApp — sans template générique.",
    stack: "Next.js · RTL arabe",
    url: "https://smboutique-dz.com",
    accent: "#C9A227",
  },
  {
    slug: "digitag",
    name: "DigiTag",
    sector: "Contrôle d'accès",
    category: "ecommerce",
    problem:
      "Vendre serrures, RFID et kits professionnels avec configuration de lots et discours technique lisible.",
    stack: "Next.js · catalogue B2B",
    url: "https://digitag-dz.com",
    accent: "#3D7A5A",
  },
  {
    slug: "akham-films",
    name: "Akham Films",
    sector: "Cinéma",
    category: "vitrine",
    problem:
      "Identité d'un atelier de cinéma algérien : filmographie, manifeste, palmarès — un site à la hauteur des images.",
    stack: "Next.js · éditorial",
    url: "https://akhamfilms.com",
    accent: "#E8D5A3",
  },
  {
    slug: "2a2h",
    name: "2A2H",
    sector: "Architecture",
    category: "vitrine",
    problem:
      "Atelier Hanifa Hamouche : études, scan 3D et expertise bâtiment présentés comme un bureau, pas une galerie générique.",
    stack: "Next.js · vitrine cabinet",
    url: "https://2a2h-hamouchehanifa.com",
    accent: "#A67C52",
  },
  {
    slug: "swab",
    name: "SWAB",
    sector: "Aérosols industriels",
    category: "industrie",
    problem:
      "Marque B2B d'aérosols : poser un cadre professionnel et un accès contact pour des acheteurs industriels.",
    stack: "Site industriel",
    url: "https://swabdz.com",
    accent: "#5C6B73",
  },
  {
    slug: "sada",
    name: "SADA Corp",
    sector: "Événement B2B",
    category: "vitrine",
    problem:
      "Plateforme du salon panafricain SADA : crédibilité institutionnelle, chiffres, inscriptions et réseau ambassades.",
    stack: "Next.js · site événementiel",
    url: "https://sadacorp.com",
    accent: "#C9A227",
  },
];
