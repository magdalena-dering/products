import React from "react";
import { DotWrapper, Dot } from "./styles";

const Loader = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
};
export default Loader;
