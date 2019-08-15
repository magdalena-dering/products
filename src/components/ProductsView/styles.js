import styled from "styled-components";
import color from "./../../constants/colors";

export const Card = styled.div`
  height: 100%;
  border-radius: 1.6rem;
  margin-top: 2rem;
  box-shadow: rgba(50, 50, 93, 0.1) 0px 15px 35px,
    rgba(0, 0, 0, 0.07) 0px 5px 15px;
  padding: 2rem;
`;

export const ColMargin = {
  marginBottom: "2rem"
};

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const IMG = styled.img`
  width: 100%;
  border-bottom: 0.1rem solid ${color.imperial};
  padding: 1rem;
`;
