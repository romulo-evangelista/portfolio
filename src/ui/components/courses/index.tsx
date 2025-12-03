import { Locale } from "@/types/locale";
import { GradientTitle } from "../gradient-title";
import { CourseItem } from "./components";

export const Courses = ({ dict }: { dict: Locale }) => {
  return (
    <section className="flex flex-col gap-4 font-[family-name:var(--font-geist-mono)]">
      <GradientTitle title={dict.titles.courses} />

      <CourseItem
        title="Flutter"
        platform="Dell Lead"
        period={dict.courses.flutter}
      />

      <CourseItem
        title="Machine Learning"
        platform="Dell Lead"
        period={dict.courses.ml}
      />

      <CourseItem
        title="Scrum Foundation Professional Certificate (SFPC)"
        platform="CertiProf"
        period={dict.courses.scrum}
      />

      <CourseItem
        title="iOS Foundation"
        platform="Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)"
        period={dict.courses["ios-foundation"]}
      />
    </section>
  );
};
