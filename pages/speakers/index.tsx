import { FC } from "react";
import styled from "styled-components";
import {
  NavBar,
  navbarBlue,
  SpeakerCard,
  SpeakerName,
  SpeakerSummary,
  Title,
  Company
} from "../../components";
import { speakers } from "../../data/speakers";
import { talks } from "../../data/talks";
/* import { FaTwitter, FaGithub } from "react-icons/fa"; */
/* import { Icon } from "./[id]"; */
import Link from "next/link";

const title = "Speakers";

const SpeakersPage: FC = () => (
  <>
    <Background />
    <NavBar title={title} backgroundColor={navbarBlue} bottom />
    {/* <Headline>{title}</Headline> */}
    <Speakers id="speakers">
      {Object.keys(speakers).map(id => {
        const speaker = speakers[id] || {};
        const talk = talks[speaker.talkId] || {};
        const time = talk.time || {};
        return (
          <Link key={id} href="/speakers/[id]" as={`/speakers/${id}`}>
            <a>
              <SpeakerCard>
                <img
                  src={speaker.picture}
                  alt={`picture of ${speaker.name}`}
                ></img>
                <SpeakerName>
                  <strong>{speaker.name}</strong>{" "}
                  {speaker.company && <Company>{speaker.company}</Company>}
                </SpeakerName>
                <SpeakerSummary>
                  {talk && (
                    <>
                      <p>
                        {time.start &&
                          time.end &&
                          `${time.start} - ${time.end}`}
                      </p>
                      <Title>{talk.title}</Title>
                      {/* {talk.subtitle && <Subtitle>{talk.subtitle}</Subtitle>} */}
                      {/* <Icon>
                    <FaGithub size={32}></FaGithub>
                    </Icon>
                    <Icon>
                      <FaTwitter size={32}></FaTwitter>
                    </Icon> */}
                    </>
                  )}
                </SpeakerSummary>
              </SpeakerCard>
            </a>
          </Link>
        );
      })}
    </Speakers>
  </>
);

export default SpeakersPage;

export const Headline = styled.h1`
  font-size: 2.3em;
  margin-top: 3vh;
  margin-bottom: -3vh;
  padding: 0;
  margin-left: 40px;

  @media screen and (max-width: 1280px) {
    font-size: 1.7em;
    margin-left: 25px;
  }
`;

const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(237, 0%, 48%, 0.15);
  padding: 25px;
  z-index: -1;
`;

const Speakers = styled.div`
  padding: 25px;
  padding-top: 6vh;
  padding-bottom: 100px;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1vw;
  grid-row-gap: 70px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2vw;
  }
`;
