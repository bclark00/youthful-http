import React from "react";
import icon from "../../assets/loading/White/Send_Results_White.svg";
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
      {loading.sendingResults && (
        <Container key="container">
          <IconandTextContainer>
            <Icon key="icon" src={icon} />
            <Text>Securely sending your results...</Text>
          </IconandTextContainer>
        </Container>
      )}
    </>
  );
};
