import { TeacherItem } from '../redux/teachers/types.ts'

export const filterTeachers = (
  data: TeacherItem[],
  selectedLevel: string,
  selectedLanguage: string,
  selectedPrice: string
): TeacherItem[] => {
  const matchesLevel = (teacher: TeacherItem) =>
    !selectedLevel || teacher.levels.includes(selectedLevel)

  const matchesLanguage = (teacher: TeacherItem) =>
    !selectedLanguage || teacher.languages.includes(selectedLanguage)

  const matchesPrice = (teacher: TeacherItem) =>
    !selectedPrice || teacher.price_per_hour === Number(selectedPrice)

  return data.filter(
    (teacher) =>
      matchesLevel(teacher) && matchesLanguage(teacher) && matchesPrice(teacher)
  )
}
