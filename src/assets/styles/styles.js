import styled from "styled-components";
import color from "../../constants/colors";

export const H1 = styled.h1`
  color: ${color.imperial};
  text-align: center;
`;

export const ProductUl = styled.ul`
  padding-left: 0;
  text-align: left;
`;

export const ProductLi = styled.li`
  color: ${color.blue};
  cursor: pointer;
  &:hover input {
    visibility: visible;
  }
  & > span {
    font-weight: bold;
  }
  & > input {
    border: unset;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 15px 35px,
      rgba(0, 0, 0, 0.07) 0px 5px 15px;
    padding: 1rem;
    margin: 1rem;
    visibility: hidden;
    &:focus {
      text-decoration: underline;
      text-decoration-color: ${color.imperial};
    }
  }
  & p {
    font-size: 1rem;
    padding: 0;
  }
`;
