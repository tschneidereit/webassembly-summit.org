import { ReactNode } from "react";
import styled from "styled-components";

export const Logo = styled.img`
  width: 175px;
  margin: 20px;
`;

export const faq: {
  question: string;
  answer: ReactNode;
}[] = [
  {
    question: "How much does it cost?",
    answer: (
      <>
        Given you have a ticket, attending the event itself is free. At this
        point in time, we do not cover travel expenses or offer scholarships. If
        that should change we will announce it.
      </>
    )
  },
  {
    question: "How can I get a ticket?",
    answer: (
      <>
        The application for tickets has already closed. If you had applied to
        participate in the ticket raffle for the event, you will get a
        notification via e-mail once you got a ticket. Note that there are
        several waves of invitations depending on when tickets become available.
      </>
    )
  },
  {
    question: "Can I transfer my ticket to someone else?",
    answer: (
      <>
        If you got a ticket but want to transfer it to a person that is more
        suitable to attend please send us an email to{" "}
        <a href="mailto:wasm-summit-2020@chromium.org" rel="noreferrer">
          wasm-summit-2020@chromium.org
        </a>{" "}
        with the new attendee's name and email and we will transfer the ticket.
      </>
    )
  },
  {
    question: "Is this a community event?",
    answer: (
      <>
        <div>
          Yes, the summit is organised by individual people in the WebAssembly
          community, and at the time of writing sponsored by Google and Mozilla.
        </div>
        <Logo src="/google-logo.svg" alt="Google Logo" />
        <Logo src="/mozilla-logo.svg" alt="Mozilla Logo" />
      </>
    )
  },
  {
    question: "Who is organizing this?",
    answer: (
      <>
        The organizers are (in alphabetical order):
        <ul>
          <li>Aaron Turner</li>
          <li>Ashley Williams</li>
          <li>Michael Hablich</li>
          <li>Surma</li>
          <li>Thomas Tränkler</li>
        </ul>
      </>
    )
  },
  {
    question: "How do I contact you?",
    answer: (
      <>
        If you need to get in contact with the organizers for whatever reason,
        please send an email to{" "}
        <a href="mailto:wasm-summit-2020@chromium.org" rel="noreferrer">
          wasm-summit-2020@chromium.org
        </a>
        . <br />
        <br />
        Thanks for all the support from the WebAssembly community!
      </>
    )
  },
  {
    question: "How do I find you on Twitter?",
    answer: (
      <>
        The official hashtag of the conference is{" "}
        <a href="https://twitter.com/search?q=%23WasmSummit&src=typed_query">
          #WasmSummit
        </a>
        . There is no dedicated Twitter account for the conference.
      </>
    )
  },
  {
    question: "Do you have a live chat?",
    answer: (
      <>
        {" "}
        The official chat channel of the conference is the{" "}
        <a href="https://discord.gg/nsYZMZw">#summit</a> channel on the
        WebAssembly Discord. Here you can exchange with the organizers or other
        attendees before, during or after the conference.
      </>
    )
  },
  {
    question: "Will you have a livestream?",
    answer: (
      <>
        Yes, the summit will be livestreamed on our{" "}
        <a
          href="https://www.youtube.com/channel/UCh9PqDCdacsTpyRaIryhA8g"
          target="_blank"
        >
          Youtube channel
        </a>
        . So no worries, even if you are not able to attend, you will be able to
        follow the event.
      </>
    )
  },
  {
    question: "Will you record the talks?",
    answer: (
      <>
        Yes, the talks will be uploaded on our{" "}
        <a
          href="https://www.youtube.com/channel/UCh9PqDCdacsTpyRaIryhA8g"
          target="_blank"
        >
          Youtube channel
        </a>
        . So no worries, even if you cannot attend or follow the livestream, you
        will be able to catch up on the talks later once they are published.
      </>
    )
  },
  {
    question: "Which hotels do you recommend?",
    answer: (
      <>
        Hotels can be expensive in Mountain View.{" "}
        <a href="https://www.airbnb.com/s/1625-Plymouth-St--Mountain-View--Kalifornien--USA/all">
          AirBnB
        </a>{" "}
        is a moderately priced option with offers around the conference site.
      </>
    )
  },
  {
    question: "Do you have a code of conduct?",
    answer: (
      <>
        WebAssembly Summit is intended an inclusive conference for everyone and
        will enforce our{" "}
        <a href="https://github.com/WebAssemblySummit/webassemblysummit.github.io/blob/dev/CODE_OF_CONDUCT.md">
          code of conduct
        </a>{" "}
        to make sure everybody feels welcome and safe. On-site, conference staff
        will be identifiable by their Wasm purple tshirts with "STAFF" on their
        back. If you need help of any kind, to report a bad situation, or
        anything else not specified that we can help with, please find us on
        site, DM us on twitter, or call/text.
      </>
    )
  }
];
