import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
}

`;

export const Container = styled.section`
  width: 100%;
  background-color: #ffff00;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 50vh;
    border-radius: 50%;
    box-shadow: 2px 5px #53a7ea, 6px 4px #53a7ea, 5px 3px #53a7ea;
    transform: scale(0.8);
    transition: all 1s;
    cursor: cell;
  }

  h2 {
    width: 50vh;
    opacity: 0.8;
    text-align: center;
    font-family: arial black;
    text-decoration-line: overline;
    cursor: grab;
    box-shadow: 1px 1px black, 4px 2px #53a7ea, 5px 5px black;
  }
`;
