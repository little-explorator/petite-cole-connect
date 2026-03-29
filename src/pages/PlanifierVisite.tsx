import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

const PlanifierVisite = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Merci pour votre demande!</h1>
          <p className="font-body text-base text-muted-foreground mb-8">
            Nous avons bien reçu votre demande de visite. Un membre de notre équipe vous contactera dans les plus brefs délais pour confirmer votre rendez-vous.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-lg px-8">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-padding section-sand">
        <div className="container-narrow">
          <Link to="/nous-joindre" className="font-body text-sm text-primary hover:underline mb-4 inline-block">
            ← Nous joindre
          </Link>
          <h1 className="font-heading text-display text-foreground mb-4">
            Planifier une visite
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Remplissez le formulaire ci-dessous et nous communiquerons avec vous pour confirmer votre visite de notre garderie.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="nom" className="font-body font-semibold text-foreground">Nom complet *</Label>
              <Input id="nom" name="nom" required className="mt-1.5 rounded-lg" placeholder="Votre nom" />
            </div>
            <div>
              <Label htmlFor="courriel" className="font-body font-semibold text-foreground">Courriel *</Label>
              <Input id="courriel" name="courriel" type="email" required className="mt-1.5 rounded-lg" placeholder="votre@courriel.com" />
            </div>
            <div>
              <Label htmlFor="telephone" className="font-body font-semibold text-foreground">Téléphone *</Label>
              <Input id="telephone" name="telephone" type="tel" required className="mt-1.5 rounded-lg" placeholder="(450) 000-0000" />
            </div>
            <div>
              <Label htmlFor="date" className="font-body font-semibold text-foreground">Date préférée</Label>
              <Input id="date" name="date" type="date" className="mt-1.5 rounded-lg" />
            </div>
            <div>
              <Label htmlFor="message" className="font-body font-semibold text-foreground">Message</Label>
              <Textarea id="message" name="message" rows={4} className="mt-1.5 rounded-lg" placeholder="Informations supplémentaires..." />
            </div>
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <Input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-lg text-base"
            >
              {loading ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
            <p className="font-body text-xs text-muted-foreground text-center">
              Ou appelez-nous directement au <a href="tel:4508182421" className="text-primary hover:underline">(450) 818-2421</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default PlanifierVisite;
