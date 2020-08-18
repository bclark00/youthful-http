//@ts-ignore
import { css } from "styled-components";

// interface;
const sizes: any = {
  xl: 1140,

  md: 768,
  sm: 576
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc: any, label: any) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      //@ts-ignore
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
