import { Locale } from "@/types/locale";
import { GradientTitle } from "../gradient-title";
import { WorkExperienceItem } from "./components";

export const WorkExperience = ({ dict }: { dict: Locale }) => {
  return (
    <section className="flex flex-col gap-4">
      <GradientTitle title={dict.titles["work-experience"]} />

      <WorkExperienceItem
        dict={dict}
        workExperienceInfo={{
          companyName: "Thoughtworks",
          role: dict.experiences.Thoughtworks.role,
          period: dict.experiences.Thoughtworks.period,
          resume: dict.experiences.Thoughtworks.resume,
          results: dict.experiences.Thoughtworks.results,
          stack: dict.experiences.Thoughtworks.stack,
        }}
      />

      <WorkExperienceItem
        dict={dict}
        workExperienceInfo={{
          companyName: "Maxxi",
          role: dict.experiences.Maxxi.role,
          period: dict.experiences.Maxxi.period,
          resume: dict.experiences.Maxxi.resume,
          results: dict.experiences.Maxxi.results,
          stack: dict.experiences.Maxxi.stack,
        }}
      />

      <WorkExperienceItem
        dict={dict}
        workExperienceInfo={{
          companyName: "Lanlink",
          role: dict.experiences.Lanlink.role,
          period: dict.experiences.Lanlink.period,
          resume: dict.experiences.Lanlink.resume,
          stack: dict.experiences.Lanlink.stack,
        }}
      />

      <WorkExperienceItem
        dict={dict}
        workExperienceInfo={{
          companyName: "IMMI FS",
          role: dict.experiences.IMMIFS.role,
          period: dict.experiences.IMMIFS.period,
          resume: dict.experiences.IMMIFS.resume,
          stack: dict.experiences.IMMIFS.stack,
        }}
      />
    </section>
  );
};
