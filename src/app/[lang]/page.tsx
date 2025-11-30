import { getDictionary } from "./dictionaries";
import { Locale } from "@/types/locale";
import Home from "@/ui/components/home";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en-US' | 'pt-BR' }>
}) {
  const { lang } = await params;
  const dict: Locale = (await getDictionary(lang)).default;

  return <Home dict={dict} />;
}
