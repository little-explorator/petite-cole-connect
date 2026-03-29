import outdoorImg from "@/assets/outdoor-space.jpg";
import programReadingImg from "@/assets/program-reading.jpg";

const NotreHistoire = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 section-sand">
        <div className="container-wide px-4 lg:px-8">
          <div className="max-w-2xl">
            <span className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-3 block">
              Notre histoire
            </span>
            <h1 className="font-heading text-display text-foreground mb-6">
              Une passion pour l'enfance depuis le premier jour
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              La Garderie Éducative la Petite École de Mirabel est née d'un rêve simple : créer un milieu de vie où chaque enfant se sent aimé, en sécurité et libre d'explorer le monde à son rythme.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Notre philosophie éducative
              </h2>
              <div className="font-body text-base text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Nous croyons fermement que l'enfant apprend par le jeu, la découverte et les interactions positives. Notre approche éducative s'inspire des meilleures pratiques en petite enfance, en mettant l'accent sur le développement global de chaque enfant.
                </p>
                <p>
                  Au cœur de notre démarche se trouvent le respect du rythme individuel, la valorisation de la créativité et l'importance du lien d'attachement entre l'éducatrice et l'enfant.
                </p>
                <p>
                  Notre emplacement privilégié à Mirabel nous offre un accès unique à la nature — notre cour extérieure boisée, notre parc naturel et nos espaces verts sont des prolongements de nos salles de classe, où les enfants développent leur curiosité pour le monde qui les entoure.
                </p>
              </div>
            </div>
            <img
              src={outdoorImg}
              alt="Espace extérieur boisé de la garderie"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* Values detail */}
      <section className="section-padding section-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src={programReadingImg}
              alt="Activité de lecture en groupe"
              className="rounded-xl w-full h-auto object-cover shadow-lg order-2 lg:order-1"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Au service de la communauté des Laurentides
              </h2>
              <div className="font-body text-base text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Fièrement située à Mirabel, notre garderie subventionnée dessert les familles de Saint-Janvier, Blainville, Sainte-Thérèse, Boisbriand et Saint-Jérôme. Nous sommes profondément enracinés dans notre communauté.
                </p>
                <p>
                  En tant que garderie subventionnée par le ministère de la Famille, nous offrons un tarif réduit qui rend notre programme éducatif de qualité accessible à toutes les familles, sans compromis sur l'excellence de nos services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotreHistoire;
