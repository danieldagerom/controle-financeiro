import React from "react";
import * as C from "./styles";
import ResumeItem from "../ResumeItem";

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" icon={FaRegArrowAltCircleUp}/>
      <ResumeItem title="Saídas" icon={FaRegArrowAltCircleDown}/>
      <ResumeItem title="Total" icon={FaDollarSign}/>
    </C.Container>
  );
};

export default Resume;
