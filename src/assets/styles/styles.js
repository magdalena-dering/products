/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "../../constants/colors";

export const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

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
export const Button = styled(props => <Link {...props} />)`
  display: inline-block;
  border-radius: 2rem;
  border: unset;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: ${color.imperial};
  font-size: 1rem;
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
