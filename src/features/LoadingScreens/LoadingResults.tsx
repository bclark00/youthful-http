import React from "react";
import icon from "../../assets/loading/White/Load_Results_White.svg";
import Store from "../../store";
import {
  Container,
  Icon,
  IconandTextContainer,
  Text
} from "./styledComponents";

export default () => {
  const { loading } = Store.useContainer();
  return (
    <>
      {loading.loadingResults && (
        <Container key="container">
          <IconandTextContainer>
            <Icon key="icon" src={icon} />
            <Text>Loading your results...</Text>
          </IconandTextContainer>
        </Container>
      )}
    </>
  );
};
