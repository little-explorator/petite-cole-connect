import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const NousJoindre = () => {
  return (
    <>
      <section className="section-padding section-sand">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-3 block">
              Nous joindre
            </span>
            <h1 className="font-heading text-display text-foreground mb-6">
              Nous sommes là pour vous
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              N'hésitez pas à nous contacter pour toute question ou pour planifier une visite de notre garderie. Nous serons heureux de vous accueillir!
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">Adresse</h3>
                    <p className="font-body text-sm text-muted-foreground">18590, rue Charles<br />Mirabel, QC J7J 1H8</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">Téléphone</h3>
                    <a href="tel:4508182421" className="font-body text-sm text-primary hover:underline">(450) 818-2421</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">Courriel</h3>
                    <a href="mailto:garderie.petiteecole@videotron.ca" className="font-body text-sm text-primary hover:underline">
                      garderie.petiteecole@videotron.ca
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">Heures d'ouverture</h3>
                    <p className="font-body text-sm text-muted-foreground">Lundi au vendredi : 7 h 00 – 18 h 00</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">Fermé les jours fériés et deux semaines durant les Fêtes</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/nous-joindre/planifier-une-visite">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-lg px-6 w-full sm:w-auto">
                    Planifier une visite
                  </Button>
                </Link>
                <Link to="/nous-joindre/inscription">
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-body font-semibold rounded-lg px-6 w-full sm:w-auto">
                    S'inscrire sur la liste d'attente
                  </Button>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-border h-[400px] lg:h-auto">
              <iframe
                title="Emplacement de la Garderie La Petite École de Mirabel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5!2d-74.0!3d45.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s18590+Rue+Charles%2C+Mirabel%2C+QC+J7J+1H8!5e0!3m2!1sfr!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NousJoindre;
