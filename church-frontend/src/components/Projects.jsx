import React from "react";
import styled from "styled-components";


const words = [
  "Something1",
  "Something2",
  "Something3",
  "Something4",
  "Something5",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: center;
`

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RightContent = styled.div`
  flex: 1;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  position: relative;
  -webkit-text-stroke: .1px ${(props) => props.theme.colors.oliveDark};;
  // text-shadow: 0px 5px 5px grey; // for depth with characters.
  
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 0px;
    color: ${(props) => props.theme.colors.oliveDark};
    white-space: nowrap;
  }
  
  &:hover {
    ::after {
      animation: moveText 0.3s linear both;

      @keyframes moveText {
        to {
          width: 100%
        }
      }
    }

  }
`


const Projects = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <List>
            {words.map((props) => (
              <ListItem key={props} text={props}>{props}</ListItem>
            ))}
          </List>
        </LeftContent>
        <RightContent></RightContent>
      </Container>
    </Section>
  )
}

export default Projects;