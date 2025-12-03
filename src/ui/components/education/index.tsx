import { Locale } from "@/types/locale";
import { Card } from "../card";
import { GradientTitle } from "../gradient-title";

export const Education = ({ dict }: { dict: Locale }) => {
  return (
    <section>
      <GradientTitle title={dict.titles.education} />

      <Card>
        <div className="font-[family-name:var(--font-geist-mono)]">
          <h2 className="font-bold text-1xl">
            SMD - Sistemas e Mídias Digitais
          </h2>
          <h3>Universidade Federal do Ceará - UFC</h3>
          <h4 className="italic">{dict.education["smd-period"]}</h4>
        </div>
      </Card>
    </section>
  );
};
