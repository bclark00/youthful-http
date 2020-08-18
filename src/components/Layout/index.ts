import styled from "styled-components";
import media from "../../config/media";

const Column = styled.div`
  padding: 8px;
  min-height: 100%;
  max-width: 550px;
  margin: auto;
  // columns: 1;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Grid = styled.div`
  padding: 8px;
  min-height: 100%;
  max-width: 1200px;
  margin: auto;
  columns: 1;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }

  ${media.sm`
    padding: 16px;
    columns: 2;
  `}
`;

const DenseGrid = styled.div`
  padding: 8px;
  min-height: 100%;
  max-width: 1200px;
  margin: auto;
  columns: 1;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }

  ${media.sm`
    padding: 16px;
    columns: 2;
  `}

  ${media.xl`
    columns: 3;
  `}
`;

const Block = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
`;

export default { Block, Grid, DenseGrid, Column };
