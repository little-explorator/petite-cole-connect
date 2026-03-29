import educator1 from "@/assets/educator-1.jpg";
import educator2 from "@/assets/educator-2.jpg";
import CTABanner from "@/components/sections/CTABanner";

const team = [
  { name: "Marie-Claude Tremblay", role: "Directrice", bio: "Passionnée par l'éducation à la petite enfance depuis plus de 20 ans, Marie-Claude veille au bien-être de chaque enfant et de chaque membre de l'équipe.", photo: educator1 },
  { name: "Sophie Leblanc", role: "Éducatrice – Pouponnière", bio: "Douce et attentionnée, Sophie crée un cocon sécurisant pour les tout-petits avec une approche personnalisée pour chaque bébé.", photo: educator2 },
  { name: "Isabelle Gagnon", role: "Éducatrice – Tout-petits", bio: "Créative et dynamique, Isabelle transforme chaque moment en occasion d'apprentissage à travers le jeu et la musique.", photo: educator1 },
  { name: "Julie Côté", role: "Éducatrice – Explorateurs", bio: "Julie accompagne les enfants dans leurs grandes découvertes avec patience, humour et une passion contagieuse pour les arts.", photo: educator2 },
  { name: "Caroline Roy", role: "Éducatrice – Découvreurs", bio: "Amoureuse de la nature, Caroline initie les enfants aux sciences et à l'environnement à travers des activités en plein air.", photo: educator1 },
  { name: "Émilie Lavoie", role: "Éducatrice – Pré-maternelle", bio: "Structurée et bienveillante, Émilie prépare les enfants à l'école avec enthousiasme et un programme riche en apprentissages.", photo: educator2 },
];

const NotreEquipe = () => {
  return (
    <>
      <section className="section-padding section-sand">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-3 block">
              Notre équipe
            </span>
            <h1 className="font-heading text-display text-foreground mb-6">
              Des éducatrices passionnées et qualifiées
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Notre équipe d'éducatrices dévouées accompagne chaque enfant avec bienveillance, professionnalisme et un amour sincère pour la petite enfance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                  <span className="font-body text-sm font-semibold text-secondary">{member.role}</span>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="sand" />
    </>
  );
};

export default NotreEquipe;
