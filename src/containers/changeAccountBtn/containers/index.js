import React, { useEffect, useState } from "react";
import { Button } from "../styles";
import { AiOutlineArrowDown } from "react-icons/ai";
import Api from "../../../api";

const ChangeAccountBtn = () => {
  return (
    <>
      <Button><AiOutlineArrowDown/></Button>
    </>
  );
};

export default ChangeAccountBtn;
