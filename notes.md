# Overall implementation notes

<!-- TOC depthFrom:2 -->

- [Technology](#technology)
- [Build Steps](#build-steps)
    - [Step 1 : personal live recording](#step-1--personal-live-recording)
    - [Step X : make it look more professional](#step-x--make-it-look-more-professional)
    - [Step X : make the site accessable online](#step-x--make-the-site-accessable-online)
    - [Step X : live listening hookup to Discord or Skype](#step-x--live-listening-hookup-to-discord-or-skype)
    - [Step X : listen to Twitch or YouTube](#step-x--listen-to-twitch-or-youtube)
    - [Step X : implement with stuff like Wikipedia to give live status on a conversation](#step-x--implement-with-stuff-like-wikipedia-to-give-live-status-on-a-conversation)
- [Specific Areas Tech](#specific-areas-tech)
    - [Looking into audio stuff (for discord linking)](#looking-into-audio-stuff-for-discord-linking)
- [Enhancments](#enhancments)

<!-- /TOC -->

## Technology

Thinking mainly because it should fit and I like/want to learn more about the stuff:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Kotlin](https://kotlinlang.org/)
- [Ktor](https://ktor.io/)

## Build Steps

Only step 1 is in order.

### Step 1 : personal live recording

- [ ] Have a frontend that is web accessable (TypeScript because I dislike JS, React because it seems very nice)
- [ ] Serves as a live recorder of your conversation (Web Speech API)
- [ ] Allows taking live notes on the screen
- [ ] Create a backend that allows saving off all the content (unauthenticated)
- [ ] Backend allows reloading old conversations
- [ ] Document how to locally build and deploy

### Step X : make it look more professional

- [ ] Setup unit tests on both sides (frontend & backend)
- [ ] Setup CI building suite on Github for it

### Step X : make the site accessable online

- [ ] Add authentication and authorization to allow this to be deployed to some personal website
- [ ] Make it deployable to some cloud service and save data into something secure enough
- [ ] Deploy to a service and hook up to a database so I can use it wherever I want (e.g. for retros?)

### Step X : live listening hookup to Discord or Skype

- [ ] This is where internet conversations happen so if it needs to work for the internet world
    - [ ] This might involve either a local driver to forward audio into the web browser

### Step X : listen to Twitch or YouTube

- [ ] 

### Step X : implement with stuff like Wikipedia to give live status on a conversation

- [ ] Basically, you text match on a list of sources so that you can do "live fact checking" and/or display wikipedia stuff in line
- [ ] Allow maybe a list of fact links (pdfs or webpages) that the server auto parses and then checks against to see if it can populate live information to the user
- [ ] Have in line displays/suggestions about the details
- [ ] Sentiment analyis? e.g. how triggered does this person seem?

## Specific Areas Tech

### Looking into audio stuff (for discord linking)

- Looking into GoLang's Audio Libraries on [Awesome Go](https://awesome-go.com/) (The [Awesome Java](https://github.com/akullpp/awesome-java) didn't have a similar section)
    - Found [Go bindings PortAudio](https://godoc.org/github.com/gordonklaus/portaudio)
    - [PortAudio](http://www.portaudio.com/) is a cross-plateform OOS audio I/O library
    - Found a Java wrapper for PortAudio [JSyn](http://www.softsynth.com/jsyn/) for use if I want to make the API Kotlin based
- Found the [MacOS "Aggregate Device" Config](https://support.apple.com/en-us/HT202000)
    - If that doesn't work could try downloading and using [Loopback](https://www.rogueamoeba.com/loopback/) which appears to possibly do what I want? Might have to use [Audio Hijack](https://www.rogueamoeba.com/audiohijack/) with it.
    - Could look at making a wrapper specifically for MacOS with [Apple Developer Documentation](https://developer.apple.com/documentation) although PortAudio looked like a better way to go
- Had looked at the StackOverflow post ["Mac OS X virtual audio driver"](https://stackoverflow.com/questions/18443621/mac-os-x-virtual-audio-driver)
    - But it's top linked [WavTap](https://github.com/pje/WavTap) says it doesn't build on recent MacOS versions unless you downgrade your security

## Enhancments

Need to submit an updated to the `@types` repos `webspeechapi` to add `onaudioend: (ev: Event) => any;` to the `SpeechRecognition` interface:

```typescript
// Type definitions for Web Speech API
// Project: https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// Definitions by: SaschaNaz <https://github.com/saschanaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Spec version: 19 October 2012
// Errata version: 6 June 2014
// Corrected unofficial spec version: 6 June 2014

interface SpeechRecognition extends EventTarget {
    grammars: SpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;

    start(): void;
    stop(): void;
    abort(): void;

    onaudiostart: (ev: Event) => any;
    onaudioend: (ev: Event) => any;
    onsoundstart: (ev: Event) => any;
    onspeechstart: (ev: Event) => any;
    onspeechend: (ev: Event) => any;
    onsoundend: (ev: Event) => any;
    onresult: (ev: SpeechRecognitionEvent) => any;
    onnomatch: (ev: SpeechRecognitionEvent) => any;
    onerror: (ev: SpeechRecognitionError) => any;
    onstart: (ev: Event) => any;
    onend: (ev: Event) => any;
}
interface SpeechRecognitionStatic {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
}
declare var SpeechRecognition: SpeechRecognitionStatic;
declare var webkitSpeechRecognition: SpeechRecognitionStatic;

interface SpeechRecognitionError extends Event {
    error: string;
    message: string;
}

interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
}

interface SpeechRecognitionResult {
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
    /* Errata 02 */
    isFinal: boolean;
}

interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
    interpretation: any;
    emma: Document;
}

interface SpeechGrammar {
    src: string;
    weight: number;
}
interface SpeechGrammarStatic {
    prototype: SpeechGrammar;
    new(): SpeechGrammar;
}
declare var SpeechGrammar: SpeechGrammarStatic;
declare var webkitSpeechGrammar: SpeechGrammarStatic;

interface SpeechGrammarList {
    length: number;
    item(index: number): SpeechGrammar;
    [index: number]: SpeechGrammar;
    addFromURI(src: string, weight: number): void;
    addFromString(string: string, weight: number): void;
}
interface SpeechGrammarListStatic {
    prototype: SpeechGrammarList;
    new(): SpeechGrammarList;
}
declare var SpeechGrammarList: SpeechGrammarListStatic;
declare var webkitSpeechGrammarList: SpeechGrammarListStatic;
```
