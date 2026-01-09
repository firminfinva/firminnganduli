import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1 border border-border">
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-full px-3 py-1 h-7 text-xs font-medium transition-all ${
          language === "fr"
            ? "bg-primary text-primary-foreground hover:bg-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        }`}
        onClick={() => setLanguage("fr")}
      >
        FR
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-full px-3 py-1 h-7 text-xs font-medium transition-all ${
          language === "en"
            ? "bg-primary text-primary-foreground hover:bg-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
