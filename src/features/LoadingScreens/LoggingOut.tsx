import { AnimatePresence } from "framer-motion";
import React from "react";
import icon from "../../assets/loading/White/Log_Out_White.svg";
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
    <AnimatePresence>
      {loading.loggingOut && (
        <Container
          animate={{ opacity: 1 }}
          // transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          key="container"
        >
          <IconandTextContainer
            animate={{ y: -100, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Icon key="icon" src={icon} />
            <Text>Logging you out...</Text>
          </IconandTextContainer>
        </Container>
      )}
    </AnimatePresence>
  );
};
