import { Teacher } from '../redux/teachers/types.ts'

export const filterTeachers = (
  data: Teacher[],
  selectedLevel: string,
  selectedLanguage: string,
  selectedPrice: string
): Teacher[] => {
  const matchesLevel = (teacher: Teacher) =>
    !selectedLevel || teacher.levels.includes(selectedLevel)

  const matchesLanguage = (teacher: Teacher) =>
    !selectedLanguage || teacher.languages.includes(selectedLanguage)

  const matchesPrice = (teacher: Teacher) =>
    !selectedPrice || teacher.price_per_hour === Number(selectedPrice)

  return data.filter(
    (teacher) =>
      matchesLevel(teacher) && matchesLanguage(teacher) && matchesPrice(teacher)
  )
}
