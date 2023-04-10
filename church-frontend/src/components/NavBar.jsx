import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  scroll-snap-align: center;

`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  padding-left: 45vh;
  @media only screen and (max-width: 800px) {
    padding-left: 40vh;
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 150px;

  @media only screen and (max-width: 800px) {
    padding-left: 0px;
  }
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const ListItem = styled.li`
  font-size: 25px;
  cursor: pointer;

  position: relative;
  text-decoration: none;
  letter-spacing: 0.5px;

  &:after{
    content:"";
    display: block;
    margin: left;
    background-color: #000000;
    height: 3px;
    width: 0;
    left: 0;
    transition 0.3s;
  }
  &:hover {
    color: #000000;
  }
  &:hover:after {
    width: 100%;
  }

`
const Button = styled.button`
  font-size: 16px;
  width: 100px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.olive};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`
const Logo = styled.img`
  height: 50px;
  opacity: none;
`
const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`


const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={require("../assets/images/EM.jpg")} alt="english ministry"/>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <Icons>
            <Icon src={require("../assets/images/search.png")} alt="search icon"/>
            <Button>This is a button</Button>
          </Icons>
        </Links>
      </Container>
    </Section>
  )
}
export default NavBar