import React from "react";
import icon from "../../assets/loading/White/Update_Profile_White.svg";
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
      {loading.updatingProfile && (
        <Container key="container">
          <IconandTextContainer>
            <Icon key="icon" src={icon} />
            <Text>Updating your profile...</Text>
          </IconandTextContainer>
        </Container>
      )}
    </>
  );
};
