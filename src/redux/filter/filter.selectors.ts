import { RootState } from '../store.ts'
import { Teacher } from '../teachers/types.ts'

const filteredLanguages = (state: RootState) => {
  const { data } = state.teachers
  const languages = data.map((teacher: Teacher) => teacher.languages)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const sortedLanguages = languages.reduce<string[]>((acc, cur) => {
    cur.forEach((language: Partial<Teacher>) => {
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

  const levels = data?.map((teacher: Teacher) => teacher.levels)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const sortedLevels = levels.reduce<string[]>((acc, cur) => {
    cur.forEach((level: Partial<Teacher>) => {
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

  const prices = data?.map((teacher: Teacher) => teacher.price_per_hour)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const sortedPrices = prices
    .reduce<number[]>((acc: number[], cur: number) => {
      if (!acc.includes(cur)) {
        acc.push(cur)
      }
      return acc
    }, [])
    .sort((a: number, b: number) => a - b)

  return sortedPrices
}

export { filteredLanguages, filteredLevels, filteredPrices }
