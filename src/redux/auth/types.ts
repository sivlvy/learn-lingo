export interface StateProps {
  user: User | null
  isLoading: boolean
  error: string | null | undefined
}

export type User = {
  email: string
  id: string
  token: string
  name?: string
}
