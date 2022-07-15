import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  return (
    <DefaultPublicLayout title="Home">
      <span>body</span>
    </DefaultPublicLayout>
  )
}

export default HomeScreen
