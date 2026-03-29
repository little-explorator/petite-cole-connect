import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/sections/CTABanner";
import pouponniere from "@/assets/pouponniere.jpg";
import programReading from "@/assets/program-reading.jpg";
import explorateurs from "@/assets/explorateurs.jpg";
import preMaternelle from "@/assets/pre-maternelle.jpg";

interface ProgramData {
  title: string;
  ageRange: string;
  description: string;
  image: string;
  objectives: string[];
  domains: { title: string; items: string[] }[];
  dailyRoutine: string[];
}

const programsData: Record<string, ProgramData> = {
  pouponniere: {
    title: "Pouponnière",
    ageRange: "0 – 18 mois",
    description: "Notre pouponnière offre un environnement doux, sécuritaire et stimulant pour les tout-petits. Chaque bébé bénéficie d'une attention individualisée et d'un rythme adapté à ses besoins, dans un espace conçu pour éveiller ses sens en toute confiance.",
    image: pouponniere,
    objectives: [
      "Créer un lien d'attachement sécurisant avec l'éducatrice",
      "Stimuler l'éveil sensoriel à travers des activités adaptées",
      "Encourager la motricité globale et fine",
      "Favoriser le développement du langage par la parole et le chant",
      "Respecter le rythme individuel de chaque bébé",
    ],
    domains: [
      { title: "Développement physique", items: ["Motricité libre", "Jeux sensoriels", "Temps de jeu au sol", "Activités d'eau"] },
      { title: "Développement cognitif", items: ["Exploration d'objets", "Cause et effet", "Permanence de l'objet", "Stimulation visuelle"] },
      { title: "Développement affectif", items: ["Routines sécurisantes", "Contact physique chaleureux", "Réponse aux besoins individuels"] },
    ],
    dailyRoutine: ["Accueil personnalisé", "Collation du matin", "Activités d'éveil", "Sieste", "Dîner", "Jeux libres", "Activités dirigées", "Collation de l'après-midi", "Jeux extérieurs"],
  },
  "tout-petits": {
    title: "Tout-petits",
    ageRange: "18 mois – 2 ans",
    description: "Le groupe des tout-petits accompagne les premiers pas vers l'autonomie. Dans un environnement sécuritaire et stimulant, les enfants développent leur motricité, leur langage et leurs premières habiletés sociales.",
    image: programReading,
    objectives: [
      "Soutenir l'acquisition de la marche et de la motricité globale",
      "Enrichir le vocabulaire et les premières phrases",
      "Initier aux premières interactions sociales",
      "Encourager l'expression créative à travers l'art et la musique",
      "Développer l'autonomie dans les gestes du quotidien",
    ],
    domains: [
      { title: "Développement physique", items: ["Parcours moteurs", "Danse et mouvement", "Jeux de ballon", "Manipulation fine"] },
      { title: "Développement langagier", items: ["Comptines et chansons", "Lecture interactive", "Imagiers", "Jeux de communication"] },
      { title: "Développement social", items: ["Jeux parallèles", "Partage guidé", "Routines de groupe", "Expression des émotions"] },
    ],
    dailyRoutine: ["Accueil et jeux libres", "Rassemblement du matin", "Collation", "Activités dirigées", "Jeux extérieurs", "Dîner", "Sieste", "Collation", "Ateliers créatifs", "Jeux libres"],
  },
  explorateurs: {
    title: "Les Explorateurs",
    ageRange: "2 – 3 ans",
    description: "L'âge des grandes découvertes ! Les Explorateurs vivent une foule d'expériences enrichissantes qui nourrissent leur curiosité insatiable, développent leur créativité et renforcent leurs habiletés sociales.",
    image: explorateurs,
    objectives: [
      "Encourager la curiosité et l'esprit de découverte",
      "Développer la motricité fine à travers les arts plastiques",
      "Favoriser le jeu symbolique et l'imagination",
      "Renforcer les habiletés sociales et le partage",
      "Initier aux concepts de base (couleurs, formes, chiffres)",
    ],
    domains: [
      { title: "Développement physique", items: ["Jeux extérieurs structurés", "Parcours d'obstacles", "Yoga pour enfants", "Activités de plein air"] },
      { title: "Développement cognitif", items: ["Tri et classification", "Casse-têtes", "Expériences scientifiques simples", "Jeux de construction"] },
      { title: "Développement créatif", items: ["Peinture et dessin", "Modelage", "Musique et rythme", "Théâtre et déguisements"] },
    ],
    dailyRoutine: ["Accueil et jeux libres", "Rassemblement", "Collation", "Ateliers en rotation", "Jeux extérieurs", "Dîner", "Repos", "Collation", "Activités créatives", "Jeux libres"],
  },
  decouvreurs: {
    title: "Les Découvreurs",
    ageRange: "3 – 4 ans",
    description: "Le monde est un terrain d'aventure pour les Découvreurs. Ce programme stimule leur soif d'apprendre à travers les sciences, la nature, l'expression corporelle et un développement langagier enrichi.",
    image: explorateurs,
    objectives: [
      "Nourrir la curiosité scientifique et l'esprit critique",
      "Enrichir le vocabulaire et la capacité narrative",
      "Développer la conscience de soi et des autres",
      "Renforcer la motricité globale et fine",
      "Initier aux concepts de pré-mathématiques",
    ],
    domains: [
      { title: "Sciences et nature", items: ["Observation de la nature", "Jardinage", "Expériences simples", "Sorties en forêt"] },
      { title: "Langage et littératie", items: ["Histoires élaborées", "Jeux de rimes", "Premières lettres", "Expression orale structurée"] },
      { title: "Arts et expression", items: ["Arts plastiques variés", "Danse créative", "Musique d'ensemble", "Expression corporelle"] },
    ],
    dailyRoutine: ["Accueil et causerie", "Rassemblement thématique", "Collation", "Ateliers en sous-groupes", "Jeux extérieurs / nature", "Dîner", "Repos / activité calme", "Collation", "Projets créatifs", "Jeux libres"],
  },
  "pre-maternelle": {
    title: "Pré-maternelle",
    ageRange: "4 – 5 ans",
    description: "Notre programme de pré-maternelle prépare les enfants à franchir avec confiance le seuil de l'école. Autonomie, pré-écriture, éveil scientifique et habiletés sociales sont au cœur d'un programme structuré et ludique.",
    image: preMaternelle,
    objectives: [
      "Préparer l'entrée à la maternelle avec confiance",
      "Développer la pré-écriture et la pré-lecture",
      "Renforcer l'autonomie dans les gestes quotidiens",
      "Consolider les habiletés sociales et la résolution de conflits",
      "Initier aux mathématiques, aux sciences et à la technologie",
    ],
    domains: [
      { title: "Littératie et communication", items: ["Reconnaissance des lettres", "Écriture du prénom", "Histoires complexes", "Présentation orale"] },
      { title: "Numératie et logique", items: ["Comptage et dénombrement", "Formes géométriques", "Séquences et patterns", "Résolution de problèmes"] },
      { title: "Autonomie et social", items: ["Responsabilités de classe", "Gestion des émotions", "Travail en équipe", "Préparation à la routine scolaire"] },
    ],
    dailyRoutine: ["Accueil et activités autonomes", "Rassemblement et calendrier", "Collation", "Ateliers d'apprentissage", "Éducation physique / plein air", "Dîner", "Repos / lecture", "Collation", "Projets thématiques", "Jeux libres et départ"],
  },
};

