import React from 'react';

import styled from 'styled-components';

const Ul = styled.ul`
ul{
  display:flex;
  flex-wrap: nowrap;
  list-style:none;
  li{
    padding: 18px 10px;
  }
}
@media (max-width: 1024px){
    flex-direction:column;
    background-color:#353943;
    position:fixed;
    top:0;
    right:0;
    width: 300px;
    height:100vh;
    padding-top: 70px;
    transition: transform .3s ease;
    transform: ${({open}) => open? 'translateX(0)': 'translateX(100%)'};
    li{
      padding: 25px 0;
    }
  }
@media (max-width: 820px){
  flex-direction:column;
  background-color:#353943;
  position:fixed;
  top:0;
  right:0;
  width: 300px;
  height:100vh;
  padding-top: 70px;
  transition: transform .3s ease;
  transform: ${({open}) => open? 'translateX(0)': 'translateX(100%)'};
  li{
    padding: 20px 0;
    border-top: 2px solid #353943;
  }
}
`;


const RightNav = ({open}) => {
  return (
    <Ul open={open}>
      <li>home</li>
      <li>about me</li>
      <li>services</li>
      <li>how work</li>
      <li>portfolio</li>
      <li>contact</li>
    </Ul>
   );
}

export default RightNav;
