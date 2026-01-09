import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t("edu.kadea"),
      institution: t("edu.kadeaInst"),
      period: t("edu.kadeaPeriod"),
      description: t("edu.kadeaDesc")
    },
    {
      degree: t("edu.kenyatta"),
      institution: t("edu.kenyattaInst"),
      period: t("edu.kenyattaPeriod"),
      description: t("edu.kenyattaDesc")
    },
    {
      degree: t("edu.bakanja"),
      institution: t("edu.bakanjaInst"),
      period: t("edu.bakanjaPeriod"),
      description: t("edu.bakanjaDesc")
    }
  ];

  const languages = [
    { name: t("edu.french"), level: t("edu.perfect"), percentage: 100 },
    { name: t("edu.english"), level: t("edu.perfect"), percentage: 100 },
    { name: t("edu.swahili"), level: t("edu.fluent"), percentage: 90 }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">{t("edu.title")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("edu.heading")} <span className="text-gradient">{t("edu.headingHighlight")}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                {t("edu.diplomasTitle")}
              </h3>
              
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="relative z-10">
                    <span className="text-sm text-primary font-mono">{edu.period}</span>
                    <h4 className="text-lg font-semibold text-foreground mt-2">{edu.degree}</h4>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-3">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-primary" />
                {t("edu.languagesTitle")}
              </h3>
              
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="space-y-6">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="text-sm text-primary">{lang.level}</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-4">{t("edu.certifications")}</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{t("edu.cert1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{t("edu.cert2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{t("edu.cert3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
