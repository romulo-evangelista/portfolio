import { useRouter, usePathname } from "next/navigation";
import USSvgComponent from "../../../../public/assets/us";
import BRSvgComponent from "../../../../public/assets/br";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: string) =>
    router.push(`/${locale}/${pathname.replace(/^\/(en-US|pt-BR)/, '')}` )

  return (
    <div className="flex gap-2 mt-10">
      <button onClick={() => changeLanguage('en-US')}>
        en-US
        {/* <USSvgComponent /> */}
      </button>
      <button onClick={() => changeLanguage('pt-BR')}>
        pt-BR
        {/* <BRSvgComponent /> */}
      </button>
    </div>
  )
} 