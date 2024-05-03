import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Nav = () => {

  const[show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.screenY > 50){
        handleShow(true)
      } else {
        handleShow(false)
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  },[]);



  return (
    <NavWrapper show={show}>
      <Logo>  
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
    </NavWrapper>
  )
}
 
export default Nav


const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.show ? "#090b13" : "transparent"}; 
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding:0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  diplay: inline-block;

  img {
    display: block;
    width: 100%;
  }
`