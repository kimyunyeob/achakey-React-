import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Gnb = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 1px solid black;
  margin: 0;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  color: black;

  ${(props) =>
    props.active &&
    css`
      color: red;
    `}
`;
