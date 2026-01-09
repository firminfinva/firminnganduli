import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { experiences } from "@/data/experiences";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              {t("exp.title")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("exp.heading")}{" "}
              <span className="text-gradient">{t("exp.headingHighlight")}</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${index}`}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 shadow-glow z-10" />

                  {/* Content */}
                  <div
                    className={`flex-1 pl-8 md:pl-0 md:text-right ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.current && (
                          <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">
                            {t("exp.current")}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {t(exp.title)}
                      </h3>

                      <div
                        className={`flex items-center gap-4 mb-4 text-sm ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="flex items-center gap-1 text-primary">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {t(exp.period)}
                        </span>
                      </div>

                      <ul
                        className={`space-y-1 text-sm text-muted-foreground ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
