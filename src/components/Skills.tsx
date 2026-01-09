import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.frontend"),
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "WordPress", level: 80 },
      ]
    },
    {
      title: t("skills.backend"),
      skills: [
        { name: "Django", level: 90 },
        { name: "Python", level: 90 },
        { name: "NestJS", level: 75 },
        { name: "PostgreSQL", level: 85 },
        { name: "Prisma", level: 80 },
      ]
    },
    {
      title: t("skills.designTools"),
      skills: [
        { name: "Figma", level: 85 },
        { name: "Wireframing", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "Asana/Trello", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">{t("skills.title")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("skills.heading")} <span className="text-gradient">{t("skills.headingHighlight")}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("skills.description")}
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">{t("skills.other")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['JavaScript', 'REST API', 'Database Design', 'UI/UX', 'Open Source', 'Agile/Scrum'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm border border-border hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
