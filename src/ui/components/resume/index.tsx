import { Locale } from "@/types/locale";
import { GradientTitle } from "../gradient-title";

export const Resume = ({ dict }: { dict: Locale }) => {
  return (
    <section>
      <GradientTitle title={dict.titles.about} />
      <p>
        {dict.about["part-one"]}
        < br />< br />
        {dict.about["part-two"]}
        < br />< br />
        {dict.about["part-three"]}
      </p>
    </section>
  );
};
