const dictionaries = {
  'en-US': () => import('@/locales/en-US.json'),
  'pt-BR': () => import('@/locales/pt-BR.json')
}

export const getDictionary = async (locale: 'en-US' | 'pt-BR' ) =>
  dictionaries[locale]()
