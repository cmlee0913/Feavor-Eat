import styled from "styled-components";
import { theme } from "@/constant/theme";
import { fadeInUp } from "../Guide/Guide.style";

const align = ["right", "left", "right", "left", "right"];

export const IngreContainer = styled.div<{ idx: number }>`
  height: fit-content;
  position: absolute;
  top: calc((15.5vw - 4rem) * ${(props) => props.idx} / 2 + 12rem);
  left: calc(17vw * ${(props) => props.idx} + 8vw);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    height: auto;

    &:nth-child(1) {
      position: relative;
      width: 100% !important;
      animation: ${fadeInUp} 1s;
    }

    &:nth-child(2) {
      animation: ${fadeInUp} 1.5s;
      position: absolute;
      z-index: 6;
    }
  }

  & div {
    position: absolute;
    width: 100%;
    font-size: 120%;
    color: ${theme.colors.main.blue};
    font-family: "Pretendard-Bold";
    animation: ${fadeInUp} 1.5s;
    text-align: ${(props) => align[props.idx]};
  }

  &:hover {
    & img {
      height: auto;

      &:nth-child(1) {
        position: relative;
        height: inherit;
        width: 110%  !important;
      }
    }
  }

  ${theme.devices.tablet} {
    position: relative;
    top: 0;
    left: 0;
  }

  ${theme.devices.mobile} {
    position: relative;
    top: 0;
    left: 0;
  }
`;

export const InnerHeader = styled.div``;

export const InnerBody = styled.div`
  width: 100%;
  height: 100%;

  ${theme.devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const InnerContainer = styled.div`
  width: 90vw;
  height: 100vh;
  background-color: ${theme.colors.background.pink};
  position: absolute;
  left: 0;
  z-index: 5000;
  display: flex;
  flex-direction: column;
  
  ${theme.devices.desktop} {
    padding: 20vh 5vw 10vh 5vw;
    top: 0;
  }

  ${theme.devices.tablet} {
    padding: 4vh 5vw 10vh 5vw;
    top: -12rem;
  }
`;
