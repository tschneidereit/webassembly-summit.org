export type Speaker = {
  name?: string;
  picture?: string;
  intro?: string;
  company?: string;
  website?: string;
  twitter?: string;
  github?: string;
  talkId?: string;
};

export const speakers: { [id: string]: Speaker } = {
  "1": {
    name: "Lin Clark",
    picture: "/lin-clark.jpg",
    company: "Mozilla",
    website: "https://twitter.com/linclark",
    talkId: "1",
    intro:
      "Lin is well known for her code cartoons, breaking down abstract technology into easily digestable cartoons. She is working at Mozilla on Rust and WebAssembly."
  },
  "2": {
    name: "Alon Zakai",
    company: "Google",
    picture: "/alon-zakai.jpeg",
    website: "https://twitter.com/kripken",
    talkId: "2",
    intro:
      "Alon is the co-creator of WebAssembly, its predecessor asm.js, and creator of Emscripten. He is making code run fast and at Google, previously Mozilla."
  },
  "3": {
    name: "Ashley Williams",
    company: "Cloudflare",
    picture: "/ashley-williams.jpg",
    website: "https://twitter.com/ag_dubs",
    talkId: "3",
    intro:
      "Ashley is part of the Rust and Rust WebAssembly WG Core team. She is working on Rust and WebAssembly tooling like wasm-pack and wasm-bindgen and works at Cloudflare."
  },
  "4": {
    name: "Tadeu Zagallo",
    company: "Apple",
    picture: "/tadeu-zagallo.jpg",
    website: "https://twitter.com/tadeuzagallo",
    talkId: "4",
    intro:
      "Tadeu works on JavaScriptCore at Apple and likes programming languages, VMs & compilers. He previously worked at Facebook and Uber."
  },
  "5": {
    name: "Peter Salomonsen",
    picture: "/peter-salomonsen.jpg",
    website: "https://twitter.com/salomonsen_p",
    talkId: "5",
    intro:
      "Peter is a software developer and hobby musician interested in WebAssembly and music programming."
  },
  "6": {
    name: "Johnathan Beri",
    company: "Wasm SF",
    picture: "/johnathan-beri.jpeg",
    website: "https://twitter.com/beriberikix",
    talkId: "6",
    intro:
      "Johnathan works at WeWork as a Product Manager. He is the organizer of WebAssembly San Francisco and interested in WebAssembly on IOT devices."
  },
  "7": {
    name: "Kevin Hoffman",
    picture: "/kevin-hoffman.jpeg",
    website: "https://twitter.com/kevinhoffman",
    talkId: "7",
    intro:
      "Kevin is author of Programming WebAssembly with Rust, sees WebAssembly as the next evolution of distributed computing and is working at CapitalOne."
  },
  "8": {
    name: "Brion Vibber",
    picture: "/brion-vibber.jpg",
    website: "https://twitter.com/brionv",
    talkId: "8",
    intro:
      "Brion is a lead software architect at the Wikimedia Foundation. He is using WebAssembly for polyfilling video codecs on unsupported browsers."
  },
  "9": {
    name: "Ben Smith",
    company: "Google",
    picture: "/ben-smith.jpg",
    website: "https://twitter.com/binjimint",
    talkId: "9",
    intro:
      "Ben is the chair of the WebAssembly Commmunity Group. He is working on the WebAssembly spec writes raw WebAssembly by hand, and is working at Google."
  }
};
