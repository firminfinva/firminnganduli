import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "nav.contactMe": "Contactez-moi",
    
    // Hero
    "hero.available": "Disponible pour de nouvelles opportunités",
    "hero.role": "Développeur Full Stack",
    "hero.location": "Goma, RD Congo",
    "hero.description": "4+ ans d'expérience dans la création de solutions web innovantes. Passionné par le",
    "hero.problemSolving": "problem-solving",
    "hero.descriptionEnd": "et la réalisation des projets ambitieux.",
    "hero.contactBtn": "Me Contacter",
    "hero.techStack": "Technologies principales",
    
    // About
    "about.title": "À PROPOS",
    "about.heading": "Développeur passionné par",
    "about.headingHighlight": "l'innovation",
    "about.p1": "Diplômé en",
    "about.p1Highlight": "Mathématiques et Informatique",
    "about.p1End": "(BAC+5) de Kenyatta University à Nairobi, je combine une solide formation académique avec une expérience pratique dans le développement web.",
    "about.p2": "Je développe des sites Web pour des organisations et des entreprises locales, transformant les idées de mes clients en solutions numériques performantes. Ma capacité à travailler sous pression tout en maintenant une qualité exceptionnelle est au cœur de mon approche professionnelle.",
    "about.p3Start": "Contributeur actif à des projets",
    "about.p3Highlight": "open source",
    "about.p3End": ", notamment sur les projets techniques Wikimedia, je crois fermement au partage des connaissances et à la collaboration.",
    "about.yearsExp": "Années d'expérience",
    "about.projects": "Projets réalisés",
    "about.languages": "Langues parlées",
    "about.motivation": "Motivation",
    "about.problemSolver": "Problem-Solver",
    "about.problemSolverDesc": "Capacité de résoudre des problèmes complexes avec des solutions logiques et efficaces",
    "about.teamwork": "Travail d'équipe",
    "about.teamworkDesc": "Autonome avec une excellente capacité d'écoute et respect de la diversité",
    "about.fastLearner": "Apprentissage rapide",
    "about.fastLearnerDesc": "Capacité de maîtriser les nouveaux outils informatiques en temps record",
    "about.multilingual": "Multilingue",
    "about.multilingualDesc": "Parfaite maîtrise du Français, Anglais et Swahili",
    
    // Skills
    "skills.title": "COMPÉTENCES",
    "skills.heading": "Mon",
    "skills.headingHighlight": "arsenal technique",
    "skills.description": "Un ensemble complet de technologies pour créer des applications web modernes et performantes",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.designTools": "Design & Outils",
    "skills.other": "Autres compétences",
    
    // Experience
    "exp.title": "EXPÉRIENCE",
    "exp.heading": "Mon",
    "exp.headingHighlight": "parcours professionnel",
    "exp.current": "Actuel",
    "exp.tantorTitle": "Développeur Backend & Concepteur BDD",
    "exp.tantorPeriod": "Septembre 2025",
    "exp.tantorDesc1": "Création du backend avec NestJS",
    "exp.tantorDesc2": "Conception et design de la base de données",
    "exp.tantorDesc3": "Modélisation des données",
    "exp.kaliTitle": "Facilitateur de Formation",
    "exp.kaliPeriod": "Sept 2024 - Jan 2025",
    "exp.kaliDesc1": "Formation des débutants à la programmation",
    "exp.kaliDesc2": "Accompagnement à la contribution open source",
    "exp.kaliDesc3": "Projets Wikimedia et logiciels open source",
    "exp.chickzoneTitle": "Développeur Full Stack",
    "exp.chickzonePeriod": "Août - Oct 2024",
    "exp.chickzoneDesc1": "Administration base de données (Django, PostgreSQL)",
    "exp.chickzoneDesc2": "Design frontend et marketplace",
    "exp.chickzoneDesc3": "Maintenance et mises à jour logicielles",
    "exp.hngTitle": "Stagiaire Développeur",
    "exp.hngPeriod": "Juil - Août 2024",
    "exp.hngDesc1": "Programme à distance basé sur des projets",
    "exp.hngDesc2": "Acquisition d'expérience pratique en tech",
    "exp.rcoTitle": "Développeur Full Stack",
    "exp.rcoPeriod": "Mars 2022 - Mars 2023",
    "exp.rcoDesc1": "Administration base de données (Django, PostgreSQL)",
    "exp.rcoDesc2": "Design frontend",
    "exp.rcoDesc3": "Maintenance et mises à jour",
    "exp.detofaTitle": "Fondateur & Développeur",
    "exp.detofaPeriod": "Mars 2021 - Fév 2022",
    "exp.detofaDesc1": "CEO et Directeur Général",
    "exp.detofaDesc2": "Développement web complet",
    "exp.detofaDesc3": "Gestion de base de données",
    "exp.girenadTitle": "Développeur Full Stack",
    "exp.girenadPeriod": "Mars 2020 - Présent",
    "exp.girenadDesc1": "Outils numériques de suivi et cartographie",
    "exp.girenadDesc2": "Plateformes collaboratives",
    "exp.girenadDesc3": "Campagnes de sensibilisation en ligne",
    
    // Education
    "edu.title": "FORMATION",
    "edu.heading": "Mon",
    "edu.headingHighlight": "parcours académique",
    "edu.diplomasTitle": "Diplômes & Formations",
    "edu.languagesTitle": "Langues",
    "edu.kadea": "Formation en Développement",
    "edu.kadeaInst": "Kadea Académie",
    "edu.kadeaPeriod": "Juin 2023 - Juin 2024",
    "edu.kadeaDesc": "Formation intensive en développement logiciel",
    "edu.kenyatta": "Licence en Mathématiques & Informatique",
    "edu.kenyattaInst": "Kenyatta University, Nairobi",
    "edu.kenyattaPeriod": "2016 - 2021",
    "edu.kenyattaDesc": "Option Statistique (BAC+5)",
    "edu.bakanja": "Diplôme d'État",
    "edu.bakanjaInst": "Institut Isidore Bakanja",
    "edu.bakanjaPeriod": "2008 - 2014",
    "edu.bakanjaDesc": "Section Scientifique Bio-Chimie",
    "edu.french": "Français",
    "edu.english": "Anglais",
    "edu.swahili": "Kiswahili",
    "edu.perfect": "Parfait",
    "edu.fluent": "Courant",
    "edu.certifications": "Certifications & Accomplissements",
    "edu.cert1": "Contributeur Open Source - Wikimedia",
    "edu.cert2": "HNG Internship Complété",
    "edu.cert3": "Formation Kadea Académie",
    
    // Contact
    "contact.title": "CONTACT",
    "contact.heading": "Travaillons",
    "contact.headingHighlight": "ensemble",
    "contact.description": "Vous avez un projet en tête ? Je suis disponible pour discuter de vos idées et les transformer en réalité.",
    "contact.location": "Localisation",
    "contact.ready": "Prêt à démarrer votre projet ?",
    "contact.readyDesc": "Contactez-moi via mes références professionnelles ou directement sur GitHub",
    "contact.viewGithub": "Voir mon GitHub",
    "contact.references": "Références disponibles sur demande",
    
    // Footer
    "footer.madeWith": "Fait avec",
    "footer.in": "à Goma",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.contactMe": "Contact Me",
    
    // Hero
    "hero.available": "Available for new opportunities",
    "hero.role": "Full Stack Developer",
    "hero.location": "Goma, DR Congo",
    "hero.description": "4+ years of experience creating innovative web solutions. Passionate about",
    "hero.problemSolving": "problem-solving",
    "hero.descriptionEnd": "and delivering ambitious projects.",
    "hero.contactBtn": "Contact Me",
    "hero.techStack": "Main Technologies",
    
    // About
    "about.title": "ABOUT",
    "about.heading": "Developer passionate about",
    "about.headingHighlight": "innovation",
    "about.p1": "Graduate in",
    "about.p1Highlight": "Mathematics and Computer Science",
    "about.p1End": "(Master's degree) from Kenyatta University in Nairobi, I combine a solid academic background with practical experience in web development.",
    "about.p2": "I develop websites for local organizations and businesses, transforming my clients' ideas into high-performing digital solutions. My ability to work under pressure while maintaining exceptional quality is at the heart of my professional approach.",
    "about.p3Start": "Active contributor to",
    "about.p3Highlight": "open source",
    "about.p3End": "projects, particularly on Wikimedia technical projects, I firmly believe in knowledge sharing and collaboration.",
    "about.yearsExp": "Years of experience",
    "about.projects": "Completed projects",
    "about.languages": "Languages spoken",
    "about.motivation": "Motivation",
    "about.problemSolver": "Problem-Solver",
    "about.problemSolverDesc": "Ability to solve complex problems with logical and effective solutions",
    "about.teamwork": "Teamwork",
    "about.teamworkDesc": "Self-sufficient with excellent listening skills and respect for diversity",
    "about.fastLearner": "Fast Learner",
    "about.fastLearnerDesc": "Ability to master new IT tools in record time",
    "about.multilingual": "Multilingual",
    "about.multilingualDesc": "Perfect command of French, English and Swahili",
    
    // Skills
    "skills.title": "SKILLS",
    "skills.heading": "My",
    "skills.headingHighlight": "technical arsenal",
    "skills.description": "A complete set of technologies to create modern and high-performing web applications",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.designTools": "Design & Tools",
    "skills.other": "Other skills",
    
    // Experience
    "exp.title": "EXPERIENCE",
    "exp.heading": "My",
    "exp.headingHighlight": "professional journey",
    "exp.current": "Current",
    "exp.tantorTitle": "Backend Developer & Database Designer",
    "exp.tantorPeriod": "September 2025",
    "exp.tantorDesc1": "Backend development with NestJS",
    "exp.tantorDesc2": "Database design and architecture",
    "exp.tantorDesc3": "Data modeling",
    "exp.kaliTitle": "Training Facilitator",
    "exp.kaliPeriod": "Sept 2024 - Jan 2025",
    "exp.kaliDesc1": "Training beginners in programming",
    "exp.kaliDesc2": "Open source contribution mentoring",
    "exp.kaliDesc3": "Wikimedia and open source projects",
    "exp.chickzoneTitle": "Full Stack Developer",
    "exp.chickzonePeriod": "Aug - Oct 2024",
    "exp.chickzoneDesc1": "Database administration (Django, PostgreSQL)",
    "exp.chickzoneDesc2": "Frontend design and marketplace",
    "exp.chickzoneDesc3": "Maintenance and software updates",
    "exp.hngTitle": "Developer Intern",
    "exp.hngPeriod": "Jul - Aug 2024",
    "exp.hngDesc1": "Remote project-based program",
    "exp.hngDesc2": "Practical tech experience acquisition",
    "exp.rcoTitle": "Full Stack Developer",
    "exp.rcoPeriod": "Mar 2022 - Mar 2023",
    "exp.rcoDesc1": "Database administration (Django, PostgreSQL)",
    "exp.rcoDesc2": "Frontend design",
    "exp.rcoDesc3": "Maintenance and updates",
    "exp.detofaTitle": "Founder & Developer",
    "exp.detofaPeriod": "Mar 2021 - Feb 2022",
    "exp.detofaDesc1": "CEO and Managing Director",
    "exp.detofaDesc2": "Full web development",
    "exp.detofaDesc3": "Database management",
    "exp.girenadTitle": "Full Stack Developer",
    "exp.girenadPeriod": "Mar 2020 - Present",
    "exp.girenadDesc1": "Digital tracking and mapping tools",
    "exp.girenadDesc2": "Collaborative platforms",
    "exp.girenadDesc3": "Online awareness campaigns",
    
    // Education
    "edu.title": "EDUCATION",
    "edu.heading": "My",
    "edu.headingHighlight": "academic journey",
    "edu.diplomasTitle": "Degrees & Training",
    "edu.languagesTitle": "Languages",
    "edu.kadea": "Software Development Training",
    "edu.kadeaInst": "Kadea Academy",
    "edu.kadeaPeriod": "June 2023 - June 2024",
    "edu.kadeaDesc": "Intensive software development training",
    "edu.kenyatta": "BSc in Mathematics & Computer Science",
    "edu.kenyattaInst": "Kenyatta University, Nairobi",
    "edu.kenyattaPeriod": "2016 - 2021",
    "edu.kenyattaDesc": "Statistics Option (Master's equivalent)",
    "edu.bakanja": "High School Diploma",
    "edu.bakanjaInst": "Institut Isidore Bakanja",
    "edu.bakanjaPeriod": "2008 - 2014",
    "edu.bakanjaDesc": "Scientific Bio-Chemistry Section",
    "edu.french": "French",
    "edu.english": "English",
    "edu.swahili": "Kiswahili",
    "edu.perfect": "Perfect",
    "edu.fluent": "Fluent",
    "edu.certifications": "Certifications & Achievements",
    "edu.cert1": "Open Source Contributor - Wikimedia",
    "edu.cert2": "HNG Internship Completed",
    "edu.cert3": "Kadea Academy Training",
    
    // Contact
    "contact.title": "CONTACT",
    "contact.heading": "Let's work",
    "contact.headingHighlight": "together",
    "contact.description": "Have a project in mind? I'm available to discuss your ideas and turn them into reality.",
    "contact.location": "Location",
    "contact.ready": "Ready to start your project?",
    "contact.readyDesc": "Contact me through my professional references or directly on GitHub",
    "contact.viewGithub": "View my GitHub",
    "contact.references": "References available upon request",
    
    // Footer
    "footer.madeWith": "Made with",
    "footer.in": "in Goma",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
