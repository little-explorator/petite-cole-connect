import { Link } from "react-router-dom";
import pouponniere from "@/assets/pouponniere.jpg";
import explorateurs from "@/assets/explorateurs.jpg";
import preMaternelle from "@/assets/pre-maternelle.jpg";

const programs = [
  {
    title: "Pouponnière",
    ageRange: "0 – 18 mois",
    description: "Un cocon de douceur où les tout-petits explorent le monde à travers leurs sens, entourés d'affection et de sécurité.",
    href: "/programme-educatif/pouponniere",
    image: pouponniere,
  },
  {
    title: "Les Explorateurs",
    ageRange: "2 – 3 ans",
    description: "L'âge des grandes découvertes ! Motricité, langage et socialisation s'épanouissent à travers le jeu libre et les ateliers créatifs.",
    href: "/programme-educatif/explorateurs",
    image: explorateurs,
  },
  {
    title: "Pré-maternelle",
    ageRange: "4 – 5 ans",
    description: "Préparer l'entrée à l'école avec confiance : autonomie, pré-écriture, éveil scientifique et habiletés sociales.",
    href: "/programme-educatif/pre-maternelle",
    image: preMaternelle,
  },
];

const ProgramHighlights = () => {
  return (
    <section className="section-padding section-sand">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-3 block">
            Nos programmes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Un programme adapté à chaque étape
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            De la pouponnière à la pré-maternelle, nous accompagnons votre enfant dans son développement global avec des activités stimulantes et adaptées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.title}
              to={program.href}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={`Programme ${program.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6">
                <span className="font-body text-xs font-semibold text-secondary uppercase tracking-wider">
                  {program.ageRange}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2">
                  {program.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                <span className="inline-block mt-4 font-body text-sm font-semibold text-primary group-hover:underline">
                  En savoir plus →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/programme-educatif"
            className="font-body text-sm font-semibold text-primary hover:underline"
          >
            Voir tous les programmes →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
