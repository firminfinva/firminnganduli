import { Github, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="text-primary font-mono text-sm mb-4 block">{t("contact.title")}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("contact.heading")} <span className="text-gradient">{t("contact.headingHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            {t("contact.description")}
          </p>

          {/* Contact info */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t("contact.location")}</h3>
              <p className="text-muted-foreground">{t("hero.location")}</p>
            </div>
            
            <a 
              href="https://github.com/firminfinva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <Github className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
                GitHub
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">@firminfinva</p>
            </a>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-subtle border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t("contact.ready")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("contact.readyDesc")}
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="https://github.com/firminfinva" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {t("contact.viewGithub")}
              </a>
            </Button>
          </div>

          {/* References note */}
          <p className="mt-8 text-sm text-muted-foreground">
            {t("contact.references")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
