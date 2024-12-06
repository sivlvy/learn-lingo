import { RootState } from '../store.ts'

const filteredLanguages = (state: RootState) => {
  const { data } = state.teachers
  const languages = data?.map((teacher) => teacher.languages)
  const sortedLanguages = languages.reduce<string[]>((acc, cur) => {
    cur.forEach((language) => {
      if (!acc.includes(language)) {
        acc.push(language)
      }
    })
    return acc
  }, [])

  return sortedLanguages
}

const filteredLevels = (state: RootState) => {
  const { data } = state.teachers

  const levels = data?.map((teacher) => teacher.levels)

  const sortedLevels = levels.reduce<string[]>((acc, cur) => {
    cur.forEach((level) => {
      if (!acc.includes(level)) {
        acc.push(level)
      }
    })
    return acc
  }, [])

  return sortedLevels
}

const filteredPrices = (state: RootState) => {
  const { data } = state.teachers

  const prices = data?.map((teacher) => teacher.price_per_hour)

  const sortedPrices = prices
    .reduce<number[]>((acc, cur) => {
      if (!acc.includes(cur)) {
        acc.push(cur)
      }
      return acc
    }, [])
    .sort((a, b) => a - b)

  return sortedPrices
}

export { filteredLanguages, filteredLevels, filteredPrices }
