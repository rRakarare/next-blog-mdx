import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from './styles.module.css'
import styled from "styled-components";

const ParallaxContainer = styled(Parallax)`
    position: "relative"!important;
    overflow: hidden;
    height: 500px!important;
`;

const SlopeBegin = styled.div`
  background-color: #263238;
  clip-path: polygon(20% 0, 70% 0, 50% 100%, 0% 100%);
  position: absolute;
  width: 170%;
  height: 500px;
  cursor: pointer;
`;

const SlopeEnd = styled.div`
  clip-path: polygon(70% 0, 100% 0, 80% 100%, 50% 100%);
  background: ${props => `linear-gradient(to right, #7a7a7a 20%, ${props.gradient} 100%)`};
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
  font-size: 250px;
  color: #ffffff;
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
      <SlopeEnd gradient={gradient} />
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
    <div style={{ background: "linear-gradient(90deg, #ffffff 20%, #a5a3a3)" }}>
      <ParallaxContainer className={styles.container} ref={parallax} pages={3} horizontal enabled={false}>
        <Page offset={0} gradient="#f7d147" onClick={() => scroll(1)} />
        <Page offset={1} gradient="#f75b47" onClick={() => scroll(2)} />
        <Page offset={2} gradient="#6747f7" onClick={() => scroll(0)} />
      </ParallaxContainer>
    </div>
  );
}
