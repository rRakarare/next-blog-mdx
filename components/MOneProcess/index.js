import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from './styles.module.css'
import styled from "styled-components";

const ParallaxContainer = styled(Parallax)`
    overflow: hidden;
    height: 500px!important;
`;

const SlopeBegin = styled.div`
  background-color: #20232f;
  clip-path: polygon(20% 0, 70% 0, 50% 100%, 0% 100%);
  position: absolute;
  width: 170%;
  height: 500px;
  cursor: pointer;
`;

const SlopeEnd = styled.div`
  clip-path: polygon(70% 0, 100% 0, 80% 100%, 50% 100%);
  background: linear-gradient(to right, deeppink 0%, coral 100%);
  position: absolute;
  width: 170%;
  height: 500px;
  cursor: pointer;
`;

const TextNumber = styled(ParallaxLayer)`
  pointer-events: none;
  justify-content: start !important;
  font-family: "Kanit", sans-serif;
  line-height: 0px;
  text-transform: uppercase;
  font-size: 300px;
  color: #545864;
`;

const Span = styled.span`
  display: inline-block;
  position: relative;
`

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <SlopeBegin />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <SlopeEnd />
    </ParallaxLayer>

    <TextNumber offset={offset} speed={0.3}>
      <Span>0{offset + 1}</Span>
    </TextNumber>
  </>
);

export default function MOneProcess() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div style={{ background: "#dfdfdf", maxHeight: "500px" }}>
      <ParallaxContainer className={styles.container} ref={parallax} pages={3} horizontal enabled={false}>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </ParallaxContainer>
    </div>
  );
}
