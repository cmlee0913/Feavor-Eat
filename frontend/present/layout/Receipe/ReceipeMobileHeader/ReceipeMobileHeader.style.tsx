import { theme } from "@/action/theme";
import styled from "styled-components";

// export const HoriSelector = styled.div<{ selectIdx: number }>`
//   position: absolute;
//   top: 0px;

//   & * {
//     display: inline-block;
//     width: 25px;
//     height: 25px;
//     background-color: ${(props) => theme.accordianColor[props.selectIdx]};
//   }

//   & .right:before {
//     content: "";
//     width: 50px;
//     height: 50px;
//     background-color: aqua;
//   }
// `;

export const Compo = styled.li<{ open: boolean; idx: number }>`
  display: inline-block;
  width: calc(100% / 3 - 4rem);
  padding: 1rem 2rem 1.5rem 2rem;
  text-align: center;

  &.active {
    /* background-color: ${(props) =>
      props.open
        ? theme.accordianColor[props.idx]
        : theme.colors.mono.light_1}; */
    color: ${(props) =>
      props.open ? theme.colors.mono.light_1 : theme.colors.mono.dark_1};
    position: relative;
    z-index: 6;
  }
`;

export const Indicator = styled.div<{ selectIdx: number }>`
  background-color: ${(props) => theme.accordianColor[props.selectIdx]};
  width: calc(100% / 3 - 4rem);
  padding: 1rem 2rem 1rem 2rem;
  height: 2.8rem;
  border-radius: 0 0 1rem 1rem;
  transition: ${theme.trans};
  position: absolute;
  top: -1rem;
  z-index: -1;
  left: calc(100% / 3 * ${(props) => props.selectIdx});

  & * {
    --width: 2rem;
    width: var(--width);
    position: absolute;
    top: calc(var(--width) * -1 - 3px);;
    fill: ${(props) => theme.accordianColor[props.selectIdx]};

    &:nth-child(1) {
      right: calc(var(--width) * -1 + 1px);
    }
    
    &:nth-child(2) {
      left: calc(var(--width) * -1 + 1px);
      transform: scaleX(-1);
    }
  }
`;

export const ContainerNav = styled.ul<{ selectIdx: number }>`
  display: none;
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  overflow-x: hidden;

  ${theme.devices.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