const ProgrammeDetail = () => {
  const { slug } = useParams();
  const program = programsData[slug || ""];

  if (!program) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Programme non trouvé</h1>
        <Link to="/programme-educatif" className="font-body text-primary hover:underline">
          ← Retour aux programmes
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative container-wide px-4 lg:px-8">
          <div className="max-w-xl">
            <Link to="/programme-educatif" className="font-body text-sm text-card/80 hover:text-card mb-4 inline-block">
              ← Tous les programmes
            </Link>
            <span className="font-body text-sm font-semibold text-sand uppercase tracking-wider block mb-2">
              {program.ageRange}
            </span>
            <h1 className="font-heading text-display text-card mb-4">{program.title}</h1>
            <p className="font-body text-base text-card/90 leading-relaxed">{program.description}</p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Objectifs d'apprentissage
          </h2>
          <ul className="space-y-3 max-w-2xl">
            {program.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-bold font-body mt-0.5">
                  {i + 1}
                </span>
                <span className="font-body text-base text-foreground">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Domains */}
      <section className="section-padding section-sand">
        <div className="container-wide">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Domaines de développement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {program.domains.map((domain) => (
              <div key={domain.title} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">{domain.title}</h3>
                <ul className="space-y-2">
                  {domain.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Routine quotidienne
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {program.dailyRoutine.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-sand/50 rounded-lg p-3">
                <span className="font-body text-xs font-bold text-secondary">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default ProgrammeDetail;
