import styled from "styled-components";
import color from "../../constants/colors";

export const Info = styled.p`
  text-align: center;
`;

export const Card = styled.div`
  height: 100%;
  margin-top: 2rem;
  padding: 2rem;
`;

export const Button = styled.button`
  white-space: nowrap;
  display: inline-block;
  border: unset;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: ${color.imperial};
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: ${color.white};
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  &:hover {
    color: ${color.white};
    background-color: ${color.blue};
    -webkit-transform: translateY(-0.4rem);
    transform: translateY(-0.4rem);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    text-decoration: none;
  }
`;
