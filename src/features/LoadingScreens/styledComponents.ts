import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  z-index: 8;
  position: absolute;
  background: white;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const IconandTextContainer = styled(motion.div)`
  height: 250px;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const Icon = styled.img`
  height: 150px;
`;

export const Text = styled.p`
  height: 36;
  font-size: 24px;
  font-weight: 700;
  font-family: "Source Sans Pro";
  color: bluePrimary;
`;

// export const IconAnimation = posed.div({
//   enter: {
//     y: 0,
//     opacity: 1,
//     delay: 300,
//     transition: {
//       y: { type: "spring", stiffness: 1000, damping: 15 },
//       default: { duration: 300 }
//     }
//   },
//   exit: {
//     y: 50,
//     opacity: 0,
//     transition: { duration: 150 }
//   }
// });
// export const ContainerAnimation = posed.div({
//   enter: { opacity: 1 },
//   exit: { opacity: 0 }
// });
