import { FC, ReactNode } from "react";
import styled from "styled-components";
import { NavBar, navbarBlue, wasmPurple } from "../components";
import { speakers } from "../data/speakers";
import { talks } from "../data/talks";
import Link from "next/link";

const title = "Talks";

const SpeakerPage: FC = () => (
  <>
    <Background />
    <NavBar title={title} backgroundColor={navbarBlue} bottom />
    <Faq id="faq">
      <Headline>{title}</Headline>
      <Questions>
        {Object.keys(speakers).map((id, index) => {
          const speaker = speakers[id] || {};
          const talk = talks[speaker.talkId] || {};
          return (
            <a style={{ textDecoration: "none" }} id={id}>
              <Row key={id}>
                <Time>10:15 AM</Time>

                <Circle></Circle>
                <QuestionAnswerPair key={id}>
                  <Link
                    key={id}
                    href={`/speakers#${id}`}
                    as={`/speakers#${id}`}
                    passHref
                  >
                    <a>
                      <Image
                        src={speaker.picture}
                        alt={`picture of ${speaker.name}`}
                      ></Image>
                    </a>
                  </Link>
                  <SpeakerName>{speaker.name}</SpeakerName>
                  <TalkTitle>{talk.title}</TalkTitle>
                  <Answer>{talk.abstract}</Answer>
                </QuestionAnswerPair>
              </Row>
            </a>
          );
        })}
      </Questions>
    </Faq>
  </>
);

export default SpeakerPage;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 25px;
`;

const Image = styled.img`
  max-width: 175px;
  border-radius: 50%;
  border: 10px solid rgb(150, 150, 200, 1);
  margin: 15px;
  transition: 150ms;

  @media screen and (max-width: 500px) {
    max-width: 125px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Time = styled.div`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.75);
  margin: -1px calc(2vw + 5px) 0 0;

  @media screen and (max-width: 500px) {
    font-size: 0.75em;
    line-height: 1.7;
    /* margin: 15px 0; */
    transform-origin: center center;
  }
`;

const Circle = styled.div`
  border-radius: 100%;
  border: 3px solid white;
  z-index: 2;
  /* margin-top: 20px; */
  margin-right: -8px;
  background: hsla(237, 40%, 48%, 1);
  width: 10px;
  height: 10px;
`;

export const Background = styled.div`
  background-color: hsla(237, 0%, 48%, 0.15);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const Headline = styled.h1`
  font-size: 3em;
  margin-top: 3vh;
  margin-bottom: 3vh;
  padding: 10px;
`;

const Faq = styled.div`
  padding: 3vh 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  a {
    color: white;
    text-decoration: underline;
    &:visited {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Questions = styled.div`
  background-color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "transparent"};
  box-shadow: ${(props: { primary?: boolean }) =>
    props.primary ? "0px 5px 30px rgba(0,0,0,0.01)" : "0px"};
  color: #fff;
  border-radius: 5px;
  /* columns: 1;
  column-width: 500px;
  column-gap: 10vw; */
  a {
    color: white;
    text-decoration: underline;
    &:visited {
      color: white;
      text-decoration: underline;
    }
  }
`;

const QuestionAnswerPair = styled.div`
  break-inside: avoid;
  max-width: 600px;
  flex: 1;
  border-left: 2px dashed rgba(255, 255, 255, 0.15);
  padding-left: calc(3vw + 10px);
`;

const TalkTitle = styled.h2`
  font-size: 1.5em;
  padding-bottom: 30px;
  margin-top: 0;
  padding-left: 5px;
  font-weight: 700;
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);
  @media screen and (max-width: 500px) {
    font-size: 1.4em;
  }
`;

const SpeakerName = styled.p`
  font-size: 1.3em;
  margin-top: 0px;
  margin-bottom: 15px;
  padding: 0 15px 0 5px;
  font-weight: normal;
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);
`;

const Answer = styled.div`
  font-size: 1.2em;
  padding: 5px 15px 50px 5px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};

  @media screen and (max-width: 500px) {
    font-size: 1.2em;
    line-height: 1.7;
  }
`;
