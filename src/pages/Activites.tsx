import { Music, Palette, TreePine, Footprints, Sparkles, Heart } from "lucide-react";
import activiteMusique from "@/assets/activite-musique.jpg";
import CTABanner from "@/components/sections/CTABanner";

const activities = [
  { icon: Music, title: "Musique et rythme", description: "Chansons, comptines, instruments de percussion et danse pour développer le sens du rythme, la coordination et l'expression." },
  { icon: Palette, title: "Arts plastiques", description: "Peinture, dessin, modelage et bricolage pour stimuler la créativité, la motricité fine et l'expression personnelle." },
  { icon: TreePine, title: "Plein air et nature", description: "Sorties en forêt, jardinage, observation de la faune et jeux extérieurs pour développer une connexion à la nature." },
  { icon: Footprints, title: "Expression corporelle", description: "Yoga pour enfants, parcours moteurs, danse libre et jeux de mouvement pour le développement physique et l'estime de soi." },
  { icon: Sparkles, title: "Sciences et découvertes", description: "Expériences simples, observation, exploration sensorielle et projets thématiques pour nourrir la curiosité scientifique." },
  { icon: Heart, title: "Jeux coopératifs", description: "Activités de groupe qui développent le partage, l'entraide, la communication et les habiletés sociales." },
];

const Activites = () => {
  return (
    <>
      <section className="section-padding section-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-3 block">
                Activités & spécialistes
              </span>
              <h1 className="font-heading text-display text-foreground mb-6">
                Des expériences qui éveillent et inspirent
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                En plus de notre programme éducatif, nos enfants bénéficient d'une variété d'activités enrichissantes animées par des éducatrices spécialisées et des intervenants passionnés.
              </p>
            </div>
            <img
              src={activiteMusique}
              alt="Activité de musique avec les enfants"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-card rounded-xl p-6 border border-border hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <activity.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{activity.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="sand" headline="Offrez à votre enfant un monde de découvertes" subtext="Contactez-nous pour en savoir plus sur nos activités et programmes enrichis." />
    </>
  );
};

export default Activites;
