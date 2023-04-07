import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 10;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  padding-left: 55vh;
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
`
const List = styled.ul`
  display:flex;
  gap: 20px;
  list-style: none;
`
const ListItem = styled.li`
  font-size: 20px;

`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #8d8b55;
  color: white;
  &:hover {
    color: black;
  }
`
const Logo = styled.img`
  height: 40px;
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