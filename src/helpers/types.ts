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
