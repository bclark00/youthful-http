import React from "react";
import icon from "../../assets/loading/White/Update_App_White.svg";
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
      {loading.updatingApp && (
        <Container key="container">
          <IconandTextContainer>
            <Icon key="icon" src={icon} />
            <Text>Updating...</Text>
          </IconandTextContainer>
        </Container>
      )}
    </>
  );
};
