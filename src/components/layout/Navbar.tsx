import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = {
  ecole: {
    label: "Notre école",
    children: [
      { label: "Notre histoire", href: "/notre-histoire" },
      { label: "Notre espace", href: "/notre-espace" },
      { label: "Notre équipe", href: "/notre-equipe" },
      { label: "Activités", href: "/activites" },
    ],
  },
  programmes: {
    label: "Programmes",
    children: [
      { label: "Vue d'ensemble", href: "/programme-educatif" },
      { label: "Pouponnière (0–18 mois)", href: "/programme-educatif/pouponniere" },
      { label: "Tout-petits (18 mois–2 ans)", href: "/programme-educatif/tout-petits" },
      { label: "Les Explorateurs (2–3 ans)", href: "/programme-educatif/explorateurs" },
      { label: "Les Découvreurs (3–4 ans)", href: "/programme-educatif/decouvreurs" },
      { label: "Pré-maternelle (4–5 ans)", href: "/programme-educatif/pre-maternelle" },
    ],
  },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg md:text-xl font-heading font-bold text-primary leading-tight">
            Garderie La Petite École de Mirabel
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {Object.entries(navLinks).map(([key, group]) => (
            <div
              key={key}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-body font-semibold text-foreground hover:text-primary transition-colors">
                {group.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openDropdown === key && (
                <div className="absolute top-full left-0 bg-card rounded-lg shadow-lg border border-border py-2 min-w-[220px] animate-fade-in">
                  {group.children.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block px-4 py-2 text-sm font-body hover:bg-accent transition-colors ${
                        isActive(link.href) ? "text-primary font-semibold" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/nous-joindre"
            className={`px-3 py-2 text-sm font-body font-semibold transition-colors ${
              isActive("/nous-joindre") ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            Nous joindre
          </Link>
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a href="tel:4508182421" className="hidden md:flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            (450) 818-2421
          </a>
          <Link to="/nous-joindre/inscription">
            <Button className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold rounded-lg px-5">
              S'inscrire
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {Object.entries(navLinks).map(([key, group]) => (
              <div key={key}>
                <div className="px-3 py-2 text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.label}
                </div>
                {group.children.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-3 py-2.5 text-sm font-body rounded-md transition-colors ${
                      isActive(link.href) ? "bg-accent text-primary font-semibold" : "text-foreground hover:bg-accent"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/nous-joindre"
              className="block px-3 py-2.5 text-sm font-body font-semibold text-foreground hover:bg-accent rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Nous joindre
            </Link>
            <div className="pt-3">
              <Link to="/nous-joindre/inscription" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold rounded-lg">
                  S'inscrire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
