import programReadingImg from "@/assets/program-reading.jpg";

const MissionBlock = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-3 block">
              Notre mission
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Grandir avec confiance, apprendre avec plaisir
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              À la Garderie Éducative la Petite École de Mirabel, nous croyons que chaque enfant est unique et mérite un accompagnement adapté à son rythme. Notre équipe d'éducatrices qualifiées et passionnées offre un environnement où la curiosité, la créativité et le respect sont au cœur de chaque journée.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Garderie subventionnée francophone, nous accueillons 90 enfants de la pouponnière à la pré-maternelle dans des espaces lumineux et sécuritaires, avec un accès privilégié à la nature.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { number: "90", label: "Enfants accueillis" },
                { number: "0-5", label: "Ans" },
                { number: "5", label: "Groupes d'âge" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="font-body text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={programReadingImg}
              alt="Éducatrice lisant une histoire à un groupe d'enfants"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionBlock;
