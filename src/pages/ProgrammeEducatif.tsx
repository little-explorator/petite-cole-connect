import { Link } from "react-router-dom";
import pouponniere from "@/assets/pouponniere.jpg";
import programReading from "@/assets/program-reading.jpg";
import explorateurs from "@/assets/explorateurs.jpg";
import preMaternelle from "@/assets/pre-maternelle.jpg";
import CTABanner from "@/components/sections/CTABanner";

const programs = [
  {
    title: "Pouponnière",
    ageRange: "0 – 18 mois",
    description: "Un cocon de douceur et de sécurité pour les premiers mois de vie, où chaque bébé reçoit une attention individualisée.",
    href: "/programme-educatif/pouponniere",
    image: pouponniere,
  },
  {
    title: "Tout-petits",
    ageRange: "18 mois – 2 ans",
    description: "L'éveil des sens et de la motricité dans un environnement stimulant et adapté aux premiers pas de l'autonomie.",
    href: "/programme-educatif/tout-petits",
    image: programReading,
  },
  {
    title: "Les Explorateurs",
    ageRange: "2 – 3 ans",
    description: "La curiosité à son apogée ! Jeux de rôle, arts plastiques et premières amitiés dans un cadre encourageant.",
    href: "/programme-educatif/explorateurs",
    image: explorateurs,
  },
  {
    title: "Les Découvreurs",
    ageRange: "3 – 4 ans",
    description: "Le monde est un terrain d'aventure : sciences, nature, expression corporelle et développement du langage.",
    href: "/programme-educatif/decouvreurs",
    image: explorateurs,
  },
  {
    title: "Pré-maternelle",
    ageRange: "4 – 5 ans",
    description: "Préparer l'entrée à l'école avec confiance : pré-écriture, pré-mathématiques, autonomie et habiletés sociales.",
    href: "/programme-educatif/pre-maternelle",
    image: preMaternelle,
  },
];

const ProgrammeEducatif = () => {
  return (
    <>
      <section className="section-padding section-sand">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-3 block">
              Programme éducatif
            </span>
            <h1 className="font-heading text-display text-foreground mb-6">
              Un programme adapté à chaque étape du développement
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Notre programme éducatif est conçu pour accompagner chaque enfant dans son développement global — physique, cognitif, langagier, social et affectif — à travers le jeu, la découverte et des activités stimulantes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.title}
                to={program.href}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-border"
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
                    Découvrir ce programme →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="sand" headline="Quelle place pour votre enfant?" subtext="Contactez-nous pour en savoir plus sur nos programmes et les places disponibles." />
    </>
  );
};

export default ProgrammeEducatif;
