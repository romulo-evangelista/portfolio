export interface Locale {
  about: {
      "part-one": string;
      "part-two": string;
      "part-three": string;
  };
  titles: {
    about: string,
    "work-experience": string,
    education: string,
    courses: string
  },
  experiences: {
    Thoughtworks: {
      role: string;
      period: string;
      resume: string;
      results: string[];
      stack: string[];
    };
    Maxxi: {
      role: string;
      period: string;
      resume: string;
      results: string[];
      stack: string[];
    };
    Lanlink: {
      role: string;
      period: string;
      resume: string;
      stack: string[];
    };
    IMMIFS: {
      role: string;
      period: string;
      resume: string;
      stack: string[];
    };
  },
  education: {
    "smd-period": string
  },
  courses: {
    flutter: string,
    ml: string,
    scrum: string,
    "ios-foundation": string
  };
}