import React from "react";
import icon from "../../assets/loading/White/Loading_Messages_White.svg";
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
      {loading.loadingMessages && (
        <Container key="container">
          <IconandTextContainer>
            <Icon key="icon" src={icon} />
            <Text>Loading your messages...</Text>
          </IconandTextContainer>
        </Container>
      )}
    </>
  );
};
