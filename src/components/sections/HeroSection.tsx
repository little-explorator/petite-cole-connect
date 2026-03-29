import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-daycare.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Enfants jouant dans la cour extérieure de la garderie La Petite École de Mirabel"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-wide px-4 lg:px-8 py-20">
        <div className="max-w-xl">
          <span className="inline-block font-body text-sm font-semibold tracking-wider uppercase text-sand mb-4">
            Garderie subventionnée · Mirabel
          </span>
          <h1 className="font-heading text-display md:text-display-lg text-card mb-6">
            Un milieu de vie chaleureux où chaque enfant s'épanouit
          </h1>
          <p className="font-body text-base md:text-lg text-card/90 mb-8 leading-relaxed max-w-md">
            Depuis notre cour boisée jusqu'à nos salles lumineuses, nous accompagnons 90 enfants de 0 à 5 ans avec bienveillance et passion au cœur des Laurentides.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/nous-joindre/planifier-une-visite">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold rounded-lg px-8 text-base w-full sm:w-auto">
                Planifier une visite
              </Button>
            </Link>
            <Link to="/programme-educatif">
              <Button size="lg" variant="outline" className="border-card/50 text-card hover:bg-card/10 font-body font-semibold rounded-lg px-8 text-base w-full sm:w-auto">
                Nos programmes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
