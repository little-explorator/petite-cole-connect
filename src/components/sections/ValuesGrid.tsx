import { Heart, TreePine, Users, Sparkles, Shield, BookOpen } from "lucide-react";

const values = [
  { icon: Heart, title: "Bienveillance", description: "Chaque enfant est accueilli avec chaleur et respect, dans un climat de confiance." },
  { icon: TreePine, title: "Nature", description: "Notre cour boisée et notre parc naturel offrent un contact quotidien avec la nature." },
  { icon: Users, title: "Communauté", description: "Une grande famille où parents, éducatrices et enfants grandissent ensemble." },
  { icon: Sparkles, title: "Créativité", description: "Des ateliers d'arts, de musique et d'expression pour stimuler l'imagination." },
  { icon: Shield, title: "Sécurité", description: "Des espaces sécuritaires et un encadrement professionnel pour la tranquillité des parents." },
  { icon: BookOpen, title: "Éducation", description: "Un programme éducatif structuré qui prépare chaque enfant à son rythme." },
];

const ValuesGrid = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-3 block">
            Nos valeurs
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Ce qui nous guide au quotidien
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-sm transition-shadow duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{value.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
