import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Gnb = styled.ul`
  
`;

export const StyledLink = styled(Link)`
  

  ${(props) =>
    props.active &&
    css`
      color: red;
    `}
`;
