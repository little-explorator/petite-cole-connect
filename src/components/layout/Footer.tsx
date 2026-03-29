import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Col 1 - About */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">La Petite École de Mirabel</h3>
            <p className="font-body text-sm leading-relaxed opacity-80 mb-4">
              Garderie subventionnée francophone accueillant 90 enfants de 0 à 5 ans dans un environnement chaleureux et stimulant au cœur des Laurentides.
            </p>
            <p className="font-body text-xs opacity-60">Permis du ministère de la Famille</p>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: "Accueil", href: "/" },
                { label: "Notre histoire", href: "/notre-histoire" },
                { label: "Programmes", href: "/programme-educatif" },
                { label: "Notre équipe", href: "/notre-equipe" },
                { label: "Notre espace", href: "/notre-espace" },
                { label: "Activités", href: "/activites" },
                { label: "Nous joindre", href: "/nous-joindre" },
                { label: "S'inscrire", href: "/nous-joindre/inscription" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Coordonnées</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 opacity-60" />
                <span className="opacity-80">18590, rue Charles<br />Mirabel, QC J7J 1H8</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 opacity-60" />
                <a href="tel:4508182421" className="opacity-80 hover:opacity-100 transition-opacity">(450) 818-2421</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 opacity-60" />
                <a href="mailto:garderie.petiteecole@videotron.ca" className="opacity-80 hover:opacity-100 transition-opacity">
                  garderie.petiteecole@videotron.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 opacity-60" />
                <span className="opacity-80">Lundi au vendredi<br />7 h 00 – 18 h 00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/20 text-center">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Garderie Éducative la Petite École de Mirabel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
