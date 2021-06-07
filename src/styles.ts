import styled, { keyframes } from "styled-components";

const animaChanges = keyframes`
from {
  opacity: 0;
  transform: translateY(-100%) rotateY(360deg) scale(0.0);
}
to {
  opacity: 1;
  transform: translateY(0%) rotateY(0deg) scale(1);
}
`;

interface Tema {
  tema: boolean;
}

export const Wrapper = styled.main<Tema>`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => (props.tema ? "white" : "black")};

  margin: 20px 0;

  button {
    border: none;
    background-color: transparent;
    font-size: 1.5em;
    padding: 5px;
    cursor: pointer;
  }

  button svg {
    color: ${(props) => (props.tema ? "white" : "black")};
  }

  button:hover,
  button:hover svg {
    transition: all 0.25s;
    opacity: 0.8;
  }

  span {
    margin-top: 20px;
    font-size: 0.75rem;
    color: white;

    a {
      transition: all 0.25s;
      color: white;

      &:hover {
        color: black;
      }
    }
  }
`;

export const Theme = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  transition: all 0.25s;

  .dark {
    transform: rotate(180deg);
  }
`;

export const Display = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 10px;
  overflow: hidden;

  font-size: 2em;
  letter-spacing: 0.25em;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
`;

export const Controllers = styled.div<Tema>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  button {
    width: 60px;
    height: 60px;
    transition: all 0.25s;
    color: ${(props) => (props.tema ? "white" : "rgba(0,0,0, 0.7)")};
  }

  .column-left div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .column-right {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .column-left button svg {
    transition: all 0.25s;
    color: ${(props) => (props.tema ? "white" : "rgba(0,0,0, 0.7)")};
  }

  .column-right button,
  .column-right button svg {
    transition: all 0.25s;
    color: ${(props) => (props.tema ? "rgb(250, 60, 60)" : "rgba(0,0,0, 0.7)")};
  }

  .column-right button:last-child {
    border-radius: 0.5rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
    background-color: rgb(250, 60, 60);
    color: white;
  }
`;

export const Calculator = styled.div<Tema>`
  transition: all 0.25s;
  position: relative;
  background-color: ${(props) =>
    props.tema ? "rgb(46, 46, 46)" : "rgb(200, 200, 200)"};
  width: 300px;
  border-radius: 1rem;
  padding: 60px 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
  animation: 0.5s ${animaChanges} cubic-bezier(0.645, 0.045, 0.355, 1);
`;
