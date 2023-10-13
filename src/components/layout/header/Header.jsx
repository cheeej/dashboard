import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Heading } from "@chakra-ui/react";

// function Header(){}
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyle as="h1" className="`logo">
        <Link to="/">logo</Link>
      </HeaderStyle>

      <Gnb />
    </HeaderWrapper>
  );
};

const HeaderStyle = styled(Heading)`
  color: var(--white);
  font-size: 2rem;
`;

const Logo = styled.h1`
  font-size: 30px;
  color: mintcream;
`;

// const 변수명 = styled.태그명`리터럴방식의 키값 및 벨류값`;
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;

  /* height: 100vh; */
  background-color: var(--primary-green);
`;

export default Header;
