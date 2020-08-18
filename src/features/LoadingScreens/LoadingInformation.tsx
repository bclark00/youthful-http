import React from "react";
import icon from "../../assets/loading/White/Loading_Data_White.svg";
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
      {loading.loadingInformation && (
        <Container key="container">
          <IconandTextContainer>
            <Icon key="icon" src={icon} />
            <Text>Loading your secure data...</Text>
          </IconandTextContainer>
        </Container>
      )}
    </>
  );
};
