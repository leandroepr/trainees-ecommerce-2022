import DefaultFooter from 'components/templates/public-layout/default-footer'
import DefaultHeader from 'components/templates/public-layout/default-header/default-header'
import React from 'react'
import { Body, Footer, Header } from '.'
import PublicLayout from './public-layout'

export interface DefaultPublicLayoutProps {
  title?: string
  className?: string
  children?: React.ReactNode
}
const DefaultPublicLayout: React.FC<DefaultPublicLayoutProps> = (props) => {
  return (
    <PublicLayout title={props.title}>
      <Header className="p-4 bg-primary">
        <DefaultHeader />
      </Header>
      <Body className={props.className}>{props.children}</Body>
      <Footer className="text-center">
        <DefaultFooter />
      </Footer>
    </PublicLayout>
  )
}

export default DefaultPublicLayout
