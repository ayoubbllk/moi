import { site } from "@/lib/site";

export const fr = {
  locale: "fr" as "fr" | "ar",
  dir: "ltr" as "ltr" | "rtl",
  meta: {
    title: `${site.founder} — ${site.name} | Développeur web & growth, Alger`,
    description:
      "Agence freelance à Alger : sites modernes, e-commerce, CRM/ERP et Meta Ads pour PME algériennes. Un interlocuteur qui connaît le terrain.",
  },
  nav: {
    about: "À propos",
    expertise: "Expertise",
    projects: "Projets",
    process: "Process",
    contact: "Contact",
  },
  hero: {
    kicker: `${site.city} · ${site.area}`,
    name: site.founder,
    brand: site.name,
    line: "Développeur web & growth partner",
    lineAccent: "pour PME algériennes.",
    body: "Je conçois des sites et des outils métier qui vendent, encaissent et s'administrent — pas des vitrines qui dorment.",
    ctaPrimary: "Voir mes projets",
    ctaSecondary: "Discuter d'un projet",
    available: "Disponible pour un nouveau mandat",
  },
  stats: [
    { value: 14, suffix: "", label: "projets livrés" },
    { value: 5, suffix: "+", label: "secteurs terrain" },
    { value: 58, suffix: "", label: "wilayas desservies" },
    { value: 1, suffix: "", label: "interlocuteur" },
  ],
  about: {
    kicker: "À propos",
    title: "Pas juste un développeur.",
    lead: "Mon parcours ne rentre pas dans une case : tech, commerce, import-export, agro-alimentaire, administration publique. C'est cette polyvalence qui fait la force de Com & Code.",
    body: "Je construis pour le marché algérien réel — paiement à la livraison, CCP, Baridimob, Yalidine, interlocuteurs publics, stocks et douane. Le code sert le business, pas l'inverse.",
    timeline: [
      {
        year: "Commerce",
        title: "Vente & négociation",
        text: "Comprendre une offre, un prix, un client qui hésite. Les sites que je livre parlent le langage de la conversion, pas celui d'une maquette.",
      },
      {
        year: "Import-export",
        title: "Flux, stocks, douane",
        text: "Conteneurs, délais, formalités. J'ai vu pourquoi un ERP trop « européen » casse dès le premier arrivage au port.",
      },
      {
        year: "Agro",
        title: "Terrain & saisonnalité",
        text: "Distribution, fraîcheur, réseaux de points de vente. Des contraintes que les templates WordPress ignorent.",
      },
      {
        year: "Public",
        title: "Administration",
        text: "Process, conformité, plusieurs interlocuteurs. Utile quand un projet doit tenir face à un cahier des charges réel.",
      },
      {
        year: "Tech",
        title: "Code & systèmes",
        text: "Next.js, CRM/ERP sur-mesure, automatisation. Le socle qui relie tout ça en un outil que l'équipe utilise vraiment.",
      },
    ],
  },
  expertise: {
    kicker: "Expertise",
    title: "Trois leviers. Un seul atelier.",
    pillars: [
      {
        id: "web",
        title: "Développement web",
        text: "Sites vitrines, e-commerce et applications métier conçus pour le marché algérien et africain — pas des templates réchauffés.",
        items: [
          "Next.js, vitrines & corporate",
          "E-commerce (COD, CCP, Baridimob)",
          "CRM / ERP sur-mesure",
          "SEO technique natif",
        ],
      },
      {
        id: "growth",
        title: "Growth & Meta Ads",
        text: "Des campagnes qui amènent des commandes WhatsApp et des devis, pas des likes. Offre, tracking, créas — alignés sur le site.",
        items: [
          "Meta Ads (FB / IG)",
          "Tunnel & landing",
          "Tracking conversions",
          "Itération hebdomadaire",
        ],
      },
      {
        id: "auto",
        title: "Automatisation & IA",
        text: "Relances, devis, stocks, messages WhatsApp. On retire le répétitif pour que l'équipe vende et livre.",
        items: [
          "Relances & pipelines",
          "Devis / factures",
          "WhatsApp & notifications",
          "Assistants internes",
        ],
      },
    ],
  },
  projects: {
    kicker: "Réalisations",
    title: "Des sites qui travaillent.",
    subtitle:
      "E-commerce, santé, industrie, culture. Chaque projet part d'un blocage terrain — pas d'une moodboard.",
    all: "Tous",
    empty: "Aucun projet dans cette catégorie pour le moment.",
    visit: "Visiter le site",
    filters: [
      { id: "all", label: "Tous" },
      { id: "ecommerce", label: "E-commerce" },
      { id: "vitrine", label: "Vitrine" },
      { id: "saas", label: "SaaS interne" },
      { id: "sante", label: "Santé" },
      { id: "industrie", label: "Industrie" },
    ],
  },
  process: {
    kicker: "Process",
    title: "Une ligne de production, pas un sprint théâtral.",
    steps: [
      {
        n: "01",
        title: "Brief terrain",
        text: "45 minutes. On parle chiffres, clients, contraintes de paiement et de livraison. Pas de jargon.",
      },
      {
        n: "02",
        title: "Diagnostic",
        text: "Ce qui bloque vraiment : offre floue, site lent, pas de suivi, pubs qui brûlent le budget.",
      },
      {
        n: "03",
        title: "Prototype",
        text: "Structure, parcours, ton. Vous validez avant qu'une ligne de code parte dans le vide.",
      },
      {
        n: "04",
        title: "Build",
        text: "Site, boutique, CRM ou campagnes. Un interlocuteur, des livrables visibles chaque semaine.",
      },
      {
        n: "05",
        title: "Mise en ligne",
        text: "Formation courte de l'équipe + 30 jours de suivi. Vous devez pouvoir faire vivre l'outil sans moi.",
      },
      {
        n: "06",
        title: "Croissance",
        text: "Ads, itérations, automatisations. On double ce qui marche. On coupe le reste.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Un projet à poser sur la table ?",
    lead: "Première conversation gratuite, sans engagement. WhatsApp, téléphone ou ce formulaire.",
    name: "Nom",
    company: "Société",
    phone: "Téléphone",
    email: "Email",
    type: "Type de projet",
    types: [
      "Site vitrine",
      "E-commerce",
      "CRM / ERP",
      "Meta Ads",
      "Automatisation",
      "Autre",
    ],
    message: "Message",
    messagePh: "Secteur, objectif, délai approximatif…",
    send: "Envoyer",
    sending: "Envoi…",
    sent: "Message prêt dans votre messagerie. Envoyez-le pour que je le reçoive.",
    error: "Complétez les champs requis.",
    whatsapp: "Écrire sur WhatsApp",
    mail: "Écrire un e-mail",
    location: `${site.area}, ${site.city} — ${site.country}`,
  },
  footer: {
    rights: `© ${new Date().getFullYear()} ${site.name}. Tous droits réservés.`,
    location: `${site.city}, ${site.country}`,
    top: "Haut de page",
  },
  logo: {
    baseline: "communication et code",
  },
  processHint: "Glisser — la ligne de production",
  lang: {
    fr: "FR",
    ar: "عربي",
    switch: "Changer de langue",
  },
  a11y: {
    skip: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  cases: {
    cosmeva: {
      sector: "Cosmétiques B2B",
      problem:
        "Catalogue wholesale pour détaillants : MOQ, gammes solaires et corps, commande claire plutôt qu'une vitrine décorative.",
    },
    "inass-meuble": {
      sector: "Mobilier",
      problem:
        "Vendre une sélection courte de meubles pratiques, en arabe, avec livraison 58 wilayas et paiement à la livraison.",
    },
    leagb: {
      sector: "Géotechnique",
      problem:
        "Rendre lisible un laboratoire béton/sol à Chéraga : équipements, preuves techniques, prises de contact multiples.",
    },
    ballers: {
      sector: "Streetwear",
      problem:
        "Boutique sportwear homme (Nike, Jordan, Adidas) avec rythme de collection et parcours d'achat mobile-first.",
    },
    kocem: {
      sector: "Mode femme",
      problem:
        "Sélection sacs et chaussures : catégories nettes, fiches produit soignées, checkout adapté au retail algérien.",
    },
    "dr-amrani": {
      sector: "Cardiologie",
      problem:
        "Cabinet cardiaque : vulgariser les signes d'alerte, orienter l'urgence, et donner une prise de rendez-vous crédible.",
    },
    "souk-lhoma": {
      sector: "Alimentaire",
      problem:
        "Canal de commande en ligne pour une offre boucherie / souk — stocks, confiance, et livraison locale.",
    },
    "yousra-entrepot": {
      sector: "Logistique",
      problem:
        "Expliquer l'entreposage sous douane à Jijel (36 000 m², flux conteneurs) à des importateurs pressés.",
    },
    "sm-boutique": {
      sector: "Mode RTL",
      problem:
        "Boutique femme (sélection turque) 100 % arabe, RTL, collections et service WhatsApp — sans template générique.",
    },
    digitag: {
      sector: "Contrôle d'accès",
      problem:
        "Vendre serrures, RFID et kits professionnels avec configuration de lots et discours technique lisible.",
    },
    "akham-films": {
      sector: "Cinéma",
      problem:
        "Identité d'un atelier de cinéma algérien : filmographie, manifeste, palmarès — un site à la hauteur des images.",
    },
    "2a2h": {
      sector: "Architecture",
      problem:
        "Atelier Hanifa Hamouche : études, scan 3D et expertise bâtiment présentés comme un bureau, pas une galerie générique.",
    },
    swab: {
      sector: "Aérosols industriels",
      problem:
        "Marque B2B d'aérosols : poser un cadre professionnel et un accès contact pour des acheteurs industriels.",
    },
    sada: {
      sector: "Événement B2B",
      problem:
        "Plateforme du salon panafricain SADA : crédibilité institutionnelle, chiffres, inscriptions et réseau ambassades.",
    },
  },
  waMessage: "Bonjour Ayoub, je souhaite discuter d'un projet.",
};

export type Dictionary = typeof fr;
