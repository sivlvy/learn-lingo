import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div style={{ padding: '0 64px', margin: '0 auto' }}>{children}</div>
}

export default Container
