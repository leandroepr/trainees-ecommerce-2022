import DefaultHeader from 'components/default-header/default-header'
import {
  Body,
  Footer,
  Header,
  PublicLayout,
} from 'components/templates/public-layout'
import FooterComponent from 'features/footer-component'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  return (
    <PublicLayout title="Bem vindo à loja!">
      <Header className="py-4">
        <DefaultHeader />
      </Header>
      <Body className="py-4">
        <span>body</span>
      </Body>
      <Footer className="text-center">
        <FooterComponent />
      </Footer>
    </PublicLayout>
  )
}

export default HomeScreen
