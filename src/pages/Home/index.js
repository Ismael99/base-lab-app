import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { ContentHome } from './ContentHome'
import { infoCompanyData } from '../../data_test/company_info'
export const Home = () => {
  const HomeContainer = ({ children }) => (
    <div className="flex flex-col justify-between h-screen">{children}</div>
  )
  return (
    <HomeContainer>
      <Navbar {...infoCompanyData} />
      <ContentHome />
    </HomeContainer>
  )
}
