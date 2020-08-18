import React from "react";
import icon from "../../assets/loading/White/Secure_Connection_White.svg";
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
      {loading.authorizing && (
        <Container key="container">
          <IconandTextContainer>
            <Icon key="icon" src={icon} />
            <Text>Securing your connection...</Text>
          </IconandTextContainer>
        </Container>
      )}
    </>
  );
};
