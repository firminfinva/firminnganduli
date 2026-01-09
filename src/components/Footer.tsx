import { Github, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 Firmin Nganduli.</span>
            <span className="hidden sm:inline">{t("footer.madeWith")}</span>
            <Heart className="w-4 h-4 text-primary hidden sm:inline" />
            <span className="hidden sm:inline">{t("footer.in")}</span>
          </div>
          
          <a 
            href="https://github.com/firminfinva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>@firminfinva</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
