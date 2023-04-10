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
`
const RightContent = styled.div`
  flex: 1;
`
const List = styled.ul`
`
const ListItem = styled.li`
`


const Projects = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <List>
            {words.map((props) => (
              <ListItem key={props}>{props}</ListItem>
            ))}
          </List>
        </LeftContent>
        <RightContent></RightContent>
      </Container>
    </Section>
  )
}

export default Projects;