import {
  Body,
  Footer,
  Header,
  PublicLayout,
} from "components/templates/public-layout";
import React from "react";
import RelatedSearches from "features/related-searches/related-searches";

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  return (
    <PublicLayout title="Bem vindo à loja!">
      <Header className="py-4">
        <span>header</span>
      </Header>
      <Body className="py-4">
        <RelatedSearches />
      </Body>
      <Footer className="text-center">
        <span>footer</span>
      </Footer>
    </PublicLayout>
  );
};

export default HomeScreen;
