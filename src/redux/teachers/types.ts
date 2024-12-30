export interface StateProps {
  data: Teacher[]
  favorites: Teacher[]
  isLoading: boolean
  error: Error | null
}

export type Teacher = {
  id: number
  avatar_url: string
  conditions: string[]
  experience: string
  languages: string[]
  lesson_info: string
  lessons_done: number
  levels: string[]
  name: string
  price_per_hour: number
  rating: number
  reviews: Review[]
  surname: string
}

type Review = {
  comment: string
  reviewer_name: string
  reviewer_rating: number
}
