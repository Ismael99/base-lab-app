import React from 'react'
import { ContentHome } from './ContentHome'
export const Home = () => {
  const HomeContainer = ({ children }) => (
    <div className="flex flex-col justify-between h-screen">{children}</div>
  )
  return (
    <HomeContainer>
      <ContentHome />
    </HomeContainer>
  )
}
