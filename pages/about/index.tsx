import { FC, ReactNode } from "react";
import styled from "styled-components";
import { navbarBlue } from "../../components/colors";
import NavBar from "../../components/NavBar";
import { wasmPurple, wasmDarkPurple } from "../../components/colors";
import { faq } from "../../data/about";

const title = "About";

const AboutPage: FC = () => (
  <>
    <Background />
    <NavBar title={title} backgroundColor={navbarBlue} bottom />
    <Faq id="faq">
      <Headline>{title}</Headline>
      <Questions>
        {faq.map(({ question, answer }, index) => (
          <QuestionAnswerPair key={question}>
            <Question>{`${index + 1}. ${question}`}</Question>
            <Answer>{answer}</Answer>
          </QuestionAnswerPair>
        ))}
      </Questions>
    </Faq>
  </>
);

export default AboutPage;

export const Background = styled.div`
  background-color: white; /* hsla(237, 60%, 48%, 0.6); */
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
  margin-bottom: 0vh;
  padding: 15px;
  color: black;
`;

const Faq = styled.div`
  padding: 7vh 5vw;
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
  color: black;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1vw;
  grid-row-gap: 0px;
  grid-column-gap: 5vw;

  /*   columns: auto;
  column-width: 300px;
  column-gap: 50px;
  column-rule: 1px solid rgba(0, 0, 0, 0.1);
 */
  a {
    color: ${wasmDarkPurple};
    text-decoration: underline;
    &:visited {
      color: ${wasmDarkPurple};
      text-decoration: underline;
    }
  }
`;

const QuestionAnswerPair = styled.div`
  break-inside: avoid;
`;

const Question = styled.h2`
  font-size: 1.5em;
  margin: 0 25px 0 0;
  padding: 25px 15px;
  font-weight: 700;
  border-bottom: 8px solid rgb(220, 220, 220);
  /*   text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3); */
`;

const Answer = styled.div`
  font-size: 1.2em;
  margin: 30px 25px 0 0;
  padding: 0 15px 20px 25px;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.7);
  /* text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25); */
  font-weight: normal;

  @media screen and (max-width: 749px) {
    fonts-size: 1em;
  }
`;
