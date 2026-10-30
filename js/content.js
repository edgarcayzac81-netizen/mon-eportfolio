const CONTENT = {
  cv: { fr: "assets/cv-fr.pdf", en: "assets/cv-en.pdf" }, 
  video: "https://youtu.be/8whFKA5vNRA",
  contact: { linkedin: "https://www.linkedin.com/in/edgar-cayzac-71a689437/",
    mailEnc: "ZWRnYXIuY2F5emFjODFAZ21haWwuY29t",
    telEnc: "KzMzIDYgNDggMTAgMTQgMDM="
  },
  career: [
    { date: "2026 – …", tags: [],
      fr: { title: "Formation post CPGE", org: "ENSEEIHT - INP Toulouse", desc: "Cycle ingénieur MFEE en première année." },
      en: { title: "Education post CPGE", org: "ENSEEIHT - INP Toulouse", desc: "Engineering degree, MFEE program in first year." } },
    { date: "2024-2026", tags: [],
      fr: { title: "CPGE", org: "Déodat de Séverac - Toulouse", desc: "PCSI puis PC" },
      en: { title: "Preparatory class for elite schools", org: "Déodat de Séverac - Toulouse", desc: "PCSI then PC" } },
    { date: "2021-2024", tags: [],
      fr: { title: "Baccalauréat général", org: "Lycée Bellevue Albi", desc: "Obtention de mon Baccalauréat mention Bien en 2024, Spécialité Maths, Physique et SES abandonnée en 1ère, avec option Maths expertes" },
      en: { title: "General Baccalaureate", org: "Bellevue High School, Albi", desc: "Obtained Baccalaureate with honors (mention Bien) in 2024; specializations in Mathematics and Physics (Economics and Social Sciences (SES) dropped after the first year of the lycée cycle), with an additional elective in Advanced Mathematics" } },
    { date: "2020", tags: [],
      fr: { title: "Stage d’observation", org: "Restaurant l’Épicurien, Albi", desc: "Découverte du monde de la restauration et de son adaptation en période de Covid-19" },
      en: { title: "Observation internship", org: "L’Épicurien Restaurant, Albi", desc: "Exploring the world of the restaurant industry and how it adapted during the Covid-19 pandemic" } },
    { date: "Été 2022-23-24-25", tags: [],
      fr: { title: "Travail saisonnier", org: "Albi en agence d’intérim, ou autre", desc: "Castration de maïs, Marquage au sol sur route, Usine agroalimentaire, Tuteur et aide aux devoirs (maths)" },
      en: { title: "Seasonal work", org: "Temporary employment agency in Albi, or other", desc: "Corn detasseling, Road surface markings, Food processing plant, Tutor and homework help (math)" } },
    { date: "2017-2021", tags: [],
      fr: { title: "Brevet des collèges", org: "Collège Bellevue Albi", desc: "Brevet mention très bien" },
      en: { title: "Middle school diploma", org: "Bellevue Middle School, Albi", desc: "Brevet with highest honors" } }

  ],
  activities: [
    { icon: "drum", photos: ["assets/musique-1.jpg","assets/musique-2.jpg","assets/musique-3.jpg","assets/musique-4.jpg"], video: "https://youtube.com/shorts/j38_9-k5cOo", image: "assets/musique-3.jpg",
      fr: { title: "Musique", desc: "J’ai la chance de pratiquer la batterie depuis 15 ans. J’ai participé à de nombreuses compétitions, notamment les finales de France en 2023, où j’ai remporté la coupe de France." },
      en: { title: "Music", desc: "I have been lucky enough to play the drums for 15 years. I took part in many competitions, including the 2023 French finals, where I won the French Cup." } },
    { icon: "ball", photos: ["assets/sport-1.jpg","assets/sport-2.jpg","assets/sport-3.jpg"], video: "", image: "assets/sport-2.jpg",
      fr: { title: "Sport", desc: "Le sport est depuis toujours une passion : football en club, course à pied, musculation, escalade. C’est pour moi vraiment important." },
      en: { title: "Sport", desc: "Sport has always been a passion: club football, running, weight training, climbing. It really matters to me." } },
    { icon: "book", photos: [], video: "", image: "assets/Washington-4.jpg",
      fr: { title: "Culture", desc: "Apprendre, découvrir de nouveaux concepts, de nouvelles cultures ou de nouvelles personnes est aussi une grande passion. Pour moi, développer sa culture, c'est être capable d'échanger avec n'importe qui, tout en transmettant, et en apprenant d'avantage. Chaque personne que l'on peut rencontrer nous apprendra forcément quelque chose. C'est pourquoi, j'ai un grand désir d'apprendre, mais surtout de comprendre et d'appliquer. " },
      en: { title: "Culture", desc: "Learning, discovering new concepts, new cultures, or new people is also a great passion of mine. To me, broadening one’s horizons means being able to engage with anyone, sharing knowledge while continuing to learn even more. Every person you meet inevitably has something to teach you. That is why I have a strong desire not just to learn, but, above all, to understand and to apply what I have learned." } }
  ],
  personal: [
    { tags:[] , link: "", image: "assets/photo1.jpg",
      fr: { title: "", desc: "Très curieux, mais aussi très motivé, j’essaie de m’investir un maximum dans ce que j’entreprends. Que ce soit dans les études ou même dans la vie de tous les jours avec le sport ou l’art à travers la musique. Je suis dans l’optique de faire des études efficaces, qui me permettent de développer le maximum de compétences, et à un niveau optimal. Pour cela j’envisage déjà un double diplôme à l’étranger afin d'élargir mon activité, comme avec le commerce qui m'intéresse grandement par exemple, mais aussi découvrir et partager de nouvelles cultures. \n\nJe n’ai pas encore de spécialisation professionnelle pure en tête. Même si la filière que j’entreprends à l’ENSEEIHT m’oriente vers la mécanique des fluides, j’aime m’ouvrir à de nombreux secteurs, que ce soit l'aérospatial, le naval, ou encore le climat et l'environnement. J'ai pour objectif principal d'apporter mon plus dans la recherche d'une société 'propre' et respectueuse de son habitat, que ce soit par l'énergie ou de nouvelles formes de technologies." }, en: { title: "", desc: "Highly curious and deeply motivated, I strive to be as fully engaged as possible in everything I undertake—whether in my studies or in my daily life, through sport or the arts, particularly music. I want to pursue an effective education that allows me to develop as many skills as possible, at the highest level. To this end, I am already considering a dual degree abroad, which would allow me to broaden my field of activity whit business for example, interests me greatly, but also to discover and share new cultures.\n\nI do not yet have a specific professional specialization in mind. Although the program I am following at ENSEEIHT is steering me towards fluid mechanics, I like to keep my options open across many sectors, whether aerospace, naval, or climate and the environment. My main goal is to contribute to the search for a “clean” society that respects its habitat, whether through energy or new forms of technology." } }
  ],
  eng: [
    { date: "Sept. – Oct. 2026", tags: ["Python",
  { fr: "Mécanique des milieux continus", en: "Continuum mechanics" },
  { fr: "Analyse de phénomènes physique", en: "Analysis of physical phenomena" },
  { fr: "Méthodes numériques", en: "Numerical methods" },
  { fr: "Mesures expérimentales", en: "Experimental measurements" },
  { fr: "Analyse de données", en: "Data analysis" }], link: "assets/Rapport du TP Ressaut.pdf", image: "assets/tp-ressaut.jpg",
      fr: { title: "TP Ressaut hydraulique", desc: "Premier TP à l’ENSEEIHT que l’on a réalisé avec 3 de mes camarades. L’objectif était assez ouvert avec plusieurs axes principaux, mais le réel but était la découverte du phénomène et de ses particularités physiques. J'ai trouvé cela vraiment intéressant surtout dans le fait de nous laisser une grande autonomie pour mener le projet, et nous laisser chercher le lien entre théorie et physique, jusqu'aux limites du modèle." }, en: { title: "Hydraulic jump laboratory experiment", desc: "This was the first practical assignment at ENSEEIHT, which I completed alongside three of my peers. The objective was quite broad, with several main focal points, but the true goal was to explore the phenomenon and its specific physical characteristics. I found this really interesting, especially the fact that we were given a great deal of autonomy in carrying out the project, and were left to explore the connection between theory and physics, right up to the limits of the model." } },
    { date: "2025-2026", tags: ["Python",
  { fr: "Thermodynamique", en: "Thermodynamics" },
  { fr: "Méthodes numériques", en: "Numerical methods" },
  { fr: "Mesures expérimentales", en: "Experimental measurements" },
  { fr: "Analyse de données", en: "Data analysis" }, { fr: "Chimie analytique et organique", en: "Analytical and organic chemistry" },], link: "assets/TIPE.pdf", image: "assets/tipe.jpg",
      fr: { title: "TIPE projet CPGE", desc: "Projet réalisé sur deux ans avec mon camarade Gessy Hosselet-Salavagnac. L’objectif ici était la revalorisation du PLA, un plastique biodégradable mais seulement dans des conditions particulières, et ce en produit utile pour l’industrie. Nous avons notamment étudié la cinétique de dégradation de ce polymère dans différents milieux, et avons constaté que sa dégradation n’est pas très efficace dans des milieux naturels. Puis l’étude s’est portée sur sa revalorisation à travers les billes d’alginate (utilisées en cuisine moléculaire) et le pouvoir conservateur du lactate de sodium. Voici les slides que j’ai réalisés pour m’appuyer le jour de mon oral :" }, en: { title: "TIPE – CPGE project", desc: "A project carried out over two years with my partner Gessy Hosselet-Salavagnac. The objective was to revalue PLA, a biodegradable plastic that requires specific conditions to break down, into a product with industrial utility. We specifically studied the degradation kinetics of this polymer in various environments, finding that it does not degrade very effectively in natural settings. We then explored repurposing it through the use of alginate beads (commonly used in molecular gastronomy) and by taking advantage of the preservative properties of sodium lactate. Below are the slides I created to support my presentation during my oral exam." } }

  ],
  commit: [
    { date: { fr: "Septembre 2026", en: "September 2026" }, tags: [], logo: "assets/logo-fresque.png",
      fr: { title: "Fresque du Climat", desc: "En début d’année à l’ENSEEIHT nous avons été sensibilisés, avec mes camarades, à la Fresque du Climat, pour nous faire réfléchir ensemble sur l’enjeu environnemental, et le rôle que nous pourrions avoir en tant qu’ingénieurs de demain. Ce fut aussi l’occasion de nous rappeler que malgré le fait que de plus en plus de jeunes sont soucieux du futur et du climat, ils ne sont pas seuls, et l’entraide est notre principal atout." },
      en: { title: "Climate Fresk", desc: "At the beginning of the year at ENSEEIHT, my classmates and I took part in a “Climate Fresk” workshop, designed to get us thinking collectively about environmental challenges and the role we might play as the engineers of tomorrow. It also served as a reminder that, while an increasing number of young people are concerned about the future and the climate, they are not alone—and that mutual support is our greatest asset." } },
    { date: { fr: "Septembre 2026", en: "September 2026" }, tags: [],
      fr: { title: "Procès King Kong", desc: "L’ENSEEIHT nous a sensibilisés aux violences sexistes et sexuelles à travers une pièce de théâtre interactive dans laquelle nous jouions un véritable rôle, ce qui permet une réelle immersion." },
      en: { title: "King Kong Trial", desc: "ENSEEIHT raised our awareness about sexist and sexual violence through an interactive play in which we played an actual role, allowing for a truly immersive experience." } },
    { date: { fr: "Octobre 2026", en: "October 2026" }, tags: [], logo: "assets/logo-futur-proche.png",
      fr: { title: "Festival Futur Proche", desc: "Au cours de cette journée, nous avons pu aller dans d’autres écoles pour découvrir des ateliers sur les enjeux climatiques mais aussi tout ce qui touche au futur. Je l’ai notamment constaté avec la formation des 2030 Glorieuses, qui m’a fait prendre conscience qu’un avenir meilleur passe d’abord par une vision plus optimiste de celui-ci." },
      en: { title: "Futur Proche Festival", desc: "During the day, we had the opportunity to visit other schools to explore workshops focused on climate issues, as well as topics related to the future. This was highlighted for me through the “2030 Glorieuses” training program, which made me realize that a better future begins with a more optimistic vision of what lies ahead." } },
    { date: { fr: "Septembre 2026", en: "September 2026" }, tags: [], logo: "assets/clean-walk.jpg",
      fr: { title: "Clean walk", desc: "Une activité organisé par l'association des élèves de l'ENSEEIHT. Par groupe nous avons participé au nettoyage des rues de Toulouse, avec nos moyens certes, mais cette sensibilisation est plus que nécessaire, surtout de nos jours. " }, 
      en: { title: "Clean walk", desc: "An activity organized by the ENSEEIHT student association. Working in groups, we took part in cleaning up the streets of Toulouse, admittedly with limited resources, but such awareness-raising efforts are more than necessary, especially these days." } }
  ],
  mobilityProject: {
    fr: "Une de mes plus grandes passions est de découvrir de nouvelles choses, et quoi de mieux pour cela que de voyager. L'opportunité qui nous est offerte en école d'ingénieur est trop grande pour la laisser passer, c'est pourquoi j'envisage déjà de partir poursuivre mon cursus à l'étranger. J'ai pour projet de partir dans des pays nordiques, que ce soit la Norvège, la Suède ou encore le Canada par exemple, tous sont des pays dans lesquels j'envisage sérieusement de continuer ma formation. Le contexte du double diplôme est encore à déterminer puisque j'hésite entre une formation en parallèle axée aussi sur l'ingénierie et une plutôt commerce/finance qui me permettrait de m'ouvrir encore plus de voies. Mais c'est aussi pourquoi je ne suis pas complètement fermé sur les pays que j'ai pu citer, voyager serait déjà un immense privilège et je choisirais d'abord en fonction du choix de mon orientation plutôt que le choix d'un certain pays.",
    en: "One of my greatest passions is discovering new things, and there is no better way to do that than by traveling. The opportunities available to us in engineering school are too valuable to pass up, which is why I am already planning to pursue part of my studies abroad. I am seriously considering countries in the Nordic region—such as Norway or Sweden—as well as Canada, as potential destinations to continue my education. The specific framework for a dual-degree program is yet to be determined; I am currently weighing the option of a parallel engineering-focused curriculum against one centered on business or finance, which would open up even more career paths. For this reason, I am not strictly committed to the countries I mentioned; traveling itself would be a tremendous privilege, and my final decision will be guided primarily by my chosen academic and professional direction rather than by a specific country."
  },
  mobility: [
    { map: "eu", lat: 43.6, lon: 1.44, flag: "fr", image: "", video: "", fr: { title: "France", desc: "Toulouse : lieu de mes études depuis la classe préparatoire." }, en: { title: "France", desc: "Toulouse: where I have been studying since my preparatory classes." } },
    { map: "eu", lat: 41.1, lon: 1.2, flag: "es", image: "", video: "", fr: { title: "Espagne", desc: "Lieux dans lesquels j’ai eu la chance de voyager" }, en: { title: "Spain", desc: "Places I have had the good fortune to travel to" } },
    { map: "eu", lat: 41.9, lon: 12.5, flag: "it", image: ["assets/Italie-1.jpg", "assets/Italie-2.jpg","assets/Italie-3.jpg","assets/Italie-4.jpg"], video: "", fr: { title: "Italie", desc: "Lieux dans lesquels j’ai eu la chance de voyager" }, en: { title: "Italy", desc: "Places I have had the good fortune to travel to" } },
    { map: "eu", lat: 52.0, lon: 19.5, flag: "pl", image: ["assets/Pologne-1.jpg", "assets/Pologne-2.jpg","assets/Pologne-3.jpg","assets/Pologne-4.jpg"], video: "", fr: { title: "Pologne", desc: "Lieux dans lesquels j’ai eu la chance de voyager" }, en: { title: "Poland", desc: "Places I have had the good fortune to travel to" } },
    { map: "eu", lat: 46.8, lon: 8.2, flag: "ch", image: "", video: "", fr: { title: "Suisse", desc: "Lieux dans lesquels j’ai eu la chance de voyager" }, en: { title: "Switzerland", desc: "Places I have had the good fortune to travel to" } },
    { map: "us", lat: 37.27, lon: -76.71, flag: "us", image: ["assets/William-1.jpg", "assets/William-2.jpg","assets/William-3.jpg"], video: "", fr: { title: "Williamsburg (Virginie)", desc: "Voyage aux États-Unis : dans l’université bien connue de Williamsburg" }, en: { title: "Williamsburg (Virginia)", desc: "A trip to the United States: at the well-known university in Williamsburg" } },
    { map: "us", lat: 38.9, lon: -77.04, flag: "us", image: ["assets/Washington-1.jpg", "assets/Washington-2.jpg","assets/Washington-3.jpg","assets/Washington-4.jpg","assets/Washington-5.jpg"], video: "", fr: { title: "Washington D.C.", desc: "Voyage aux États-Unis" }, en: { title: "Washington, D.C.", desc: "A trip to the United States" } },
    { map: "us", lat: 40.71, lon: -74.0, flag: "us", image: ["assets/NY-1.jpg", "assets/NY-2.jpg","assets/NY-3.jpg","assets/NY-4.jpg"], video: "", fr: { title: "New York", desc: "Voyage aux États-Unis" }, en: { title: "New York", desc: "A trip to the United States" } },
    { map: "ca", lat: 45.5, lon: -73.57, flag: "ca", image: "", video: "", fr: { title: "Canada", desc: "Projet de mobilité" }, en: { title: "Canada", desc: "Mobility project" } },
    { map: "eu", lat: 60.5, lon: 9.0, flag: "no", image: "", video: "", fr: { title: "Norvège", desc: "Projet de mobilité" }, en: { title: "Norway", desc: "Mobility project" } },
    { map: "eu", lat: 59.8, lon: 15.0, flag: "se", image: "", video: "", fr: { title: "Suède", desc: "Projet de mobilité" }, en: { title: "Sweden", desc: "Mobility project" } }
  ],
  skills: [
  "Python", "Fortran",
  { fr: "Mécanique des milieux continus", en: "Continuum mechanics" },
  { fr: "Mécanique des fluides", en: "Fluid mechanics" },
  { fr: "Thermodynamique", en: "Thermodynamics" },
  { fr: "Méthodes numériques", en: "Numerical methods" },
  { fr: "Probabilités et statistiques", en: "Probability and statistics" },
  { fr: "Mesures expérimentales", en: "Experimental measurements" },
  { fr: "Analyse de données", en: "Data analysis" }
],
  languages: [
    { fr: "Français – langue maternelle", en: "French – native" },
    { fr: "Anglais – capacité professionnelle fonctionnelle", en: "English – professional working proficiency" },
    { fr: "Espagnol – niveau de base", en: "Spanish – basic level" }
  ]
};
