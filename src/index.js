import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Flex = styled.div`
  display: flex;
`;

const Grid = styled.div`
  position: relative;
  min-width: 800px;
  display: grid;
  padding: 0px;
  margin: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  align-items: center;
  justify-content: start;
  align-content: center;
  grid-auto-flow: row dense;
  transition: all .5s ease;
  box-sizing: border-box;
`;

const GridItem = styled.div`
  width: auto;
  heigth: auto;
  background-color: yellow;
  box-sizing: border-box;
  transition: transform .4s ease, opacity .5s ease;
  box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.75);
  &:active {
    transform: scale(1.5);
    opacity: .2;
  }
`;

const HiddenItem = styled.div`
  position: absolute;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  z-index: -1;
  top: 0;
  left: 0;
  border: 1px solid green;
  background-color: blue;
  box-sizing: border-box;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

function App() {
  const items = new Array(99).fill(0).map((item, i) => (
    <GridItem key={i}>
      <Img src={`https://picsum.photos/600/400/?image=${i + 20}`} />
    </GridItem>
  ));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Flex>
        <Grid>
          {items}
          <HiddenItem>
            <Img src={`https://picsum.photos/600/400/?random`} />
          </HiddenItem>
        </Grid>
      </Flex>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
