import { TreePine, Sun, BookOpen, UtensilsCrossed, Shield, Flower } from "lucide-react";
import outdoorImg from "@/assets/outdoor-space.jpg";
import heroDaycare from "@/assets/hero-daycare.jpg";
import CTABanner from "@/components/sections/CTABanner";

const spaces = [
  { icon: TreePine, title: "Cour extérieure boisée", description: "Un vaste espace vert clôturé et sécuritaire avec des arbres matures, une structure de jeux et des zones ombragées pour jouer en toute saison." },
  { icon: Sun, title: "Accès au parc naturel", description: "Un parc boisé adjacent à notre propriété offre un terrain d'exploration unique pour les sorties nature et les activités en plein air." },
  { icon: BookOpen, title: "Coin lecture et détente", description: "Des espaces douillets et lumineux aménagés pour la lecture, la relaxation et les moments calmes de la journée." },
  { icon: UtensilsCrossed, title: "Cuisine sur place", description: "Nos repas sont préparés sur place avec des ingrédients frais et nutritifs, adaptés aux besoins de chaque groupe d'âge." },
  { icon: Shield, title: "Espaces sécuritaires", description: "Chaque salle est aménagée avec du mobilier adapté à la taille des enfants et répond aux normes de sécurité les plus strictes." },
  { icon: Flower, title: "Jardin pédagogique", description: "Les enfants cultivent fruits et légumes dans notre jardin, apprenant le cycle de la vie et la responsabilité environnementale." },
];

const NotreEspace = () => {
  return (
    <>
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0">
          <img src={outdoorImg} alt="Espace extérieur de la garderie" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent" />
        </div>
        <div className="relative container-wide px-4 lg:px-8">
          <div className="max-w-xl">
            <span className="font-body text-xs font-semibold tracking-wider uppercase text-sand mb-3 block">
              Notre espace
            </span>
            <h1 className="font-heading text-display text-card mb-4">
              Un environnement pensé pour grandir
            </h1>
            <p className="font-body text-base text-card/90 leading-relaxed">
              Nos installations offrent des espaces lumineux, sécuritaires et inspirants, avec un accès privilégié à la nature qui fait notre fierté.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaces.map((space) => (
              <div key={space.title} className="bg-card rounded-xl p-6 border border-border hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <space.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{space.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{space.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={outdoorImg}
              alt="Espace naturel boisé"
              className="rounded-xl w-full h-64 md:h-80 object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
            <img
              src={heroDaycare}
              alt="Aire de jeux extérieure"
              className="rounded-xl w-full h-64 md:h-80 object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default NotreEspace;
