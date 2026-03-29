import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const Inscription = () => {
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
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Inscription reçue!</h1>
          <p className="font-body text-base text-muted-foreground mb-8">
            Merci d'avoir inscrit votre enfant sur notre liste d'attente. Nous communiquerons avec vous dès qu'une place sera disponible dans le groupe approprié.
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
            Inscription – Liste d'attente
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Remplissez le formulaire ci-dessous pour inscrire votre enfant sur notre liste d'attente. Nous communiquerons avec vous dès qu'une place sera disponible.
          </p>
          <div className="mt-4 bg-card rounded-lg p-4 border border-border">
            <p className="font-body text-sm text-foreground">
              💡 <strong>Garderie subventionnée</strong> — Tarif réduit fixé par le gouvernement du Québec. Aucun frais supplémentaire.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground">Informations de l'enfant</h2>
            <div>
              <Label htmlFor="nomEnfant" className="font-body font-semibold text-foreground">Nom complet de l'enfant *</Label>
              <Input id="nomEnfant" name="nomEnfant" required className="mt-1.5 rounded-lg" placeholder="Prénom et nom de l'enfant" />
            </div>
            <div>
              <Label htmlFor="dateNaissance" className="font-body font-semibold text-foreground">Date de naissance *</Label>
              <Input id="dateNaissance" name="dateNaissance" type="date" required className="mt-1.5 rounded-lg" />
            </div>
            <div>
              <Label className="font-body font-semibold text-foreground">Groupe d'âge souhaité *</Label>
              <Select name="programme" required>
                <SelectTrigger className="mt-1.5 rounded-lg">
                  <SelectValue placeholder="Sélectionnez un groupe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pouponniere">Pouponnière (0–18 mois)</SelectItem>
                  <SelectItem value="tout-petits">Tout-petits (18 mois–2 ans)</SelectItem>
                  <SelectItem value="explorateurs">Les Explorateurs (2–3 ans)</SelectItem>
                  <SelectItem value="decouvreurs">Les Découvreurs (3–4 ans)</SelectItem>
                  <SelectItem value="pre-maternelle">Pré-maternelle (4–5 ans)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="dateDebut" className="font-body font-semibold text-foreground">Date de début souhaitée *</Label>
              <Input id="dateDebut" name="dateDebut" type="date" required className="mt-1.5 rounded-lg" />
            </div>

            <div className="border-t border-border pt-5 mt-6">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">Informations du parent / tuteur</h2>
            </div>
            <div>
              <Label htmlFor="nomParent" className="font-body font-semibold text-foreground">Nom complet *</Label>
              <Input id="nomParent" name="nomParent" required className="mt-1.5 rounded-lg" placeholder="Votre nom" />
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
              <Label htmlFor="message" className="font-body font-semibold text-foreground">Message ou informations supplémentaires</Label>
              <Textarea id="message" name="message" rows={4} className="mt-1.5 rounded-lg" placeholder="Allergies, besoins particuliers, commentaires..." />
            </div>
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <Input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold rounded-lg text-base"
            >
              {loading ? "Envoi en cours..." : "Inscrire mon enfant"}
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

export default Inscription;
