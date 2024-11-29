export interface StateProps {
  name: null | string
  email: null | string
  id: null | string
  token: null | string
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  FULLWIDTH = 'fullwidth'
}

export enum ButtonType {
  ORANGE = 'orange',
  BLACK = 'black'
}

export interface PatterProps {
  value: RegExp
  message: string
}

export const emailPattern = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: 'Invalid email address'
}

export const passwordPattern = {
  value: /^(\+?38)?0\d{9}$/,
  message: 'Invalid phone number'
}
