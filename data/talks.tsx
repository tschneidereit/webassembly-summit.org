import { ReactNode } from "react";

export type Talk = {
  speakerId?: string;
  title?: ReactNode;
  time?: {
    start?: string;
    end?: string;
  };
  abstract?: ReactNode;
};

export const talks: { [id: string]: Talk } = {
  "1": {
    speakerId: "1",
    title: "Javascript's Journey to the Edge",
    time: {
      start: "10.15 am",
      end: "11.00 am"
    },
    abstract: (
      <>
        <p>
          In September of 2008, Google’s Chromium Project released V8, a
          JavaScript engine, as part of a browser optimization wave that
          heralded the era of JavaScript browser applications that we both love,
          and love to hate. Less than a year later, in 2009, Ryan Dahl announced
          (at this very conference!) a way to run the V8 browser environment
          outside of the browser- Node.js, a platform that held the promise of
          unifying web application development, where both client and server
          side development could happen in the same language - JavaScript.
        </p>
        <p>
          A decade later, V8, JavaScript, and its new buddy WebAssembly, have
          expanded to lands charted only a few years after Node.js debuted-
          known (confusingly) as the “Edge”. In this talk, we’ll introduce what
          the “Edge” is and why we are excited for it to revolutionize
          computation on the web. We’ll explore how this adventurous JavaScript
          engine, V8, is so well suited to tasks previously limited to Virtual
          Machines, Containers, or even simply Operating Systems. Finally, we’ll
          talk about security, Spectre, and ask ourselves the age old question,
          “You can do it, but should you?”.
        </p>
        <p>
          In true JSConf EU tradition, this talk itself is going be an exciting
          announcement. You should come if you want to be there for the
          beginning of a new era of the Internet.
        </p>
      </>
    )
  },
  "2": {
    speakerId: "2",
    title: (
      <>
        WebAssembly nanoprocesses: Making WebAssembly outside-the-browser secure
        by default
      </>
    ),
    time: {
      start: "11.15 am",
      end: "12.00 am"
    },
    abstract: (
      <>
        <p>
          In early November, we announced the formation of the Bytecode
          Alliance, a new industry partnership working on WebAssembly outside
          the browser. We have a vision of a WebAssembly ecosystem that is
          secure by default, fixing cracks in today’s software foundations. And
          based on advances rapidly emerging in the WebAssembly community, we
          believe we can make this vision real.
        </p>
        <p>
          I'll talk about one of these advances—an emerging pattern of usage
          that we've started calling a WebAssembly nanoprocess, which give you
          most of the benefits of a process, but with much less overhead and
          much faster communication. With this, we think we can make
          massively-modular code reuse—like you see in npm, crates, and
          PyPI—secure by default.
        </p>
      </>
    )
  },
  "3": {
    speakerId: "3",
    title: "Polyglot WebAssembly",
    time: {
      start: "12.15 am",
      end: "1.00 pm"
    },
    abstract: (
      <>
        <p>
          The number of languages with WebAssembly support is growing. And you
          don't have to choose just one. You can use each of them for what they
          are good at. You can sprinkle in some C, C++, Rust, AssemblyScript
          (and more) as enhancements for your everyday-JS.
        </p>
      </>
    )
  }
};

"";