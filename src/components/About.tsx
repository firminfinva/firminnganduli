import { Code2, Users, Lightbulb, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t("about.problemSolver"),
      description: t("about.problemSolverDesc")
    },
    {
      icon: Users,
      title: t("about.teamwork"),
      description: t("about.teamworkDesc")
    },
    {
      icon: Lightbulb,
      title: t("about.fastLearner"),
      description: t("about.fastLearnerDesc")
    },
    {
      icon: Globe,
      title: t("about.multilingual"),
      description: t("about.multilingualDesc")
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">{t("about.title")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("about.heading")} <span className="text-gradient">{t("about.headingHighlight")}</span>
            </h2>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.p1")} <span className="text-foreground font-medium">{t("about.p1Highlight")}</span> {t("about.p1End")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.p2")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.p3Start")} <span className="text-primary">{t("about.p3Highlight")}</span>{t("about.p3End")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-subtle border border-border text-center">
                <span className="text-4xl font-bold text-gradient">4+</span>
                <p className="text-muted-foreground mt-2">{t("about.yearsExp")}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-subtle border border-border text-center">
                <span className="text-4xl font-bold text-gradient">10+</span>
                <p className="text-muted-foreground mt-2">{t("about.projects")}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-subtle border border-border text-center">
                <span className="text-4xl font-bold text-gradient">3</span>
                <p className="text-muted-foreground mt-2">{t("about.languages")}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-subtle border border-border text-center">
                <span className="text-4xl font-bold text-gradient">∞</span>
                <p className="text-muted-foreground mt-2">{t("about.motivation")}</p>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
