export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    title: "exp.tantorTitle",
    company: "Tantor Learning",
    period: "exp.tantorPeriod",
    description: ["exp.tantorDesc1", "exp.tantorDesc2", "exp.tantorDesc3"],
    current: true,
  },
  {
    title: "exp.kaliTitle",
    company: "Kali Académie",
    period: "exp.kaliPeriod",
    description: ["exp.kaliDesc1", "exp.kaliDesc2", "exp.kaliDesc3"],
  },
  {
    title: "exp.chickzoneTitle",
    company: "Chickzone",
    period: "exp.chickzonePeriod",
    description: [
      "exp.chickzoneDesc1",
      "exp.chickzoneDesc2",
      "exp.chickzoneDesc3",
    ],
  },
  {
    title: "exp.hngTitle",
    company: "HNG Internship",
    period: "exp.hngPeriod",
    description: ["exp.hngDesc1", "exp.hngDesc2"],
  },
  {
    title: "exp.rcoTitle",
    company: "RCO Kasese Organisation",
    period: "exp.rcoPeriod",
    description: ["exp.rcoDesc1", "exp.rcoDesc2", "exp.rcoDesc3"],
  },
  {
    title: "exp.detofaTitle",
    company: "Detofa Entreprise",
    period: "exp.detofaPeriod",
    description: ["exp.detofaDesc1", "exp.detofaDesc2", "exp.detofaDesc3"],
  },
  {
    title: "exp.girenadTitle",
    company: "Girenad ASBL",
    period: "exp.girenadPeriod",
    description: ["exp.girenadDesc1", "exp.girenadDesc2", "exp.girenadDesc3"],
  },
];
