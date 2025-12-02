import { useRouter, usePathname } from "next/navigation";
import USSvgComponent from "../../../../public/assets/us";
import BRSvgComponent from "../../../../public/assets/br";
import { IconButton } from "../icon-button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: string) =>
    router.push(`/${locale}/${pathname.replace(/^\/(en-US|pt-BR)/, '')}` )

  return (
    <div className="flex gap-2 mt-10">
      <IconButton onClick={() => changeLanguage('en-US')}>
        <USSvgComponent />
      </IconButton>
      |
      <IconButton onClick={() => changeLanguage('pt-BR')}>
        <BRSvgComponent />
      </IconButton>
    </div>
  )
} 