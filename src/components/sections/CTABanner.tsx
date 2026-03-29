import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  variant?: "forest" | "sand";
}

const CTABanner = ({
  headline = "Prêt à découvrir notre garderie?",
  subtext = "Planifiez une visite pour rencontrer notre équipe et découvrir nos espaces chaleureux et sécuritaires.",
  variant = "forest",
}: CTABannerProps) => {
  const isForest = variant === "forest";

  return (
    <section className={`section-padding ${isForest ? "section-forest" : "section-sand"}`}>
      <div className="container-narrow text-center">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${isForest ? "text-primary-foreground" : "text-foreground"}`}>
          {headline}
        </h2>
        <p className={`font-body text-base mb-8 max-w-xl mx-auto ${isForest ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/nous-joindre/planifier-une-visite">
            <Button
              size="lg"
              className={`font-body font-semibold rounded-lg px-8 text-base w-full sm:w-auto ${
                isForest
                  ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
            >
              Planifier une visite
            </Button>
          </Link>
          <Link to="/nous-joindre/inscription">
            <Button
              size="lg"
              variant="outline"
              className={`font-body font-semibold rounded-lg px-8 text-base w-full sm:w-auto ${
                isForest
                  ? "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                  : "border-foreground/30 text-foreground hover:bg-foreground/5"
              }`}
            >
              S'inscrire sur la liste d'attente
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
