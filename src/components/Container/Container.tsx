import { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  padding?: string
}

const Container: FC<ContainerProps> = ({ children, padding = '0 64px' }) => {
  return <div style={{ padding, margin: '0 auto' }}>{children}</div>
}

export default Container
